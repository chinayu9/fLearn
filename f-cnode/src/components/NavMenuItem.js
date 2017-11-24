import React,{ Component } from 'react'; 
import { Link } from 'react-router-dom';
class NavMenuItem extends Component{
	render(){
		return (
			<li className="nav-menu-item"><Link to="/">{this.props.menuItem.title}</Link></li>
		);
	}
}

export default NavMenuItem;