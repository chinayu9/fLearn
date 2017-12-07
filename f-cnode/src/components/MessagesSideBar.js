import React,{ Component } from 'react';
import PersonalInfo from './PersonalInfo';
import PostTopic from './PostTopic';
import Advertisement from './Advertisement';
import Community from './Community';
import QRCode from './QRCode';
import LoginPanel from './LoginPanel';

class MessagesSideBar extends Component{
	constructor(){
		super();
		this.state={
			loginname:"",
			avatarUrl:"",
			score:0
		};
	}
	componentWillMount(){
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
				<PersonalInfo {...this.state}/>
				<PostTopic />
				<Advertisement />
				<Community />
				<QRCode />
			</div>
		);
	}
}

export default MessagesSideBar;