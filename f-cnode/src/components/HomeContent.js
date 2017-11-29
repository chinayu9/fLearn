import React,{ Component } from 'react';
import HomeContentMenu from './HomeContentMenu';
import HomeContentBody from './HomeContentBody';
class HomeContent extends Component{
	render(){
		return (
			<div className="ct-box">
				<HomeContentMenu ctMenu={this.props.ctMenu} tab={this.props.tab}/>
				<HomeContentBody {...this.props}/>
			</div>
		);
	}
}

export default HomeContent;