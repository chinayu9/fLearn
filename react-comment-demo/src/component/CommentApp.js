import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends React.Component{
	constructor(){
		super();
		this.state = {
			comments:[]
		};
	}
	componentWillMount(){
		this._loadComments();
	}

	_loadComments(){
		let comments = localStorage.getItem("comments");
		if (comments) {
			comments = JSON.parse(comments);
			this.setState({comments});
		}
	}

	_saveComments(comments){
		localStorage.setItem('comments',JSON.stringify(comments));
	}

	handleSubmitComment(comment){
		if (!comment.username) {return alert('请输入用户名');}
		if (!comment.content) {return alert('请输入评论内容');}
		const comments = [...this.state.comments];
		comments.push(comment);
		this.setState({
			comments
		});
		this._saveComments(comments);
	}
	handleDeleteComment(index){
		const comments = [...this.state.comments];
		comments.splice(index,1);

		this._saveComments(comments);
		this.setState({comments});

	}
	render(){
		
		return (
			<div className='wrapper'>
				<CommentInput 
					onSubmit={this.handleSubmitComment.bind(this)}
				/>
				<CommentList 
					comments={this.state.comments}
					onDeleteComment={this.handleDeleteComment.bind(this)}
				/>
			</div>
		);
	}
}

export default CommentApp;