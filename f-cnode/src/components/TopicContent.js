import React,{ Component } from 'react';
import TopicInfo from './TopicInfo';
import TopicReply from './TopicReply';


class TopicContent extends Component{
	render(){
		return (
			<div className="ct-box">
				<TopicInfo topicDetail={this.props.topicDetail}/>
				{this.props.topicDetail.replies && this.props.topicDetail.replies.length > 0 ? <TopicReply replies={this.props.topicDetail.replies}/> : ""}
			</div>
		);
	}
}

export default TopicContent;