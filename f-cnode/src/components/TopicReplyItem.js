import React,{ Component } from 'react';
import { dateFormat } from '../utils/fUtils';


class TopicReplyItem extends Component{
	render(){
		const { reply,index } = this.props;
		return (
			<div className={reply.ups.length > 10 ? "cell reply-area reply-highlight" : "cell reply-area"}>
				<div className="author-content">
					<a href="/" className="user-avatar"><img src={reply.author ? reply.author.avatar_url : ""} title={reply.author ? reply.author.loginname : ""} /></a>
					<div className="user-info">
						<a className="reply-author" href="">{reply.author ? reply.author.loginname : ""}</a>
						<a className="reply-time" href="#">&nbsp;{index}楼•{dateFormat(reply.create_at)}</a>
					</div>
					<div className="user-action">
						<span>
							<i className={reply.ups.length > 0 ? "fa up-btn fa-thumbs-o-up" : "fa up-btn fa-thumbs-o-up invisible"} title="喜欢"></i>
							<span className="up-count">&nbsp;{reply.ups.length > 0 ? reply.ups.length : ""}&nbsp;</span>
						</span>

						
						<span><i className="fa fa-reply reply2-btn" title="回复"></i></span>
					</div>
				</div>
				<div className="reply-content" dangerouslySetInnerHTML={{__html:reply.content}}></div>
			</div>
		);

	}
}


export default TopicReplyItem;