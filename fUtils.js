/**
 * 参照自冴羽博客  https://github.com/mqyqingfeng/Blog
 */
/*
debounce    函数防抖
throttle    函数节流
unique      数组去重
type        数据类型判断
isEmptyObject  判断是否为空对象
isPlainObject  判断是否为纯粹对象
isArrayLike    判断是否为类数组对象
isFunction    判断是否为函数对象
isElement      判断是否为DOM元素
deepCopy     深拷贝
extend       继承，将后面对象的属性拷贝到第一个对象中去
flatten     数组扁平化操作
findIndex    正向查找指定元素
findLastIndex  反向查找指定元素
 */
(function(global,factory){
	factory(global);
})(window,function(window){
	var class2type = {};
	//相当于Object.prototype.toString
	var toString = class2type.toString;
	//相当于Object.prototype.hasOwnProperty
	var hasOwn = class2type.hasOwnProperty;

	var fUtils = function(){
		this.init();
	};

	fUtils.prototype.init = function(){
		"Boolean Number String Function Array Date RegExp Object Error Null Undfined NodeList".split(" ").map(function(item,index){
			class2type["[object " + item + "]"] = item.toLowerCase();
		});
	};

		/**
		 * 函数防抖   
		 * @param  {[type]} fun       [回调函数]
		 * @param  {[type]} wait      [毫秒数]
		 * @param  {[type]} immediate [是否立即执行]
		 * @return {[type]}           [description]
		 */
	fUtils.prototype.debounce = function(fun,wait,immediate){
		var timeout,result;
		return function(){
			var context = this;
			var args = arguments;
			clearTimeout(timeout);
			if (immediate) {
				var callNow = !timeout;
				timeout = setTimeout(function(){
					timeout = null;
				},wait);
				if (callNow) {
					fun.apply(context,args);
				}
			}else{
				timeout = setTimeout(function(){
					fun.apply(context,args);
				},wait);
			}
		};
	};

		/**
		 * 函数节流
		 * @param  {[type]} func    [回调函数]
		 * @param  {[type]} wait    [毫秒数]
		 * @param  {[type]} options [leading：false 表示禁用第一次执行
                                    trailing: false 表示禁用停止触发的回调  只能设其中一个为false]
		 * @return {[type]}         [description]
		 */
	fUtils.prototype.throttle = function(func,wait,options){
		var timeout,context,args,result;
		var previous = 0;
		if (!options) {
			options = {};
		}

		var later = function(){
			previous = options.leading === false ? 0 : +new Date();
			timeout = null;
			func.apply(context,args);
		};

		var throttle = function(){
			context = this;
			args = arguments;
			var now = +new Date();
			if (!previous && options.leading === false) {
				previous = now;
			}
			//下次触发func剩余时间
			var remaining = wait - (now - previous);
			//如果没有剩余的时间了或者你改了系统时间
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now;
				func.apply(context,args);
				//console.log("===");
				if (!timeout) {
					context = args = null;
				}
			}else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later,remaining);
			}
		};
		return throttle;
	};

		/**
		 * 数组去重
		 * @param  {[type]}  array    [源数组]
		 * @param  {Boolean} isSorted [是否已经排序]
		 * @param  {[type]}  iteratee [迭代函数] function(value,index,array){} 
		 * @return {[type]}           [description]
		 */
	fUtils.prototype.unique = function(array,isSorted,iteratee){
		if (typeof isSorted !== 'boolean') {
			iteratee = isSorted;
			isSorted = false;
		}
		var res = [];
		var seen = [];
		for(var i = 0,len = array.length;i < len;i++){
			var value = array[i];
			var computed = iteratee ? iteratee(value,i,array) : value;
			if (isSorted) {
				if (!i || seen !== value) {
					res.push(value);
				}
				seen = value;
			}else if (iteratee) {
				if (seen.indexOf(computed) === -1) {
					seen.push(computed);
					res.push(value);
				}
			}else if (res.indexOf(value) === -1) {
				res.push(value);
			}
		}
		return res;
	};

	/**
	 * 判断数据类型
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	fUtils.prototype.type = function(obj){
		if (obj == null) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[Object.prototype.toString.call(obj)] || "object" : typeof obj;

	};


	fUtils.prototype.isEmptyObject = function(obj){
		var name;
		for(name in obj){
			return false;
		}
		return true;
	};

	/**
	 * plainObject 来自于 jQuery，可以翻译成纯粹的对象，所谓"纯粹的对象"，就是该对象是通过 "{}" 或 "new Object" 创建的
	 * @param  {[type]}  obj [description]
	 * @return {Boolean}     [description]
	 */
	fUtils.prototype.isPlainObject = function(obj){
		var proto,Ctor;
		//排除掉明显不是obj的以及一些宿主对象如Window
		if (!obj || toString.call(obj) !== "[object Object]") {
			return false;
		}

		proto = Object.getPrototypeOf(obj);
		//console.log(proto);
		//没有原型的对象是纯粹的,Object.create(null)就在这里返回true;
		if (!proto) {
			return true;
		}
		/**
		 * 以下判断通过new Object方式创建的对象
		 * 判断proto是否有constructor属性，如果有就让Ctor的值为proto.constructor
		 * 如果是Object函数创建的对象,Ctor在这里就等于Object构造函数
		 * @type {[type]}
		 */
		Ctor = hasOwn.call(proto,"constructor") && proto.constructor;
		//console.log(Ctor);
		// 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
		return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
		/**
		 * 我们判断 Ctor 构造函数是不是 Object 构造函数，用的是 hasOwn.toString.call(Ctor)，这个方法可不是 Object.prototype.toString
		 * hasOwn.toString 调用的其实是 Function.prototype.toString，毕竟 hasOwnProperty 可是一个函数！
		 * 而且 Function 对象覆盖了从 Object 继承来的 Object.prototype.toString 方法。
		 * 函数的 toString 方法会返回一个表示函数源代码的字符串。具体来说，包括 function关键字，形参列表，大括号，以及函数体中的内容。
		 */
	};

	fUtils.prototype.isWindow = function(obj){
		return obj != null && obj === obj.window;
	};

	fUtils.prototype.isFunction = function(obj){
		return obj != null && this.type(obj) === 'function';
	};

	/**
	 * 判断是否是类数组对象
	 * @param  {[type]}  obj [description]
	 * @return {Boolean}     [description]
	 * 所以如果 isArrayLike 返回true，至少要满足三个条件之一：
	 * 是数组
	 * 长度为 0
	 * lengths 属性是大于 0 的数组，并且obj[length - 1]必须存在
	 */
	
	 fUtils.prototype.isArrayLike = function(obj){
		var length = !!obj && "length" in obj && obj.length;
		var typeRes = this.type(obj);
		//排除掉函数和window对象
		if (typeRes === "function" || this.isWindow(obj)) {
			return false;
		}
		return typeRes === "array" || typeRes === 'nodelist' || length === 0 ||
			(typeof length === "number" && length > 0 && (length-1) in obj); 
	};

	/**
	 * 判断是否是DOM元素
	 * @param  {[type]}  obj [description]
	 * @return {Boolean}     [description]
	 */
	fUtils.prototype.isElement = function(obj){
		return !!(obj && obj.nodeType === 1);
	}

	/**
	 * 深拷贝
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	fUtils.prototype.deepCopy =  function(obj){
		if (typeof obj !== 'object') {
			return;
		}
		var newObj = obj instanceof Array ? [] : {};
		for(var key in obj){
			if (obj.hasOwnProperty(key)) {
				newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
			}
		}
		return newObj;
	}

	fUtils.prototype.extend = function(){
		//默认不进行深拷贝
		var deep = false;
		var name,options,src,copy,clone,copyIsArray;
		var length = arguments.length;
		//记录要复制对象的下标,默认为1
		var i = 1;
		//第一个参数不传布尔值的情况下，target默认是第一个参数
		var target = arguments[0] || {};

		if (typeof target == 'boolean') {
			deep = target;
			target = arguments[i] || {};
			i++;
		}
		//如果target不是对象，我们是无法进行复制的，所以设为{}
		if (typeof target !== 'object' && !this.isFunction(target)) {
			target = {};
		}
		if (i === length) { // 处理这种情况 fUtils.extend(obj)
			target = this; //将对象属性扩展到自身
			i--;
		}
		//循环遍历要复制的对象们
		for(;i < length; i++){
			//获取当前对象
			options = arguments[i];
			//要求不能为空 避免extend(a, ,b)这种情况
			if (options != null) {
				for(name in options){
					//目标属性值
					src = target[name];
					//要复制的对象的属性值
					copy = options[name];
					if (target === copy) {
						continue;
					}
					if (deep && copy && (this.isPlainObject(copy) ||
						(copyIsArray = Array.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && Array.isArray(src) ? src : [];
						}else{
							clone = src && this.isPlainObject(src) ? src : {};
						}
						target[name] = this.extend(deep,clone,copy);
					}else if (copy !== undefined){
						target[name] = copy;
					}
				}
			}
		}
		return target;
	};

	/**
	 * [flatten description]
	 * @param  {[type]} array   [待处理数组]
	 * @param  {[type]} shallow [是否只扁平化一层]
	 * @return {[type]}         [description]
	 */
	fUtils.prototype.flatten = function(array,shallow){
		return flatten(array,shallow,false);
	};
	/**
	 * 数组变平化处理
	 * @param  {[type]} input   [待处理数组]
	 * @param  {[type]} shallow [是否只扁平化一层]
	 * @param  {[type]} strict  [是否使用严格模式，即跳过非数组]
	 * @param  {[type]} output  [返回扁平化后的数组]
	 * @return {[type]}         [description]
	 *
	 * shallow true + strict false ：正常扁平一层
	 * shallow false + strict false ：正常扁平所有层
	 * shallow true + strict true ：去掉非数组元素
	 * shallow false + strict true ： 返回一个[]
	 */
	function flatten(input,shallow,strict,output){
		//递归使用的时候会用到output
		output = output || [];
		var index = output.length;
		for(var i = 0,len = input.length;i<len;i++){
			var value = input[i];
			if (Array.isArray(value)) {
				//如果只扁平一层
				if (shallow) {
					var j =0,len = value.length;
					while(j < len){
						output[index++] = value[j++];
					}
				}else{
					//如果全部扁平
					flatten(value,shallow,strict,output);
					index = output.length;
				}
			}else if (!strict) {
				//不是数组，根据strict的值判断是跳过不处理还是放入output
				output[index++] = value;
			}
		}
		return output;
	}

	/**
	 * 查找指定元素
	 * @param  {[type]} dir [方向]
	 * @return {[type]}     [description]
	 */
	function createIndexFinder(dir){
		//查找符合predicate的元素在数组中的位置
		return function(array,predicate,context){
			var length = array.length;
			var index = dir > 0 ? 0 :length - 1;
			for(;index >= 0 && index < length ; index += dir){
				if (predicate.call(context,array[index],index,array)) {
					return index;
				}
			}
			return -1;
		};
	}
	//正向查找指定元素
	fUtils.prototype.findIndex = createIndexFinder(1);
	//反向查找指定元素
	fUtils.prototype.findLastIndex = createIndexFinder(-1);

	/**
	 * 遍历数组(类数组)或对象
	 * @param  {[type]}   obj      [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	function each(obj,callback){
		var length,i = 0;
		if (this.isArrayLike(obj)) {
			length = obj.length;
			for(;i < length; i++){
				if(callback.call(obj[i],i,obj[i]) === false){
					break;
				}
			}
		}else{
			for(i in obj){
				if(callback.call(obj[i],i,obj[i]) === false){
					break;
				}
			}
		}
		return obj;
	}
	//遍历数组(类数组)或对象
	fUtils.prototype.each = each;
	window.fUtils = new fUtils;
});