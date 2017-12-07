import React,{ Component } from 'react';


class PersonalInfo extends Component{
	
	render(){
		const { loginname,score,avatarUrl } = this.props;
 		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">个人信息</span></div>
				<div className="p-inner">
					<div className="user-card">
						<div className="user-header">
							<a className="user-avatar" href={`/user/${loginname}`}><img src={avatarUrl} /></a>
							<span className="user-name">{loginname}</span>
						</div>
						<div className="user-integration">积分：{score}</div>
						<div className="user-signature">"这家伙很懒，什么个性签名都没有留下。 "</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PersonalInfo;