import React,{ Component } from 'react';
import Content from './Content';
import SideBar from './SideBar';

class Main extends Component{
	render(){
		return (
			<div id="main">
				<Content />
				<SideBar />
			</div>
		);
		
	}
}

export default Main;