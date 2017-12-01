import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component{
	render(){
		localStorage.removeItem("isLogin");
		localStorage.removeItem("loginname");
		localStorage.removeItem("accesstoken");
		return <Redirect to="/" />;
	}
}

export default Logout;