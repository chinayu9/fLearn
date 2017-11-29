import React,{ Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Advertisement from './Advertisement';
import NoReplyTopic from './NoReplyTopic';
import OtherTopic from './OtherTopic';

class TopicSidBar extends Component{
	render(){
		return (
			<div className="sidebar">
				<PersonalInfo />
				<Advertisement />
				<OtherTopic />
				<NoReplyTopic />
			</div>
		);
	}
}

export default TopicSidBar;