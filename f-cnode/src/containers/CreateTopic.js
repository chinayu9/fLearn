import React,{ Component } from 'react';
import Header from '../components/Header';
import CreateMain from '../components/CreateMain';
class CreateTopic extends Component{
	render(){
		return (
			<div>
				<Header />
				<CreateMain />
			</div>
		);
	}
}

export default CreateTopic;