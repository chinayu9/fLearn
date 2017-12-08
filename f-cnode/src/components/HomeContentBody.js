import React,{ Component } from 'react';
import TopicList from './TopicList';
import Pagination from './Pagination';
class HomeContentBody extends Component{
	render(){
		const { topicList,pagText,curPage,maxPage,tab,toUrl } = this.props;
		return (
			<div className="ct-bd">
				<TopicList topicList={topicList} />
				<Pagination 
					pagText={pagText}
					curPage={curPage}
					maxPage={maxPage}
					tab={tab}
					toUrl={toUrl}/>
			</div>
		);
		
	}
}

export default HomeContentBody;