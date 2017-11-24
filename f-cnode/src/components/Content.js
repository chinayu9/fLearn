import React,{ Component } from 'react';
import ContentMenu from './ContentMenu';
import ContentBody from './ContentBody';
class Content extends Component{
	render(){
		return (
			<div className="ct-box">
				<ContentMenu />
				<ContentBody />
			</div>
		);
	}
}

export default Content;