import React,{ Component } from 'react';
import CreateContent from './CreateContent';
import CreateSidBar from './CreateSidBar';

class LoginMain extends Component{
	render(){
		return (
			<div id="main">
				<CreateContent />
				<CreateSidBar />
			</div>
		);
		
	}
}

export default LoginMain;