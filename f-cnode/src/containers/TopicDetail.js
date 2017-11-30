import React,{ Component } from 'react';
import Header from '../components/Header';
import TopicMain from '../components/TopicMain';
import BackToTop from '../components/BackToTop';

class TopicDetail extends Component{
	constructor(props){
		super(props);
		this.state={
			backToTop:false,
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
	componentDidMount(){
		window.addEventListener("scroll",()=>{
			const scrollTop = document.documentElement.scrollTop;
			let backToTop = false;
			backToTop = scrollTop > 700 ? true : false;
			this.setState({
				backToTop:backToTop
			});
		});
	}
	render(){	
		return (
			<div>
				{this.state.backToTop ? <BackToTop /> : ""}
				<Header />
				<TopicMain topicDetail={this.state.topicDetail}/>
			</div>
		);
	}
}

export default TopicDetail;