import React,{ Component } from 'react';
import { dateFormat } from '../utils/fUtils';


class TopicReplyItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			clickReply:false,
			replyContent:"",
			replyId:props.reply.id,
			topicID:props.topicId
		};
	}
	onLikeClickHandler(){
		const accesstoken = localStorage.getItem("accesstoken");
		fetch(`https://cnodejs.org/api/v1/reply/${this.props.reply.id}/ups`,{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({accesstoken})
		}).then(res=>res.json())
		.then(res=>{
			console.log(res);
			if (res.success) {
				this.props.onLikeClick();
			}else{
				alert(`呵呵，${res.error_msg}`);
			}
		});
	}
	onReplyBtnClickHandler(){
		this.setState({
			clickReply:!this.state.clickReply,
			replyContent:"@" + this.props.reply.author.loginname + ' '
		});
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
			content:this.state.replyContent,
			reply_id:this.state.replyId
		};
		fetch(`https://cnodejs.org/api/v1/topic/${this.state.topicID}/replies`,{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(data)
		}).then(res=>res.json())
		.then(res=>{
			if (res.success) {
				this.props.onReplyClick();
				this.setState({
					replyContent:"",
					clickReply:false
				});
			}else{
				alert(res.error_msg);
				return;
			}
		});
	}
	render(){
		const { reply,index } = this.props;
		return (
			<div className={reply.ups.length > 10 ? "cell reply-area reply-highlight" : "cell reply-area"}>
				<div className="author-content">
					<a href="/" className="user-avatar"><img src={reply.author ? reply.author.avatar_url : ""} title={reply.author ? reply.author.loginname : ""} /></a>
					<div className="user-info">
						<a className="reply-author" href="">{reply.author ? reply.author.loginname : ""}</a>
						<a className="reply-time" href="#">&nbsp;{index}楼•{dateFormat(reply.create_at)}</a>
					</div>
					<div className="user-action">
						<span onClick={this.onLikeClickHandler.bind(this)}>
							<i className={reply.ups.length > 0 ? "fa up-btn fa-thumbs-o-up" : "fa up-btn fa-thumbs-o-up invisible"} title="喜欢"></i>
							<span className="up-count">&nbsp;{reply.ups.length > 0 ? reply.ups.length : ""}&nbsp;</span>
						</span>

						
						<span onClick={this.onReplyBtnClickHandler.bind(this)}><i className="fa fa-reply reply2-btn" title="回复"></i></span>
					</div>
				</div>
				<div className="reply-content" dangerouslySetInnerHTML={{__html:reply.content}}></div>
				<div className="reply-to" style={{height:this.state.clickReply?"266px":"0px"}}>
					<textarea className="reply-item-content" value={this.state.replyContent} onChange={this.onReplyContentChangeHandler.bind(this)}>
					</textarea>
					<div><span className="span-primary submit-btn" onClick={this.onReplyClickHandler.bind(this)}>回复</span></div>
				</div>
			</div>
		);

	}
}


export default TopicReplyItem;