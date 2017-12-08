import React,{ Component } from 'react';
import TopicListItem from './TopicListItem';
class TopicList extends Component{
	
	render(){
		const { topicList } = this.props;
		return (
			<div className="topic-list">
				<ul>
					{
						topicList.map((topic,index)=>
							<TopicListItem 
								key={topic.id} 
								topic={topic}
								 />)
					}
				</ul>
			</div>
		);
		
	}
}


export default TopicList;