const router = require('koa-router')();
const fs = require('fs');
const getUsers = require('../mysql/userController');
router.get('/',async (ctx,next)=>{
	let users = await getUsers();
	await ctx.render('index',{data:JSON.stringify(users)});
});

module.exports = router;