import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user:null
		};
	}

	componentWillMount(){
		const userId = this.props.match.params.id;
		fetch('http://localhost:3001/user/'+userId)
			.then(res=>res.json())
			.then(res=>{
				this.setState({
					user:res
				});
			});
	}

	render(){
		const {user} = this.state;
		return (
			<HomeLayout title="编辑用户">
				{
					user ? <UserEditor editTarget={user} /> : '加载中...'
				}
			</HomeLayout>
		);
	}
}

export default UserEdit;