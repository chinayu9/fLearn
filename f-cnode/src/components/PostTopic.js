import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class PostTopic extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-inner">
					<Link to="/topic/create"><span className="span-success">发布话题</span></Link>
				</div>
			</div>
		);
	}
}

export default PostTopic;