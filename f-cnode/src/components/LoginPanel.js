import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPanel extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-inner">
					<p>CNode：Node.js专业中文社区</p>
					<Link to="/login"><span className="span-info">登录</span></Link>
				</div>
			</div>
		);
	}
}

export default LoginPanel;