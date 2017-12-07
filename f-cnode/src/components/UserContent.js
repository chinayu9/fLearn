import React,{ Component } from 'react';
import { Link } from 'react-router-dom'; 
import { dateFormat } from '../utils/fUtils';
import UserTopicListItem from './UserTopicListItem';

class UserContent extends Component{

	render(){
		const { user,collectNumber } = this.props;
		console.log(user);
		return (
			<div className="ct-box">
				<div className="panel">
					<div className="p-header">
						<ul className="breadcrumb">
							<li>
								<Link to="/">主页</Link>
								<span className="divider">/</span>
							</li>
						</ul>		
					</div>	
					<div className="p-inner userInfo">
						<div className="user-header">
							<a className="user-big-avatar" href={`/user/${user.loginname}`}><img src={user.avatar_url} /></a>
							<span className="user-name">{user.loginname}</span>
						</div>
						<div className="user-integration">积分：{user.score}</div>
						<p><Link to="">{collectNumber}个收藏话题</Link></p>
						<p className="col-fade">注册时间 {dateFormat(user.create_at)}</p>
					</div>	
				</div>

				<div className="panel">
					<div className="p-header"><span className="col-fade">最近创建的话题</span></div>
					{
						user.recent_topics.length > 0 ? 
						user.recent_topics.map((topic,index)=><UserTopicListItem key={topic.id} topic={topic} />) :
						<div className="p-inner"><p>无话题</p></div>
					}
						
				</div>

				<div className="panel">
					<div className="p-header"><span className="col-fade">最近参与的话题</span></div>
					{
						user.recent_replies.length > 0 ? 
						user.recent_replies.map((topic,index)=><UserTopicListItem key={topic.id} topic={topic} />) :
						<div className="p-inner"><p>无话题</p></div>
					}
						
				</div>
			</div>
		);
	}
}

export default UserContent;