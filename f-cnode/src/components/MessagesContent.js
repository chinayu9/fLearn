import React,{ Component } from 'react';
import { Link } from 'react-router-dom'; 
import MessagesListItem from './MessagesListItem';

class MessagesContent extends Component{
	constructor(){
		super();
		this.state={
			hasReadMessages:[],
			hasNotReadMessages:[]
		}
	}
	componentWillMount(){	
		const accesstoken = localStorage.getItem("accesstoken");
		fetch(`https://cnodejs.org/api/v1/messages?accesstoken=${accesstoken}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						hasReadMessages:res.data.has_read_messages,
						hasNotReadMessages:res.data.hasnot_read_messages
					});
					return res.data.hasnot_read_messages.length > 0;
				}else{
					alert(res.error_msg);
				}
			}).then((hasNotReadMessages)=>{
				if (!hasNotReadMessages) {return;}
				fetch("https://cnodejs.org/api/v1/message/mark_all",{
					method:"POST",
					headers:{
						"Content-Type":"application/json"
					},
					body:JSON.stringify({accesstoken})
				}).then(res=>res.json())
					.then(res=>{
						if (res.success) {

						}else{
							alert(res.error_msg);
						}
					});
			});
	}
	render(){
		
		return (
			<div className="ct-box">
				<div className="panel">
					<div className="p-header">
						<ul className="breadcrumb">
							<li>
								<Link to="/">主页</Link>
								<span className="divider">/</span>
							</li>
							<li className="active">新消息</li>
						</ul>		
					</div>
					
					{
						this.state.hasNotReadMessages.length > 0 ?
						this.state.hasNotReadMessages.map((message,index)=><MessagesListItem message={message} key={message.id}/>) :
						<div className="p-inner"><p>无消息</p></div>
					}
					
				</div>

				<div className="panel">
					<div className="p-header"><span className="col-fade">过往消息</span></div>
					
					{
						this.state.hasReadMessages.length > 0  ?
						this.state.hasReadMessages.map((message,index)=><MessagesListItem message={message} key={message.id}/>) :
						<div className="p-inner"><p>无消息</p></div>
					}
					
				</div>
			</div>
		);
	}
}

export default MessagesContent;