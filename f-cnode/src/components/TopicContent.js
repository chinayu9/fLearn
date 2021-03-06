import React,{ Component } from 'react';
import TopicInfo from './TopicInfo';
import TopicReply from './TopicReply';
import TopicReplyCreate from './TopicReplyCreate';

class TopicContent extends Component{
	render(){
		return (
			<div className="ct-box">
				<TopicInfo topicDetail={this.props.topicDetail}/>
				{this.props.topicDetail.replies && this.props.topicDetail.replies.length > 0 ? 
					<TopicReply 
						onReplyClick={this.props.onReplyClick.bind(this)}
						topicId={this.props.topicDetail.id}
						replies={this.props.topicDetail.replies} 
						onLikeClick={this.props.onLikeClick.bind(this)}/> : ""}
				<TopicReplyCreate topicId={this.props.topicDetail.id} onReplyClick={this.props.onReplyClick.bind(this)}/>
			</div>
		);
	}
}

export default TopicContent;