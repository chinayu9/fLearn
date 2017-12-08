import React,{ Component } from 'react'; 
import { Link } from 'react-router-dom';
class NavMenuItem extends Component{
	render(){
		const { menuItem,messageCount } = this.props;
		if (menuItem.title === '未读消息' && messageCount) {
			return (
				<li className="nav-menu-item">
					<Link to={menuItem.url}>{menuItem.title}</Link>
					<span className="message-tips">{messageCount}</span>
				</li>
			);
		}
		return (
			<li className="nav-menu-item"><Link to={menuItem.url}>{menuItem.title}</Link></li>
		);
	}
}

export default NavMenuItem;