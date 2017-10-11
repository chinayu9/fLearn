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
			maxAge:1000 * 60 * 60 * 24 * 3 
		});
		ctx.body = '{"status":1,"redirect":"/home"}';
	}else{
		ctx.body = '{"status":0}';
	}
	
});
router.get('/logout',async (ctx,next)=>{
	ctx.cookies.set('uid','',{
		maxAge:-1
	});
	//ctx.body = '{"redirect":"/"}';
	ctx.response.redirect("/");
});
module.exports = router;