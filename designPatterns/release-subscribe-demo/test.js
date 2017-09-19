var installEvent = require('./event');
var salesOffices = {};
installEvent(salesOffices);
salesOffices.listen('squareMeter88',function(price){  //小明订阅88平米房子的消息
	console.log('价格= ' + price);
});

salesOffices.listen('squareMeter110',function(price){  //小红订阅110平米房子的消息
	console.log('价格= ' + price);
});

salesOffices.trigger('squareMeter88',200000);//发布88平米房子的价格
salesOffices.trigger('squareMeter110',300000);//发布110平米房子的价格


var salesFruit = {};//水果商
installEvent(salesFruit);

salesFruit.listen('apple',function(price){  //小明订阅苹果的消息
	console.log('价格= ' + price);
});

salesFruit.listen('banana',function(price){  //小红订阅香蕉的消息
	console.log('价格= ' + price);
});
salesFruit.trigger('apple',2);//发布88平米房子的价格
salesFruit.trigger('banana',3);//发布110平米房子的价格