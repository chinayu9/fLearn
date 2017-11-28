import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class PostTopic extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-inner">
					
					<span className="span-success"><Link to="/topic/create">发布话题</Link></span>
					
				</div>
			</div>
		);
	}
}

export default PostTopic;