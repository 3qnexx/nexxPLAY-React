import React from 'react';
import NexxBase from "./NexxBase";

const supportedStreamtypes={
	VIDEO:'video',
	AUDIO:'audio',
	LIVE:'live',
	RADIO:'radio',
	PLAYLIST:'playlist',
	AUDIO_ALBUM:'audioalbum',
	COLLECTION:'collection',
	SET:'set',
	RACK:'rack'
};

class NexxPLAY extends NexxBase{

	constructor(props){
		super(props,['delay','autoPlay','dataMode','menuMode','exitMode','disableAds','streamingFilter','consentString'],'play');

		if(this.props.streamtype){
			if(Object.values(supportedStreamtypes).includes(this.props.streamtype)){
				this.config.streamtype=this.props.streamtype;
			}else{
				this.config.streamtype=supportedStreamtypes.VIDEO;
			}
		}else{
			this.config.streamtype=supportedStreamtypes.VIDEO;
		}
		if(this.props.mediaHash){
			this.config.mediaHash=this.props.mediaHash;
		}

		window.removeEventListener("message",this.onPostMessage);
		if((this.props.onPlayerEvent)||(this.props.onPlayerData)){
			this.onPostMessage=this.onPostMessage.bind(this);
			window.addEventListener("message",this.onPostMessage);
		}
	}

	onPostMessage(e){
		if(e.origin===this.usedHost){
			if(e.data.frameName==this.name){
				let data=e.data;
				if(data.hasOwnProperty("event")){
					if(this.props.onPlayerEvent){
						this.props.onPlayerEvent(data);
					}
				}else if(this.props.onPlayerData){
					this.props.onPlayerData(data);
				}
			}
		}
	}


	buildSrc(){
		return(this.config.streamtype+"/"+this.config.mediaHash);
	}

	#playbackControl(command,param){
		if(this.instance){
			let obj={cmd:command};
			if(param){
				obj.param=param;
			}
			this.instance.contentWindow.postMessage(obj,this.usedHost);
		}
	}

	pause(){
		this.#playbackControl("pause");
	}

	play(){
		this.#playbackControl("play");
	}

	toggle(){
		this.#playbackControl("toggle");
	}

	mute(){
		this.#playbackControl("mute");
	}

	unmute(){
		this.#playbackControl("unmute");
	}

	seekTo(time){
		this.#playbackControl("seekTo",time);
	}

	seekBy(seconds){
		this.#playbackControl("seekBy",seconds);
	}

	next(){
		this.#playbackControl("next");
	}

	previous(){
		this.#playbackControl("previous");
	}

	swapToPosition(pos){
		this.#playbackControl("swapToPosition",pos);
	}

	getCurrentMedia(){
		this.#playbackControl("getCurrentMedia");
	}

	getCurrentMediaParent(){
		this.#playbackControl("getCurrentMediaParent");
	}

	getCurrentPlaybackState(){
		this.#playbackControl("getCurrentPlaybackState");
	}
}

export default NexxPLAY;