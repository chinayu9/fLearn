export const format = (dateStr)=>{
	const oneSeconds = 1;
	const oneMinute = oneSeconds * 60;
	const oneHour = oneMinute * 60;
	const oneDay = oneHour * 24;
	const oneMonth = oneDay * 30;
	const oneYear = oneMonth * 12;

	//dateStr="2017-11-24T07:27:37.263Z";
	const oldDate = new Date(dateStr).getTime();
	const now = new Date().getTime();
	const diff = Math.floor((now - oldDate) / 1000);
	//console.log(diff);
	if (Math.floor(diff / oneYear) > 0) {
		return Math.floor(diff / oneYear) + "年前";
	}else if (Math.floor(diff / oneMonth) > 0) {
		return Math.floor(diff / oneMonth) + "个月前";
	}else if (Math.floor(diff / oneDay) > 0) {
		return Math.floor(diff / oneDay) + "天前";
	}else if (Math.floor(diff / oneHour) > 0) {
		return Math.floor(diff / oneHour) + "小时前";
	}else if (Math.floor(diff / oneMinute) > 0) {
		return Math.floor(diff / oneMinute) + "分钟前";
	}else if (Math.floor(diff / oneSeconds) > 0) {
		return "几秒前";
	}else{
		return "百年前"
	}
	
};