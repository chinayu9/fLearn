const config = require('../config/dbconfig');
const mysql = require('mysql');
var conn = mysql.createConnection({
	host:config.host,
	user:config.username,
	password:config.password,
	database:config.database
});
conn.connect();
var sql = 'SELECT * FROM USER_T';
function getUsers(){
	return new Promise((resolve,reject)=>{
		conn.query(sql,function(err,result){
			if (err) {
				console.log(err);
				conn.end();
				reject(err);		
				return;
			}
			console.log('---------------------------');
			console.log(result);
			console.log('----------------------------');
			conn.end();
			return resolve(result);
		});
	});
}


module.exports = getUsers;