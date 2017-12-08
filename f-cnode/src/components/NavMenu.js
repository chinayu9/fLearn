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
					url:"/my/messages"
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
			menu:showMenu,
			messageCount:0
		};
	}
	componentWillMount(){
		const accesstoken = localStorage.getItem("accesstoken");
		if (!accesstoken) {
			return;
		}
		fetch(`https://cnodejs.org/api/v1/message/count?accesstoken=${accesstoken}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						messageCount:res.data
					});
				}else{
					alert(res.error_msg);
				}
			});
	}
	render(){
		return (
			<ul className="nav-menu">
				{
					this.state.menu.map((item,index)=><NavMenuItem menuItem={item} key={index} messageCount={this.state.messageCount}/>)
				}
			</ul>
		);
	}
}

export default NavMenu;