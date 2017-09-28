const pool = require('./pool');
let userDao = {

	loginCheck:function(account,password){	
		let sql = 'SELECT USER_UUID,NICKNAME FROM USER_T WHERE USER_ACCOUNT = ? AND USER_PASSWORD = ? AND DEL_FLAG = 0;';
		let sqlParam = [account,password];
		return new Promise((resolve,reject)=>{
			pool.getConnection(function(error,conn){
				if (error) {
					console.log(error);
					return;
				}
				conn.query(sql,sqlParam,function(err,result){
					conn.release();
					if (err) {
						return reject(err);		
					}		
					return resolve(result[0]);
				});
			});	
			
		});
	},

	getUsers:function(){
		
		var sql = 'SELECT * FROM USER_T';
		return new Promise((resolve,reject)=>{
			pool.getConnection(function(error,conn){
				if (error) {
					console.log(error);
					return;
				}
				conn.query(sql,function(err,result){
					conn.release();
					if (err) {
						return reject(err);		
					}		
					return resolve(result);
				});
			});	
		});
	}
};



module.exports = userDao;