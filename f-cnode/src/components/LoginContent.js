import React,{ Component } from 'react';
import { Link } from 'react-router-dom'; 
class LoginContent extends Component{
	render(){
		return (
			<div className="ct-box">
				<div className="panel">
					<div className="p-header">
						<ul className="breadcrumb">
							<li>
								<Link to="/">主页</Link>
								<span className="divider">/</span>
							</li>
							<li className="active">登录</li>
						</ul>		
					</div>
					<div className="p-inner">
						<div className="control-group">
							<label className="control-label" >accessToken</label>
							<div className="controls">
								<input className="input-xlarge" id="accesstoken" name="accesstoken" type="text"/>
							</div>
						</div>
						<div className="accesstoken-tips">请前往CN-Nodejs社区，将设置页面中的AccessToKen复制到上方区域，进行登录</div>
						<div className="login-btn">登录</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginContent;