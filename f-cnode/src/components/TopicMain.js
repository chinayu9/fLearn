import React,{ Component } from 'react';
import TopicContent from './TopicContent';
import TopicSidBar from './TopicSidBar';

class TopicMain extends Component{
	render(){
		return (
			<div id="main">
				<TopicContent 
					topicDetail={this.props.topicDetail} 
					onReplyClick={this.props.onReplyClick.bind(this)} 
					onLikeClick={this.props.onLikeClick.bind(this)}/>
				<TopicSidBar loginname={this.props.topicDetail.author.loginname}/>
			</div>
		);
		
	}
}

export default TopicMain;