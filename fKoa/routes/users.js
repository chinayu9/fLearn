const router = require('koa-router')();
const userDao = require('../dao/userDao');
router.get('/home',async (ctx,next)=>{
	let uid = ctx.cookies.get('uid');
	let userMsg = await userDao.getUserMsg(uid);
	//console.log(userMsg);
	if (userMsg) {
		await ctx.render('home',{nickname:userMsg['NICKNAME']});
	}else{
		ctx.response.redirect('/');
	}
	
});

module.exports = router;