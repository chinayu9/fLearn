import React,{ Component } from 'react';
import TopicList from './TopicList';
import Pagination from './Pagination';
class ContentBody extends Component{
	render(){
		const { topicList,pagText,curPage,maxPage,tab } = this.props;
		return (
			<div className="ct-bd">
				<TopicList topicList={topicList} tab={tab}/>
				<Pagination 
					pagText={pagText}
					curPage={curPage}
					maxPage={maxPage}
					tab={tab}/>
			</div>
		);
		
	}
}

export default ContentBody;