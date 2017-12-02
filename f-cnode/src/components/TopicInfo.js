import React,{ Component } from 'react';
import { dateFormat } from '../utils/fUtils';

class TopicInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			tabList:[
				{
					title:"精华",
					tab:"good"
				},
				{
					title:"分享",
					tab:"share"
				},
				{
					title:"问答",
					tab:"ask"
				},
				{
					title:"招聘",
					tab:"job"
				},
				{
					title:"客户端测试",
					tab:"dev"
				}
			],
			isCollect:props.topicDetail.is_collect,
			topicId:props.topicDetail.id
		};
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			isCollect:nextProps.topicDetail.is_collect,
			topicId:nextProps.topicDetail.id
		});
	}
	getTabText(tab){
		for(let i = 0;i<this.state.tabList.length; i++){
			if (this.state.tabList[i].tab == tab) {
				return this.state.tabList[i].title;
			}
		}
		return "";
	}
	//点击收藏
	onCollectClickHandler(){
		const collectUrl = `https://cnodejs.org/api/v1/topic_collect/collect`;
		const deCollectUrl = `https://cnodejs.org/api/v1/topic_collect/de_collect`;
		const url = this.state.isCollect ? deCollectUrl : collectUrl;
		const accesstoken = localStorage.getItem("accesstoken");
		const params = {
			accesstoken,
			topic_id:this.state.topicId
		};
		fetch(url,{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(params)
		}).then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						isCollect:!this.state.isCollect
					});
				}
			});
	}
	render(){
		const isLogin = localStorage.getItem("isLogin") === "true" ? true : false;
		const { topicDetail } = this.props;
		const showTab = topicDetail.top || topicDetail.good;
		const tabText = showTab ? (topicDetail.top ? "置顶" : "精华") : "";
		return (
			<div className="panel">
				<div className="topic-header">
					<div className="topic-full-title">
						{showTab ? <span className="topiclist-tab put-top">{tabText}</span> : ""}
						{topicDetail.title}
					</div>
					<div className="changes">
						<span>&nbsp;发布于&nbsp;{dateFormat(topicDetail.create_at)}&nbsp;</span>
						<span>&nbsp;作者&nbsp;{topicDetail.author ? topicDetail.author.loginname : ""}&nbsp;</span>
						<span>&nbsp;{topicDetail.visit_count}&nbsp;次浏览&nbsp;</span>
						<span>&nbsp;最后一次回复是&nbsp;{dateFormat(topicDetail.last_reply_at)}&nbsp;</span>
						<span>&nbsp;来自&nbsp;{this.getTabText(topicDetail.tab)}&nbsp;</span>
						{
							isLogin ? <input 
								className={this.state.isCollect ? "collet-btn span-common" : "collet-btn"}  
								type="submit" 
								value={this.state.isCollect ? "取消收藏" : "收藏"} 
								onClick={this.onCollectClickHandler.bind(this)}/> : ""
						}
					</div>
				</div>
				<div className="topic-inner">
					<div className="topic-content" dangerouslySetInnerHTML={{__html:topicDetail.content}}>
						
					</div>
				</div>
			</div>
		);
	}
}

export default TopicInfo;