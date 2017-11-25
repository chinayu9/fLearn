import React,{ Component } from 'react';
import ContentMenuItem from './ContentMenuItem';

class ContentMenu extends Component{
	constructor(){
		super();
		this.state={
			ctMenu:[
				{
					title:"全部",
					path:"/?tab=all"
				},
				{
					title:"精华",
					path:"/?tab=good"
				},
				{
					title:"分享",
					path:"/?tab=share"
				},
				{
					title:"问答",
					path:"/?tab=ask"
				},
				{
					title:"招聘",
					path:"/?tab=job"
				}
			],
			curIndex:0
		};
	}
	render(){
		return (
			<ul className="ct-menu">
				{
					this.state.ctMenu.map((item,index)=>
						<ContentMenuItem 
							key={index} 
							item={item}
							index={index}
							curIndex={this.state.curIndex} />)
				}
			</ul>
		);
	}
}

export default ContentMenu;