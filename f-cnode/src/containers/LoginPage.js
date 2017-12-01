import React,{ Component } from 'react';
import Header from '../components/Header';
import LoginMain from '../components/LoginMain';
class LoginPage extends Component{
	render(){
		return (
			<div>
				<Header />
				<LoginMain />
			</div>
		);
	}
}

export default LoginPage;