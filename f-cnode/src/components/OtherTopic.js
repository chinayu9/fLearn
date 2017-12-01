import React,{ Component } from 'react';

import TopicItem from './TopicItem';

class OtherTopic extends Component{
	render(){
		const { otherTopics } = this.props;
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">作者其他话题</span></div>
				<div className="p-inner">
					<ul>
						{
							otherTopics.map((topic,index)=><TopicItem key={topic.id} topic={topic}/>)
						}
					</ul>
				</div>
			</div>
		);
	}
}


export default OtherTopic;