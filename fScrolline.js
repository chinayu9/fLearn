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
				init : function(){
					var self = this,
						tBack,rBack,bBack,lBack,bgBack,
						tFront,rFrong,bFront,lFront,bgFront;
					//方向只可能是vertical 和 horizontal两种情况
					if (self.params.direction != 'vertical') {
						self.params.direction = 'horizontal';
					}
					//在vertical方向上只有left 和 rigtht 两种位置
					if (self.params.direction == 'vertical' && self.params.position != 'rigth') {
						self.params.position = 'left';
					}
					//在horizontal方向上只有top 和 bottom两种位置
					if (self.params.direction == 'horizontal' && self.params.position != 'bottom') {
						self.params.position = 'top';
					}
					//初始化背景条top bottom right left的值
					if (self.params.direction == 'vertical') {
						bBack = tBack = 0; //背景条距离bottom top的值
						if (self.params.position == 'rigth') {//背景条距离right left的值
							rBack = 0;
							lBack = 'auto';
						}else{
							rBack = 'auto';
							lBack = 0;
						}
					}else{
						rBack = lBack = 0;
						if (self.params.position == 'bottom') {
							bBack = 0;
							tBack = 'auto';
						}else{
							bBack = 'auto';
							tBack = 0;
						}
					}

					if (self.params.reverse && self.params.reverse === true) {
						if (self.params.direction == 'vertical') {
							//进度条从下往上
							bFront = lFront = rFront = 0;
							tFront = 'auto';
						}else{
							//进度条从右往左
							tFront = bFront = rFront = 0;
							lFront = 'auto';
						}
					}else{
						tFront = lFront = 0;
						bFront = rFront = 'auto';
					}

					//设置进度条样式
					self.$front.css({
						position : 'absolute',
						overflow : 'hidden',
						margin : 0,
						padding : 0,
						width : 0,
						height : 0,
						background : self.params.frontColor,
						top : tFront,
						bottom : bFront,
						left : lFront,
						right : rFront
					}).appendTo(self.$back);
					//设置背景条样式
					self.$back.css({
						position : 'fixed',
						overflow : 'hidden',
						margin : 0,
						padding : 0,
						width : 0,
						height : 0,
						background : self.params.backColor,
						opacity : self.params.opacity,
						zIndex : self.params.zindex,
						top : tBack,
						bottom : bBack,
						left : lBack,
						right : rBack
					}).appendTo("body");

					//注册监听事件
					$(window).on("load resize scroll orientationchange",function(){
						self.scrollListener();
					});

				},
				/** 滚动监听 */
				scrollListener : function(){
					//wRef 背景条的总长度
					var self = this,
						hWin = $(window).height(),
						wWin = $(window).width(),
						hDoc = $(document).height(),
						scrollValue = $(window).scrollTop(),
						wBack,hBack,wFront,hFront,scrollLineValue,wRef;
					
					if (self.params.direction == 'vertical') {
						//进度条的长度
						//scrollValue + hWin 当前浏览的高度
						scrollLineValue = (scrollValue + hWin) * hWin / hDoc;
						wBack = self.params.weight;
						hBack = wRef = hWin;
						wFront = self.params.weight;
						hFront = scrollLineValue;
					}else{
						scrollLineValue = (scrollValue + hWin) * wWin / hDoc;
						wBack = wRef = wWin;
						hBack = self.params.weight;
						wFront = scrollLineValue;
						hFront = self.params.weight;
					}
					//设置进度条进度
					self.$back.css({
						width : wBack,
						height : hBack
					});
					self.$front.css({
						width : wFront,
						height : hFront
					});
					//滚动完毕回调函数
					if (scrollLineValue >= wRef) {
						self.params.scrollEnd();
					}
				}
			};

			//实例化对象
			new Plugin(options);
		}
	});//将当前对象添加到jquery对象上
})(jQuery,window,document);