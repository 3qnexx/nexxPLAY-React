import React from 'react';

const defaultHost="embed.nexx.cloud";

class NexxBase extends React.Component{

	constructor(props,acceptedOverrides,frameTemplate){
		super(props);

		this.instance=null;
		this.name='nxp-'+frameTemplate+'-'+new Date().getTime();
		this.params={environment:'react'};
		this.config={domain:0,protocol:"https"};
		if(this.props.domain){
			this.config.domain=parseInt(this.props.domain);
		}
		if(this.props.protocol==='http'){
			this.config.protocol=this.props.protocol;
		}
		if(this.props.deliveryPartner){
			this.config.deliveryPartner=this.props.deliveryPartner;
		}

		let host=defaultHost;
		if(this.props.embedHost){
			host=this.props.embedHost;
			if(host.startsWith("http")){
				host=host.split("://")[1];
			}
			if(host.endsWith("/")){
				host=host.splice(0,-1);
			}
		}
		this.usedHost=(this.config.protocol+"://")+host;

		acceptedOverrides.push('language');
		acceptedOverrides.push('direction');
		acceptedOverrides.push('affiliateCode');

		if((this.props.hasOwnProperty("params"))&&(typeof(this.props.params)=="object")){
			for (let [key, value] of Object.entries(this.props.params)) {
				if(acceptedOverrides.includes(key)){
					this.params[key]=value;
				}
			}
		}
	}

	componentDidMount() {
		if(this.props.onRef){
			this.props.onRef(this);
		}
	}

	componentWillUnmount() {
		if(this.props.onRef){
			this.props.onRef(undefined);
		}
	}

	buildProps(){
		let props={};
		if(this.props){
			if(this.props.id){
				props.id=this.props.id;
			}
			if(this.props.name){
				this.name=this.props.name;
				props.name=this.props.name;
			}
		}
		if(!props.name){
			props.name=this.name;
		}
		return(props);
	}

	buildSrc(){
		return("");
	}

	buildFinalSrc(){
		let src=this.usedHost+"/";
		if(this.config.hasOwnProperty('deliveryPartner')){
			src+=this.config.deliveryPartner;
		}else{
			src+=this.config.domain;
		}
		src+="/"+this.buildSrc();
		src+="?"+Object.keys(this.params).map((key) => {return key+'='+encodeURIComponent(this.params[key])}).join('&');
		return(src);
	}

	render(){
		return(<iframe {...this.buildProps()} ref={(ref)=>(this.instance=ref)} src={this.buildFinalSrc()} width="100%" height="100%" frameBorder="0" allow="autoplay; picture-in-picture; gyroscope; magnetometer; accelerometer; encrypted-media; fullscreen" allowFullScreen={true} />);
	}

}

export default NexxBase;