import React,{ Component } from 'react';


class PersonalInfo extends Component{
	constructor(){
		super();
		this.state={
			loginname:"",
			avatarUrl:"",
			score:0
		};
	}
	componentWillMount(){
		const loginname = localStorage.getItem("loginname");
		fetch(`https://cnodejs.org/api/v1/user/${loginname}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						loginname:res.data.loginname,
						avatarUrl:res.data.avatar_url,
						score:res.data.score
					});
				}
			});
	}
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">个人信息</span></div>
				<div className="p-inner">
					<div className="user-card">
						<div className="user-header">
							<a className="user-avatar" href=""><img src={this.state.avatarUrl} /></a>
							<span className="user-name">{this.state.loginname}</span>
						</div>
						<div className="user-integration">积分：{this.state.score}</div>
						<div className="user-signature">"这家伙很懒，什么个性签名都没有留下。 "</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PersonalInfo;