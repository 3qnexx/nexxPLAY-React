import React from 'react';
import NexxBase from "./NexxBase";

class NexxWidget extends NexxBase{

	constructor(props){
		super(props,['launchMode','userHash'],'widget');

		if(this.props.widgetHash){
			this.config.widgetHash=this.props.widgetHash;
		}else{
			this.config.widgetHash="";
		}
		if(this.props.secret){
			this.config.secret=this.props.secret;
		}
		window.removeEventListener("message",this.onPostMessage);
		if(this.props.onWidgetClick){
			this.onPostMessage=this.onPostMessage.bind(this);
			window.addEventListener("message",this.onPostMessage);
		}
	}

	onPostMessage(e){
		if(e.origin===this.usedHost){
			if(e.data.frameName==this.name){
				this.props.onWidgetClick(e.data.data);
			}
		}
	}

	buildSrc(){
		return("widget/"+this.config.widgetHash+(this.config.hasOwnProperty("secret")?this.config.secret:""));
	}

}

export default NexxWidget;