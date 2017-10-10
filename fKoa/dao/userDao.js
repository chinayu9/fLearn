const pool = require('./pool');
let userDao = {

	loginCheck:function(account,password){	//登录验证
		let sql = 'SELECT USER_UUID,NICKNAME FROM USER_T WHERE USER_ACCOUNT = ? AND USER_PASSWORD = ? AND DEL_FLAG = 0;';
		let sqlParam = [account,password];
		return new Promise((resolve,reject)=>{
			pool.getConnection(function(error,conn){
				if (error) {
					console.log(error);
					return reject();
				}
				conn.query(sql,sqlParam,function(err,result){
					conn.release();
					if (err) {
						console.log(error);
						return reject();		
					}		
					return resolve(result[0]);
				});
			});	
			
		});
	},

	getUserMsg:function(uid){	//获取用户基本信息
		var sql = 'SELECT NICKNAME FROM USER_T WHERE USER_UUID = ? AND DEL_FLAG = 0;';
		let sqlParam = [uid];
		return new Promise((resolve,reject)=>{
			pool.getConnection(function(error,conn){
				if (error) {
					console.log(error);
					return reject();
				}
				conn.query(sql,sqlParam,function(err,result){
					conn.release();
					if (err) {
						console.log(error);
						return reject();		
					}		
					return resolve(result[0]);
				});
			});	
		});
	}
};



module.exports = userDao;