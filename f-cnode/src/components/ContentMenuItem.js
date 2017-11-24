import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class ContentMenuItem extends Component{
	render(){
		const { item,curIndex,index } = this.props; 
		return (
			<li className={curIndex===index ? "topic-tab current-tab" : "topic-tab" }><Link to={item.path}>{item.title}</Link></li>
		);
	}
}


export default ContentMenuItem;