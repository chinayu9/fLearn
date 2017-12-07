import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from '../utils/fUtils';
class UserTopicListItem extends Component{
	render(){
		const { topic } = this.props;
		return (
			<div className="user-cell">
				<a><img className="publisher-avatar" src={topic.author.avatar_url} title={topic.author.loginname} /></a>	
				<div className="topic-title" title={topic.title}><Link to={`/topic/${topic.id}`}>{topic.title}</Link></div>
				<div className="reply-box">
					<div className="reply-inner">
						<img className="last-replyer-avatar" src={topic.author.avatar_url}  />
						<span className="last-reply-time" >{dateFormat(topic.last_reply_at)}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default UserTopicListItem;