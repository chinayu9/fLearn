const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const initState = {
	isLogining : false,
	isLogout:true
};

export const login = (state = initState,action)=>{
	switch (action.type){
		case LOGIN_REQUEST:
			return {
				...state,
				isLogining:true,
				isLogout:true
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLogining:false,
				isLogout:false
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLogining:false,
				isLogout:true
			};
		default:
			return state;
	}
}


const loginRquest = ()=>{
	return {
		type:LOGIN_REQUEST
	};
};
const loginSuccess = ()=>{
	return {
		type:LOGIN_SUCCESS
	};
};

const loginFailure = ()=>{
	return {
		type:LOGIN_FAILURE
	};
};

export const requestLogin = (account,psw)=>{
	return (dispatch)=>{
		dispatch(loginRquest());
		fetch('http://localhost:3001/user')
			.then(res=>res.json())
			.then(res=>{
				dispatch(loginSuccess());
				console.log(res);
			})
			.catch(res=>{
				console.log(res);
				console.log(404);
				dispatch(loginFailure());
			});
	}
}