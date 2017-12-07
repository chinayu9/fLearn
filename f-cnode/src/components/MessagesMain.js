import React,{ Component } from 'react';
import MessagesContent from './MessagesContent';
import MessagesSideBar from './MessagesSideBar';

class MessagesMain extends Component{
	render(){
		return (
			<div id="main">
				<MessagesContent />
				<MessagesSideBar />
			</div>
		);
		
	}
}

export default MessagesMain;