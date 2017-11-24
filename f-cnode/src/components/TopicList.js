import React,{ Component } from 'react';
import TopicListItem from './TopicListItem';
class TopicList extends Component{
	constructor(){
		super()
		this.state={
			all:[]
		};
	}
	componentWillMount(){
		fetch("https://cnodejs.org/api/v1/topics")
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						all:res.data
					});
				}
				console.log(res.data);
			});
	}
	render(){
		return (
			<div className="topic-list">
				<ul>
					{
						this.state.all.map((topic,index)=>
							<TopicListItem 
								key={topic.id} 
								topic={topic} />)
					}
				</ul>
			</div>
		);
		
	}
}


export default TopicList;