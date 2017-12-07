import React,{ Component } from 'react';
import Header from '../components/Header';
import MessagesMain from '../components/MessagesMain';
class Messages extends Component{
	render(){
		return (
			<div>
				<Header />
				<MessagesMain />
			</div>
		);
	}
}

export default Messages;