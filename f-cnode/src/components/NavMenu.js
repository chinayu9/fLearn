import React,{ Component } from 'react';
import NavMenuItem from './NavMenuItem';

class NavMenu extends Component{
	constructor(){
		super();
		this.state = {
			menu:[
				{
					title:"首页"
				},
				{
					title:"新手入门"
				},
				{
					title:"API"
				},
				{
					title:"关于"
				},
				{
					title:"注册"
				},
				{
					title:"登录"
				},

			]
		};
	}
	render(){
		return (
			<ul className="nav-menu">
				{
					this.state.menu.map((item,index)=><NavMenuItem menuItem={item} key={index} />)
				}
			</ul>
		);
	}
}

export default NavMenu;