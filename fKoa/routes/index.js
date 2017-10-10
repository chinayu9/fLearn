const router = require('koa-router')();
const userDao = require('../dao/userDao');
router.get('/',async (ctx,next)=>{
	let uid = ctx.cookies.get('uid');
	let userMsg = await userDao.getUserMsg(uid);
	if (userMsg) {
		ctx.response.redirect('/home');
	}else{
		await ctx.render('index');
	}	
});
router.post('/login',async (ctx,next)=>{
	let account = ctx.request.body.account;
	let password = ctx.request.body.password;
	let user = await userDao.loginCheck(account,password);
	if (user) {
		ctx.cookies.set('uid',user['USER_UUID'],{
			maxAge:1000 * 60 * 10
		});
		ctx.body = "success";
	}else{
		ctx.body = 'failed';
	}
	
});
module.exports = router;