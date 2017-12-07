import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class MessagesListItem extends Component{
	render(){
		const { message } = this.props;
		return (
			<div className="cell" message_id={message.id}>
				<span>
					<Link to={`/user/${message.author.loginname}`} target="_blank">{message.author.loginname}</Link>
					{message.type === "at" ? " 在话题 " : " 回复了你的话题 "}
					<Link to={`/topic/${message.topic.id}`} target="_blank">{message.topic.title}</Link>
					{message.type === "at" ? " 中@了你 " : ""}
				</span>
			</div>
		);
	}	
}

export default MessagesListItem;