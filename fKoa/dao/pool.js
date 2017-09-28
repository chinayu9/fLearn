const config = require('../config/dbconfig');
const mysql = require('mysql');
var pool = mysql.createPool({
	host:config.host,
	user:config.username,
	password:config.password,
	database:config.database,
	dateStrings:true
});

module.exports = pool;