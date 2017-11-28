import React,{ Component } from 'react';


class PersonalInfo extends Component{
	render(){
		return (
			<div className="panel">
				<div className="p-header"><span className="col-fade">个人信息</span></div>
				<div className="p-inner">
					<div className="user-card">
						<div className="user-header">
							<img src="https://avatars2.githubusercontent.com/u/31837136?v=4&s=120" className="user-avatar"/>
							<span className="user-name">chinayu9</span>
						</div>
						<div className="user-integration">积分：25</div>
						<div className="user-signature">"这家伙很懒，什么个性签名都没有留下。 "</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PersonalInfo;