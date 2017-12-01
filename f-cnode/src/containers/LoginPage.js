import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import LoginMain from '../components/LoginMain';
class LoginPage extends Component{
	constructor(){
		super();
		this.state={
			isLogin:false,
			accesstoken:""
		};
	}
	onLoginListener(accesstoken){
		fetch("https://cnodejs.org/api/v1/accesstoken",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({accesstoken})
		}).then(res=>res.json())
		.then(res=>{
			if (res.success) {
				localStorage.setItem("accesstoken",accesstoken);
				localStorage.setItem("isLogin",true);
				localStorage.setItem("loginname",res.loginname);
				this.setState({
					isLogin:true,
					accesstoken
				});

			}
		});
	}
	render(){
		if (this.state.isLogin) {
			return (<Redirect to="/" />);
		}
		return (
			<div>
				<Header />
				<LoginMain onLogin={this.onLoginListener.bind(this)}/>
			</div>
		);
	}
}

export default LoginPage;