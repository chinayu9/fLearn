import React,{ Component } from 'react';
import PersonalInfo from './PersonalInfo';
import PostTopic from './PostTopic';
import Advertisement from './Advertisement';
import NoReplyTopic from './NoReplyTopic';
import IntegerRanking from './IntegerRanking';
import Community from './Community';
import QRCode from './QRCode';
import LoginPanel from './LoginPanel';

class HomeSideBar extends Component{
	constructor(){
		super();
		const isLogin = localStorage.getItem("isLogin") === "true" ? true : false;
		this.state={
			isLogin
		};
	}
	render(){
		return (
			<div className="sidebar">
				{this.state.isLogin ? <PersonalInfo /> : <LoginPanel />}
				{this.state.isLogin ? <PostTopic /> : ""}
				<Advertisement />
				<NoReplyTopic />
				<IntegerRanking />
				<Community />
				<QRCode />
			</div>
		);
	}
}

export default HomeSideBar;