import React,{ Component } from 'react';
import ContentMenu from './ContentMenu';
import ContentBody from './ContentBody';
class Content extends Component{
	render(){
		return (
			<div className="ct-box">
				<ContentMenu ctMenu={this.props.ctMenu} tab={this.props.tab}/>
				<ContentBody {...this.props}/>
			</div>
		);
	}
}

export default Content;