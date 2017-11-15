import { connect } from 'react-redux';
import Login from '../components/Login';
import { requestLogin } from '../reducers/login';
const mapStateToProps = (state)=>{
	return state;
};

const mapDispatchToProps = (dispatch)=>{
	return {
		onLogin:()=>{
			dispatch(requestLogin());
		}
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);