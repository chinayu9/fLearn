import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
class CommentList extends React.Component{
	static propTypes = {
		comments:PropTypes.array,
		onDeleteComment:PropTypes.func
	}

	static defaultProps = {
		comments:[]
	};

	handleDeleteComment(index){
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(index);
		}
	}

	render(){
		
		const comments = this.props.comments;
		return (
			<div className="comment-list">
				{
					comments.map((comment,i)=>
						<Comment 
							comment={comment} 
							key={i}
							index={i} 
							onDeleteComment={this.handleDeleteComment.bind(this)}
						/>)
				}
			</div>
		);
	}
}


export default CommentList;