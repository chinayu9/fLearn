import React,{ Component } from 'react';
import UserContent from './UserContent';
import UserSideBar from './UserSideBar';

class UserMain extends Component{

	render(){
		return (
			<div id="main">
				<UserContent user={this.props.user} collectNumber={this.props.collectNumber}/>
				<UserSideBar loginname={this.props.loginname}/>
			</div>
		);
		
	}
}

export default UserMain;