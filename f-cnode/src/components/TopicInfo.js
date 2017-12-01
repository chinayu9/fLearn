import React,{ Component } from 'react';
import { dateFormat } from '../utils/fUtils';

class TopicInfo extends Component{
	constructor(){
		super();
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
			]
		};
	}
	getTabText(tab){
		for(let i = 0;i<this.state.tabList.length; i++){
			if (this.state.tabList[i].tab == tab) {
				return this.state.tabList[i].title;
			}
		}
		return "";
	}
	render(){
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
						<input className="collet-btn" type="submit" value="收藏" />
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