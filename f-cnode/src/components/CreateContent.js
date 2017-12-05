import React,{ Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
class CreateContent extends Component{
	constructor(){
		super();
		this.state={
			topicTitle:"",
			topicContent:"",
			topicTab:"select",
			postSuccess:false,
			topicId:"",
			errorMSG:"",
			askRemindMSG:'提问时，请遵循 <a href="https://gist.github.com/alsotang/f654af8b1fff220e63fcb44846423e6d" target="_blank">《提问的智慧》</a>中提及的要点，以便您更接收到高质量回复。',
			jobRemindMSG:'为避免被管理员删帖，发帖时请好好阅读<a href="" target="_blank">《招聘帖规范》</a>'

		};
	}
	onCloseClickHandler(){
		this.setState({
			errorMSG:""
		});
	}
	onSelectChangeHandler(e){
		this.setState({
			topicTab:e.target.value
		});
	}
	onTopicTitleChangeHanlder(e){
		this.setState({
			topicTitle:e.target.value
		});
	}
	onTopicContentChangeHanlder(e){
		this.setState({
			topicContent:e.target.value
		});
	}
	onSubmitClickHandler(){
		if (this.state.topicTab === "select") {
			alert("必须选择一个板块");
			return;
		}
		const accesstoken = localStorage.getItem("accesstoken");
		const data = {
			accesstoken,
			title:this.state.topicTitle,
			tab:this.state.topicTab,
			content:this.state.topicContent
		};
		fetch("https://cnodejs.org/api/v1/topics",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(data)

		}).then(res=>res.json())
			.then(res=>{
				console.log(res);
				if (res.success) {
					this.setState({
						topicId:res.topic_id
					});
				}else{
					this.setState({
						errorMSG:res.error_msg
					});
				}
			});
		
	}
	render(){
		if (this.state.topicId) {
			return <Redirect to={`/topic/${this.state.topicId}`} />
		}
		const isRemind = (this.state.topicTab === "ask" || this.state.topicTab === "job") ? true : false;
		const remindMSG = this.state.topicTab === "ask" ? this.state.askRemindMSG : (this.state.topicTab === "job" ? this.state.jobRemindMSG : "");
		return (
			<div className="ct-box">
				<div className="p-header">
					<ul className="breadcrumb">
						<li>
							<Link to="/">主页</Link>
							<span className="divider">/</span>
						</li>
						<li className="active">发布话题</li>
					</ul>		
				</div>
				<div className="p-inner">
					{
						this.state.errorMSG ? <div className="alert alert-error"><span className="close" onClick={this.onCloseClickHandler.bind(this)}>×</span><strong>{this.state.errorMSG}</strong></div> : ""
					}		
					<div>
						<span className="tab-select-span">选择板块：</span>
						<select id="tab-select-value" onChange={this.onSelectChangeHandler.bind(this)}>
							<option value="select">请选择</option>
							<option value="share">分享</option>
							<option value="ask">问答</option>
							<option value="job">招聘</option>
							<option value="dev">客户端测试</option>
						</select>
						{
							isRemind ? <strong dangerouslySetInnerHTML={{__html:remindMSG}}></strong> : ""
						}
					</div>
					<div>
						<textarea 
							id="topic-title" 
							autoFocus="autofocus" 
							row="1" 
							placeholder="标题字数 10 字以上" 
							value={this.state.topicTitle}
							onChange={this.onTopicTitleChangeHanlder.bind(this)}>
						</textarea>
					</div>
					<div>
						<textarea id="topic-content-value" value={this.state.topicContent} onChange={this.onTopicContentChangeHanlder.bind(this)}>
						</textarea>
					</div>
					<div><span className="span-primary submit-btn" onClick={this.onSubmitClickHandler.bind(this)}>提交</span></div>
				</div>
			</div>
		);
	}
}

export default CreateContent;