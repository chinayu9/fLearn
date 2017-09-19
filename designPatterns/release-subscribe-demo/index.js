/**
 * 发布-订阅模式
 *
 * 1.首先指定好谁充当发布者（比如售楼处）
 * 2.给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者（售楼处的花名册）
 * 3.发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数（遍历花名册，挨个发短信）
 */
var salesOffices = {};//定义售楼处

salesOffices.clientList = [];//缓存列表，存放订阅者的回调函数

salesOffices.listen = function(fn){  //增加订阅者
	this.clientList.push(fn);   //订阅的消息添加进缓存列表
}

salesOffices.trigger = function(){//发布消息
	for(var i =0,fn;fn=this.clientList[i++];){
		fn.apply(this,arguments);  //arguments是发布消息时带上的参数
	}
}


/***************测试********************/

salesOffices.listen(function(price,squareMeter){ //小明订阅消息
	console.log('价格= ' + price);
	console.log('squareMeter= ' + squareMeter);
});

salesOffices.listen(function(price,squareMeter){ //小红订阅消息
	console.log('价格= ' + price);
	console.log('squareMeter= ' + squareMeter);
});

salesOffices.trigger(200000,88);
salesOffices.trigger(300000,110);