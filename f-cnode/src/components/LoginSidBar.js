import React,{ Component } from 'react';
import AboutPanel from './AboutPanel';

class LoginSidBar extends Component{
	render(){
		return (
			<div className="sidebar">
				<AboutPanel />
			</div>
		);
	}
}

export default LoginSidBar;