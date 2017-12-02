import React,{ Component } from 'react';
import Header from '../components/Header';
import TopicMain from '../components/TopicMain';
import BackToTop from '../components/BackToTop';

class TopicDetail extends Component{
	constructor(props){
		super(props);
		const accesstoken = localStorage.getItem("accesstoken");
		this.state={
			accesstoken,
			backToTop:false,
			topicId:props.match.params.id,
			topicDetail:null
		};
		this.scrollHander = this.scrollHander.bind(this);
	}
	componentWillMount(){
		fetch(`https://cnodejs.org/api/v1/topic/${this.state.topicId}?accesstoken=${this.state.accesstoken}`)
			.then(res=>res.json())
			.then(res=>{
				this.setState({
					topicDetail:res.data
				});
			});
	}
	scrollHander(){
		const scrollTop = document.documentElement.scrollTop;
		let backToTop = false;
		backToTop = scrollTop > 700 ? true : false;
		if (backToTop === this.state.backToTop) {return;}
		this.setState({
			backToTop:backToTop
		});
	}
	componentDidMount(){
		window.addEventListener("scroll",this.scrollHander);
	}
	componentWillUnmount(){
		window.removeEventListener("scroll",this.scrollHander);
	}
	componentWillReceiveProps(nextProps){
		window.scroll(0,0);
		const topicId = nextProps.match.params.id;
		fetch(`https://cnodejs.org/api/v1/topic/${topicId}?accesstoken=${this.state.accesstoken}`)
			.then(res=>res.json())
			.then(res=>{
				console.log(res);
				this.setState({
					topicDetail:res.data,
					topicId
				});
			});
	}
	render(){	
		return (
			<div>
				{this.state.backToTop ? <BackToTop /> : ""}
				<Header />
				{this.state.topicDetail ? <TopicMain topicDetail={this.state.topicDetail} /> : ""} 
			</div>
		);
	}
}

export default TopicDetail;