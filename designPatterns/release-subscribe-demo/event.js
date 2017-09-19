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
	},
	remove:function(key,fn){
		var fns = this.clientList[key];
		if (!fns) {//如果key对应的消息没有被人订阅，则直接返回
			return false;
		}
		if(!fn){//如果没有传入具体的回调函数，表示需要取消key对应消息的所有订阅
			fns && (fns.length = 0);
		}else{
			for(var l = fns.length - 1;l >= 0;l--){
				var _fn = fns[l];
				if (_fn === fn) {
					fns.splice(l,1);//删除订阅者的回调函数
				}
			}
		}
	}
};

var installEvent = function(obj){
	fUtils.extend(true,obj,event);
};

module.exports = installEvent;