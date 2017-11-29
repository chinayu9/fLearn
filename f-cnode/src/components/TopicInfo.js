import React,{ Component } from 'react';


class TopicInfo extends Component{
	render(){
		const { topicDetail } = this.props;
		console.log(topicDetail);
		return (
			<div className="panel">
				<div className="topic-header">{topicDetail.author_id}</div>
				<div className="topic-inner"></div>
			</div>
		);
	}
}

export default TopicInfo;