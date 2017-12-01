import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class TopicItem extends Component{
	render(){
		const { topic } = this.props;
		return (
			<li><Link to={`/topic/${topic.id}`} title={topic.title} className="topic-title">{topic.title}</Link></li>
		);
	}
}

export default TopicItem;