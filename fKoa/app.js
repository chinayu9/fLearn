const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const views = require('koa-views');


app.use(bodyparser());
app.use(require('koa-static')(__dirname + '/public'));
app.use(views(__dirname + '/views',{
	extension:'ejs'
}));

const index = require('./routes/index');
const users = require('./routes/users');

//logger
app.use(async (ctx, next)=>{
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

//routes
app.use(index.routes());
app.use(users.routes());

app.listen(3000);
console.log('app started at port 3000...');
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});



