import React,{ Component } from 'react';
import { Link } from 'react-router-dom'; 
class LoginContent extends Component{
	render(){
		return (
			<div className="ct-box">
				<div className="panel">
					<div className="p-header">
						<Link to="/"><span>主页</span></Link>
						<span className="divider">/</span>
						<span>登录</span>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginContent;