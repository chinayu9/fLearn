const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
//logger
app.use(async (ctx, next)=>{
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
router.get('/hello/:name',async (ctx, next)=>{
	let name = ctx.params.name;
	ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});
router.get('/',async (ctx,next)=>{
	ctx.response.body = `<h1>Index</h1>`;
});
app.use(router.routes());
app.listen(3000);
console.log('app started at port 3000...');