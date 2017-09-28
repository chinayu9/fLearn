const router = require('koa-router')();
const userDao = require('../dao/userDao');
router.get('/hello',async (ctx,next)=>{
	let users = userDao.logMSG();
	await ctx.render('index',{data:JSON.stringify(users)});
});

module.exports = router;