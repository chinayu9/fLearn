import React,{ Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Advertisement from './Advertisement';
import NoReplyTopic from './NoReplyTopic';
import OtherTopic from './OtherTopic';

class TopicSidBar extends Component{
	constructor(props){
		super(props);
		this.state={
			loginname:"",
			avatarUrl:"",
			score:0
		};
	}
	componentWillReceiveProps(nextProps){
		if (this.state.loginname) {return;}
		fetch(`https://cnodejs.org/api/v1/user/${nextProps.loginname}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						loginname:res.data.loginname,
						avatarUrl:res.data.avatar_url,
						score:res.data.score
					});
				}
			})
			.catch(res=>console.log(res));
	}
	render(){
		return (
			<div className="sidebar">
				<PersonalInfo {...this.state}/>
				<Advertisement />
				<OtherTopic />
				<NoReplyTopic />
			</div>
		);
	}
}

export default TopicSidBar;