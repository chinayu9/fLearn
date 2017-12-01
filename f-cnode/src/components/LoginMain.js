import React,{ Component } from 'react';
import LoginContent from './LoginContent';
import LoginSidBar from './LoginSidBar';

class LoginMain extends Component{
	render(){
		return (
			<div id="main">
				<LoginContent onLogin={this.props.onLogin}/>
				<LoginSidBar />
			</div>
		);
		
	}
}

export default LoginMain;