/**
 * 发布-订阅模式
 *
 * 1.首先指定好谁充当发布者（比如售楼处）
 * 2.给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者（售楼处的花名册）
 * 3.发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数（遍历花名册，挨个发短信）
 */
var salesOffices = {};//定义售楼处

//salesOffices.clientList = [];//缓存列表，存放订阅者的回调函数(第一版)
salesOffices.clientList = {};//缓存列表，存放订阅者的回调函数
/*
第一版
salesOffices.listen = function(fn){  //增加订阅者
	this.clientList.push(fn);   //订阅的消息添加进缓存列表
}
*/


salesOffices.listen = function(key,fn){
	if (!this.clientList[key]) {  //如果没有订阅过此类消息，给该类消息创建一个缓存列表
		this.clientList[key] = [];
	}
	this.clientList[key].push(fn);//订阅的消息添加进消息缓存列表
};

/*第一版
salesOffices.trigger = function(){//发布消息
	for(var i =0,fn;fn=this.clientList[i++];){
		fn.apply(this,arguments);  //arguments是发布消息时带上的参数
	}
}*/

salesOffices.trigger = function(){//发布消息
	var key = Array.prototype.shift.call(arguments),//取出消息类型
		fns = this.clientList[key];//取出该消息对应的回调函数集合
	if (!fns || fns.length === 0) {//如果没有订阅该消息，则返回
		return false;
	}
	for(var i = 0,fn;fn = fns[i++];){
		fn.apply(this,arguments);
	}
};
/***************测试********************/
/* 第一版
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
**/

salesOffices.listen('squareMeter88',function(price){  //小明订阅88平米房子的消息
	console.log('价格= ' + price);
});

salesOffices.listen('squareMeter110',function(price){  //小红订阅110平米房子的消息
	console.log('价格= ' + price);
});

salesOffices.trigger('squareMeter88',200000);//发布88平米房子的价格
salesOffices.trigger('squareMeter110',300000);//发布110平米房子的价格