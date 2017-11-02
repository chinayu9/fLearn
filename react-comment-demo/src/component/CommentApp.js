import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends React.Component{
	render(){
		return (
			<div>
				<CommentInput />
				<CommentList />
			</div>
		);
	}
}

export default CommentApp;