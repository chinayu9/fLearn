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
			isLogin,
			loginname:"",
			avatarUrl:"",
			score:0
		};
	}
	componentWillMount(){
		if (!this.state.isLogin) {return;}
		const loginname = localStorage.getItem("loginname");
		fetch(`https://cnodejs.org/api/v1/user/${loginname}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						loginname:res.data.loginname,
						avatarUrl:res.data.avatar_url,
						score:res.data.score
					});
				}
			});
	}
	render(){
		return (
			<div className="sidebar">
				{this.state.isLogin ? <PersonalInfo {...this.state}/> : <LoginPanel />}
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