import React,{ Component } from 'react';
import LoginContent from './LoginContent';
import LoginSidBar from './LoginSidBar';

class LoginMain extends Component{
	render(){
		return (
			<div id="main">
				<LoginContent />
				<LoginSidBar />
			</div>
		);
		
	}
}

export default LoginMain;