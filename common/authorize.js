//authorize.js
// var baseUrl = "https://xxxx.com";

// 同步获取storge
const getStorageSync = (key)=>{
	try {
	    const value = uni.getStorageSync(key);
	    if (value) {
	        return value;
	    }
		return false;
	} catch (e) {
	    console.log('获取storge失败')
	}
	return false;
}

// 同步存储storge
const setStorageSync = (key,value)=>{
	try {
	    uni.setStorageSync(key, value);
		return true;
	} catch (e) {
	    console.log('存储storge失败')
	}
	return false;
}

// 检测sessionkey是否过期 1未过期 0已过期
const checkSessionKey=()=>{
	
    return new Promise((resolve,reject) => {
		const user = getStorageSync('userInfo');// 用户缓存信息
		if(user){
			uni.checkSession({
			    success() {
					resolve(user);  //状态未过期
				}
			    ,fail() {
					resolve(false); //状态已过期
				}
			})
		}else{
			resolve(false);  //未存贮
		}
    })
}

// 登录授权
const login = (params)=> {
	
	return new Promise((resolve,reject) => {
		authDo(params).then(res=>{
			if ( res.statusCode && res.statusCode != 200 ) {
				reject('网络错误，请检查一下网络');return;
			}
			if (res.data.code != 0) {
			    reject('登录失败');return;
			}
			let user = res.data.data.user;
			uni.setStorageSync('userInfo', user);//储存用户信息到本地
			resolve(user);
		})
	})
}

// 保存用户信息 write by self
const authDo = function(params) {
	return new Promise(function (resolve, reject) {
			uni.request({
				url: baseUrl +'xcx/user/login',
				data: params,
				method:'POST',
				header: {
	        		'content-type': 'application/x-www-form-urlencoded'
				},
				success: function(res){ resolve(res) },
				fail:function(){ reject("保存用户信息失败") }
			})
	})
}

// 获取服务商信息 uni-app是聚合开发 所以先获得是什么小程序 原生的不用这个
const getProvider = () => {
    return new Promise((resolve, reject) => {
        uni.getProvider({
            service: 'oauth', //服务类型  登录授权
            success: function(res) {resolve(res.provider[0])},
            fail:function() { reject("获取服务商失败") }
        });
    })
}

// 获取code
const getCode = provider => {
    return new Promise((resolve, reject) => {
		if (!provider) { reject("获取缺少provider参数") }
        uni.login({
            provider: provider,
            success: function(loginRes) {
                if (loginRes && loginRes.code) { resolve(loginRes.code) } else { reject("获取code失败") }
            },
			fail:function(){ reject("获取code失败")}
        });
    })
}

// 是否开启了获取用户名授权 当用户一开始拒绝了 需再次提醒授权
const getSetting = function() {
    return new Promise((resolve,reject) => {
        uni.getSetting({
            success:function(res) {
                let authSetting=res.authSetting
                if(authSetting['scope.userInfo']){resolve(1);return;}//授权成功
                if(authSetting['scope.userInfo']===false){resolve(0);return;}//拒绝授权
                resolve(2) //2未操作
            },
            fail:function() { reject("获取用户授权失败") }
        })
    })
}

// 获取用户信息
const getUserInfo = (provider)=>{
	return new Promise( (resolve,reject)=>{
		if (!provider) { reject("获取缺少provider参数");return; }
		uni.getUserInfo({
			provider: provider,
			success: (detail) => {
				if(detail.iv != ''){
					resolve(detail);
				}else{
					reject(0); //用户点击拒绝授权
				}
			}
			,fail: (error) => {
				reject(0); //如果用户拒绝过授权 直接走fail
			}
		});
	})
}

export default {getStorageSync,setStorageSync,getProvider,getSetting,checkSessionKey,getCode,login,getUserInfo}