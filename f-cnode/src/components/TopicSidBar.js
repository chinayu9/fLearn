import React,{ Component } from 'react';
import PersonalInfo from './PersonalInfo';
import PostTopic from './PostTopic';
import Advertisement from './Advertisement';
import NoReplyTopic from './NoReplyTopic';
import IntegerRanking from './IntegerRanking';
import Community from './Community';
import QRCode from './QRCode';

class TopicSidBar extends Component{
	render(){
		return (
			<div className="sidebar">
				<PersonalInfo />
				<PostTopic />
				<Advertisement />
				<NoReplyTopic />
				<IntegerRanking />
				<Community />
				<QRCode />
			</div>
		);
	}
}

export default TopicSidBar;