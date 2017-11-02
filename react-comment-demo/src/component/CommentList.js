import React from 'react';
import Comment from './Comment';
class CommentList extends React.Component{
	static defaultProps = {
		comments:[]
	};
	render(){
		const comments = this.props.comments;
		return (
			<div className="comment-list">
				{
					comments.map((comment,i)=><Comment comment={comment} key={i} />)
				}
			</div>
		);
	}
}


export default CommentList;