const router = require('koa-router')();
const fs = require('fs');
router.get('/',async (ctx,next)=>{
	await ctx.render('index');
});

module.exports = router;