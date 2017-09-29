const router = require('koa-router')();
const userDao = require('../dao/userDao');
router.get('/home',async (ctx,next)=>{
	await ctx.render('home');
});

module.exports = router;