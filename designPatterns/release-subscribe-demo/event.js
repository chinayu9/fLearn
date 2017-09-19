/**
 * 抽象发布-订阅功能
 * @type {Object}
 */
var fUtils = require('../../fUtils');//../../ 上两级目录
var event = {
	clientList:{},
	listen: function(key,fn){
		if (!this.clientList[key]) {  //如果没有订阅过此类消息，给该类消息创建一个缓存列表
			this.clientList[key] = [];
		}
		this.clientList[key].push(fn);//订阅的消息添加进消息缓存列表
	},
	trigger:function(){
		var key = Array.prototype.shift.call(arguments),//取出消息类型
		fns = this.clientList[key];//取出该消息对应的回调函数集合
		if (!fns || fns.length === 0) {//如果没有订阅该消息，则返回
			return false;
		}
		for(var i = 0,fn;fn = fns[i++];){
			fn.apply(this,arguments);
		}
	}
};

var installEvent = function(obj){
	fUtils.extend(true,obj,event);
};

module.exports = installEvent;