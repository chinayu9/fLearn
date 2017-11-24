import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from '../utils/DateFormat';
class TopicListItem extends Component{
	render(){
		const { topic } = this.props;
		const topiclistTab = {
			"ask":"问答",
			"share":"分享",
			"job":"招聘"
		};
		const topiclistTabText = topic.top ? "置顶" : (topic.good ? "精华" : topiclistTab[topic.tab]);
		const topiclistTabClassName = "topiclist-tab " + (topic.top ? "put-top" : (topic.good ? "put-good" : ""));
		return (
			<li className="topic-list-item">
				<img className="publisher-avatar" src={topic.author.avatar_url} title={topic.author.loginname} />
				<div className="reply-visit-box">
					<span title="回复数" className="reply-count">{topic.reply_count}</span>
					<span className="count-seperator">/</span>
					<span title="点击数" className="visit-count">{topic.visit_count}</span>
				</div>
				<span className={topiclistTabClassName}>{topiclistTabText}</span>
				<div className="topic-title" title={topic.title}><Link to={`/topic/${topic.id}`}>{topic.title}</Link></div>
				<div className="reply-box">
					<div className="reply-inner">
						<img className="last-replyer-avatar" src={topic.author.avatar_url}  />
						<span className="last-reply-time" >{format(topic.last_reply_at)}</span>
					</div>
				</div>
			</li>
		);
	}
}

export default TopicListItem;