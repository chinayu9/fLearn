import React,{ Component } from 'react';
import NavMenuItem from './NavMenuItem';

class NavMenu extends Component{
	constructor(){
		super();
		const isLogin = localStorage.getItem("isLogin") === "true" ? true : false;
		const loginMenu = [
				{
					title:"首页",
					url:"/"
				},
				{
					title:"未读消息",
					url:"/"
				},
				{
					title:"新手入门",
					url:"/"
				},
				{
					title:"API",
					url:"/"
				},
				{
					title:"关于",
					url:"/"
				},
				{
					title:"设置",
					url:"/"
				},
				{
					title:"退出",
					url:"/logout"
				}

			];

		const logoutMenu = [
				{
					title:"首页",
					url:"/"
				},
				{
					title:"新手入门",
					url:"/"
				},
				{
					title:"API",
					url:"/"
				},
				{
					title:"关于",
					url:"/"
				},
				{
					title:"注册",
					url:"/"
				},
				{
					title:"登录",
					url:"/login"
				}
			];
		const showMenu = isLogin ? loginMenu : logoutMenu;
		this.state = {
			menu:showMenu
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