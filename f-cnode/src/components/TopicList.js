import React,{ Component } from 'react';
import TopicListItem from './TopicListItem';
class TopicList extends Component{
	
	render(){
		const { topicList,tab } = this.props;
		return (
			<div className="topic-list">
				<ul>
					{
						topicList.map((topic,index)=>
							<TopicListItem 
								key={topic.id} 
								topic={topic}
								tab={tab} />)
					}
				</ul>
			</div>
		);
		
	}
}


export default TopicList;