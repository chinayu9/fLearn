import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';

class TopicReplyCreate extends Component{
	constructor(props){
		super(props);
		this.state = {
			topicID:props.topicId,
			replyContent:""
		};
	}
	onReplyContentChangeHandler(e){
		this.setState({
			replyContent:e.target.value
		});
	}
	onReplyClickHandler(){
		const accesstoken = localStorage.getItem("accesstoken");
		const data = {
			accesstoken,
			content:this.state.replyContent
		};
		fetch(`https://cnodejs.org/api/v1/topic/${this.state.topicID}/replies`,{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(data)
		}).then(res=>res.json())
		.then(res=>{
			console.log(res);
			if (res.success) {
				this.props.onReplyClick();
				this.setState({
					replyContent:""
				});
			}
		});
	}
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">添加回复</span></div>
				<div className="p-inner">
					<textarea id="reply-content-value" value={this.state.replyContent} onChange={this.onReplyContentChangeHandler.bind(this)}>
					</textarea>
					<div><span className="span-primary submit-btn" onClick={this.onReplyClickHandler.bind(this)}>回复</span></div>
				</div>
			</div>
		);
	}
}


export default TopicReplyCreate;