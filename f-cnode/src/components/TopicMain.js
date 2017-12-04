import React,{ Component } from 'react';
import TopicContent from './TopicContent';
import TopicSidBar from './TopicSidBar';

class TopicMain extends Component{
	render(){
		return (
			<div id="main">
				<TopicContent topicDetail={this.props.topicDetail}/>
				<TopicSidBar loginname={this.props.topicDetail.author.loginname}/>
			</div>
		);
		
	}
}

export default TopicMain;