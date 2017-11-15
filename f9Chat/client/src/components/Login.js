import React,{ Component } from 'react';
import { PropTypes } from 'prop-types';
import loginCSS from '../css/login.css';

class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			account:'',
			psw:'',
			accountValid:false,
			pswValid:false
		};
		this.handleAccuntChangeListener = this.handleAccuntChangeListener.bind(this);
		this.handlePswChangeListener = this.handlePswChangeListener.bind(this);
		this.handleClickListener = this.handleClickListener.bind(this);
	}

	handleAccuntChangeListener(e){
		const account = e.target.value;
		this.setState({
			account,
			accountValid:account.length > 6 ? true : false
		});
	}

	handlePswChangeListener(e){
		const psw = e.target.value;
		this.setState({
			psw,
			pswValid:psw.length > 6 ? true : false
		});
	}

	handleClickListener(){
		this.props.onLogin();
	}

	render(){
		return (
			<div className="login-container">
				<div className="login-item">
					<label>账号</label>
					<input 
						type="text" 
						placeholder="请输入账号" 
						name="account"
						value={this.state.account}
						onChange={this.handleAccuntChangeListener} />
					<span style={{visibility:this.state.accountValid ? "hidden" : "visible"}}>账号必须包含字母和数字，长度大于6位</span>
				</div>
				<div className="login-item">
					<label>密码</label>
					<input 
						type="password" 
						placeholder="请输入密码" 
						name="psw"
						value={this.state.psw}
						onChange={this.handlePswChangeListener} />
					<span style={{visibility:this.state.pswValid ? "hidden" : "visible"}}>密码必须包含字母和数字，长度大于6位</span>
				</div>
				<div className="login-item">
					<button className="login-btn" onClick={this.handleClickListener} disabled={ this.props.login.isLogining ? "disabled" : ""}>登录</button>
					<div className="login-item" style={{display:this.props.login.isLogining ? "block" : "none"}}>正在登录...</div>
				</div>
				
			</div>
		);
	}
}

export default Login;