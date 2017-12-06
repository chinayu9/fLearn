import React,{ Component } from 'react';
import TopicReplyItem from './TopicReplyItem';

class TopicReply extends Component{
	render(){
		const { replies } = this.props;
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">{replies.length}&nbsp;回复</span></div>
				{
					replies ? replies.map((reply,index)=>
						<TopicReplyItem key={reply.id} reply={reply} index={index+1} onLikeClick={this.props.onLikeClick.bind(this)}/>) : ""
				}
			</div>
		);
	}
}

export default TopicReply;