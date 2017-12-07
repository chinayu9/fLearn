import React,{ Component } from 'react';
import Header from '../components/Header';
import UserMain from '../components/UserMain';
class User extends Component{
	constructor(props){
		super(props);
		this.state = {
			loginname:props.match.params.id,
			user:null,
			collectNumber:0
		}
	}
	componentWillMount(){
		fetch(`https://cnodejs.org/api/v1/user/${this.state.loginname}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						user:res.data
					});
				}else{
					alert(res.error_msg);
				}
			});


		fetch(`https://cnodejs.org/api/v1/topic_collect/${this.state.loginname}`)
			.then(res=>res.json())
			.then(res=>{
				if (res.success) {
					this.setState({
						collectNumber:res.data.length
					});
				}else{
					alert(res.error_msg);
				}
			});
	}
	render(){
		return (
			<div>
				<Header />
				{this.state.user ? <UserMain user={this.state.user} collectNumber={this.state.collectNumber}/> : ""}
			</div>
		);
	}
}

export default User;