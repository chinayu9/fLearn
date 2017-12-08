import React,{ Component } from 'react';
import PersonalInfo from './PersonalInfo';
import PostTopic from './PostTopic';
import Advertisement from './Advertisement';
import Community from './Community';
import QRCode from './QRCode';
import LoginPanel from './LoginPanel';

class CollectionsSideBar extends Component{
	constructor(props){
		super(props);
		this.state={
			loginname:props.loginname,
			avatarUrl:"",
			score:0
		};
	}
	componentWillMount(){
		fetch(`https://cnodejs.org/api/v1/user/${this.state.loginname}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
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

export default CollectionsSideBar;