function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
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

function getTime(type) {
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

	if (type == 0) {
		return currentDate
	} else if (type == 1) {
		return currentTime;
	} else if (type == 2) {
		if (weex == 1) {
			return '星期一'
		}
		if (weex == 2) {
			return '星期二'
		}
		if (weex == 3) {
			return '星期三'
		}
		if (weex == 4) {
			return '星期四'
		}
		if (weex == 5) {
			return '星期五'
		}
		if (weex == 6) {
			return '星期六'
		}
		if (weex == 7) {
			return '星期日'
		}
	} else {
		return currentDate + " " + currentTime;
	}
}

// 获取当月共多少天
function getThisMonthDays(year, month) {
	return new Date(year, month, 0).getDate()
}
// 获取当月第一天星期几
function getFirstDayOfWeek(year, month) {
	return new Date(Date.UTC(year, month - 1, 1)).getDay();
}


// 获取当前是一年中的第几周
function getWeekOfYear() {
	var totalDays = 0;
	var myDate = new Date();
	var year = myDate.getFullYear();
	console.log('getWeekOfYear.year:' + year);
	var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (year % 4 == 0)
		days[1] = days[1] = 29;
	if (myDate.getMonth() == 0) {
		totalDays = totalDays + myDate.getDate();
		console.log('getWeekOfYear.totalDays:' + totalDays);
	} else {
		var curMonth = myDate.getMonth();
		console.log('getWeekOfYear.curMonth:' + curMonth);

		for (var count = 1; count <= curMonth; count++) {
			totalDays = totalDays + days[count - 1];
		}
		totalDays = totalDays + myDate.getDate() + new Date(year + '-01-01').getDay();
		console.log('getWeekOfYear.totalDays:' + totalDays);

	}
	var week = Math.ceil(totalDays / 7);
	console.log('getWeekOfYear.week:' + week);
	return week;
}
//获取本周的日期/星期几
function getCurrentWeek() {
	var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let week = [{
		'weekday': '周一',
		'date': ''
	}, {
		'weekday': '周二',
		'date': ''
	}, {
		'weekday': '周三',
		'date': ''
	}, {
		'weekday': '周四',
		'date': ''
	}, {
		'weekday': '周五',
		'date': ''
	}, {
		'weekday': '周六',
		'date': ''
	}, {
		'weekday': '周日',
		'date': ''
	}];
	let d = new Date();
	let year = d.getFullYear();
	let month = d.getMonth();//(0 ~ 11)
	let day = d.getDate(); //当前一个月中的某一天 (1 ~ 31)
	
	if (year % 4 == 0)
		daysInMonth[1] = 29;
	
	let weekday = d.getDay(); //一周中的第几天(0 ~ 6)
	if(weekday==0) weekday= 6;	//返回值中周日为0,这里将周日放到最后
	
	if(day -weekday <= 0){
		if(month - 1 < 0)
			year--;
		else
			month--;
	} else {
		day = day - weekday + 1;
	}
		
	console.log('getCurrentWeek.today: year:'+ year + ' month:'+ month + ' day:'+day);
	console.log('getCurrentWeek.today is the ' + weekday + ' day in the week');
	
	let dWeekStart = new Date(Date.UTC(year, month, day));
	let yearWeekStart = dWeekStart.getFullYear();
	let monthWeekStart = dWeekStart.getMonth();
	let dayWeekStart = dWeekStart.getDate();
	console.log('getCurrentWeek.start of this week: year:'+ yearWeekStart + ' month:'+ monthWeekStart + ' day:'+dayWeekStart);
		
	for (var i = 0; i < 7; i++) {
		let dd = dayWeekStart + i;
		let daysin = daysInMonth[monthWeekStart];
		console.log('getCurrentWeek.day'+ i + 'in current week, current date ' + dd + 'aa' + daysin + 'days in current month');
		if(dd > daysInMonth[monthWeekStart]){
			console.log('getCurrentWeek.step to next month, day' + i);
			if(monthWeekStart == 11) {
				console.log('getCurrentWeek.step to next year, day' + i);
				week[i].month = 1;
				week[i].year = yearWeekStart++;
			}
			else {
				console.log('getCurrentWeek.step to next month, day' + i);
				week[i].month = monthWeekStart + 2;	//进位+1， month从【0:11】，变为【1:12】所以又+1,
				week[i].year = yearWeekStart;
			}
			week[i].day = dayWeekStart + i - daysInMonth[monthWeekStart];
		}
		else{
			console.log('getCurrentWeek.still in this month day' + i);
			week[i].day = dayWeekStart + i;
			week[i].month = monthWeekStart + 1;
			week[i].year = yearWeekStart;
		}
	}
	
	return {week,weekday};
}
module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	getTime: getTime,
	getThisMonthDays: getThisMonthDays,
	getFirstDayOfWeek: getFirstDayOfWeek,
	getWeekOfYear: getWeekOfYear,
	getCurrentWeek: getCurrentWeek
}
