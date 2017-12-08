import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import TopicList from './TopicList';
import Pagination from './Pagination';

class CollectionsContent extends Component{

	render(){	
		const { showTopicList,pagText,curPage,maxPage,tab,loginname,toUrl } = this.props;
		return (
			<div className="ct-box">
				<div className="panel">
					<div className="p-header">
						<ul className="breadcrumb">
							<li>
								<Link to="/">主页</Link>
								<span className="divider">/</span>
							</li>
							<li className="active">{loginname} 收藏的话题</li>
						</ul>		
					</div>	
					<div className="p-inner">
						<TopicList topicList={showTopicList}/>
						<Pagination 
							pagText={pagText}
							curPage={curPage}
							maxPage={maxPage}
							tab={tab}
							toUrl={toUrl}/>
					</div>	
				</div>

	
			</div>
		);
	}
}

export default CollectionsContent;