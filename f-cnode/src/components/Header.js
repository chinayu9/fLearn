import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

class Header extends Component{
	render(){
		return (
			<div id="header">
				<div className="navbar">
					<div className="brand">
						<Link to="/">
							<img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnode" />
						</Link>
					</div>
					<form className="search-container">
						<input type="input"  />
					</form>
					<NavMenu />
				</div>
			</div>
		);
	}
}


export default Header;