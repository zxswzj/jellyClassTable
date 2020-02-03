function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}

function getTime(type){
        let date = new Date(),
        currentDate,
        currentTime,
        seperator = "-", // 如果想要其他格式 只需 修改这里 
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        weex = date.getDay(),
        day = date.getDate(),
        hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        month >= 1 && month <= 9 ? (month = "0" + month) : "";
        day >= 0 && day <= 9 ? (day = "0" + day) : "";
          //当前 日期
         currentDate = year + seperator + month + seperator + day;
          //当前 时间
         currentTime = hour + ":" + minute + ":" + second;
          // 输出格式 为 2018-8-27 14:45:33
         // console.log(currentDate +" "+ currentTime);
        
         if(type==0){
             return currentDate
         }
         else if(type==1){
             return currentTime;
         }
         else if(type==2){
             if(weex==1){
                 return '星期一'
             }if(weex==2){
                 return '星期二'
             }if(weex==3){
                 return '星期三'
             }if(weex==4){
                 return '星期四'
             }if(weex==5){
                 return '星期五'
             }if(weex==6){
                 return '星期六'
             }if(weex==7){
                 return '星期日'
             }
         }
         else{
            return currentDate+" "+ currentTime;
         }
}

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	getTime: getTime
}
