const router = require('koa-router')();
const userDao = require('../dao/userDao');
router.get('/',async (ctx,next)=>{
	let user = await userDao.loginCheck('18328508594','1234567');
	let users = await userDao.getUsers();
	await ctx.render('index',{data:JSON.stringify(users)});
});

module.exports = router;