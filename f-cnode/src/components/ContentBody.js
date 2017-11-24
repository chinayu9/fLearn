import React,{ Component } from 'react';
import TopicList from './TopicList';
import Pagination from './Pagination';
class ContentBody extends Component{
	render(){
		return (
			<div className="ct-bd">
				<TopicList />
				<Pagination />
			</div>
		);
		
	}
}

export default ContentBody;