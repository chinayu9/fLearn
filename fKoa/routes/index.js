const router = require('koa-router')();
const userDao = require('../dao/userDao');
router.get('/',async (ctx,next)=>{
	let user = await userDao.loginCheck('18328508594','1234567');
	let users = await userDao.getUsers();
	await ctx.render('index',{data:JSON.stringify(users)});
});
router.post('/login',async (ctx,next)=>{
	let account = ctx.request.body.account;
	let password = ctx.request.body.password;
	let user = await userDao.loginCheck(account,password);
	if (user) {
		ctx.body = "success";
	}else{
		ctx.body = 'failed';
	}
	//await ctx.render('index',{data:JSON.stringify(users)});
	
});
module.exports = router;