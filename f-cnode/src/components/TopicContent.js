import React,{ Component } from 'react';
import TopicInfo from './TopicInfo';


class TopicContent extends Component{
	render(){
		return (
			<div className="ct-box">
				<TopicInfo topicDetail={this.props.topicDetail}/>
			</div>
		);
	}
}

export default TopicContent;