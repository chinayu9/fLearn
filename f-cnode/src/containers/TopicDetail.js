import React,{ Component } from 'react';
import Header from '../components/Header';
import TopicMain from '../components/TopicMain';

class TopicDetail extends Component{
	constructor(props){
		super(props);
		this.state={
			topicId:props.match.params.id,
			topicDetail:{}
		};
	}
	componentWillMount(){
		fetch(`https://cnodejs.org/api/v1/topic/${this.state.topicId}`)
			.then(res=>res.json())
			.then(res=>{
				console.log(res);
				this.setState({
					topicDetail:res.data
				});
			});
	}
	render(){
		
		return (
			<div>
				<Header />
				<TopicMain topicDetail={this.state.topicDetail}/>
			</div>
		);
	}
}

export default TopicDetail;