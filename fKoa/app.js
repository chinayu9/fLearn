const Koa = require('koa');
const app = new Koa();
//logger
app.use(async (ctx, next)=>{
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(async (ctx, next)=>{
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>Hello,Koa2!</h1>';
});
app.listen(3000);
console.log('app started at port 3000...');