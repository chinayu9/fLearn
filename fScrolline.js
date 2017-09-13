/**
 * Scrolline.js  滚动进度条源码解读
 * 源码地址  https://github.com/anthonyly/Scrolline.js  
 * 
 */
/**
 * IIFE避免添加全局对象
 * @param  {[type]} $          [jquery对象]
 * @param  {[type]} window     [window对象]
 * @param  {[type]} document   [document对象]
 * @param  {[type]} undefinded [description]
 * @return {[type]}            [description]
 * 传入以上全局对象到函数作用域，在使用时避免了作用域链的向上查找，优化性能
 */
(function($,window,document,undefinded){
	$.extend({
		fScrolline:function(options){
			//默认参数
			var defaults = {
				backColor  : '#ecf0f1',
				direction  : 'horizontal',
				frontColor : '#2ecc71',
				options    : 1,
				position   : 'top',
				reverse    : false,
				weight     : 5,
				zindex     : 10,
				scrollEnd  : function(){}
			};

			//构造函数
			function Plugin(options){
				//更新默认参数并赋值给params
				this.params = $.extend(defaults,options);
				//背景条
				this.$back = $(document.createElement('div'));
				//进度条
				this.$front = $(document.createElement('div'));
				this.init();//初始化
			}

			//原型对象
			Plugin.prototype = {
				/**
				 * 初始化
				 * @return {[type]} [description]
				 */
				init : function(){},
				/** 滚动监听 */
				scrollListener : function(){}
			};

			//实例化对象
			new Plugin(options);
		}
	});//将当前对象添加到jquery对象上
})(jQuery,window,document);