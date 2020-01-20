import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        hasLogin: false,
        loginProvider: "",
        openid: null,
        testvuex: false,
        projs: {
            displayFullThres: 100,
            displayNormalThres: 75,
            displayLessThres: 50,
            displayNoneThres: 25,
            tableMode: 5, //5day mode
            startLineTime: 480,
            endLineTime: 1280,
            timeSpan: 800,
            days: [{
                    weekday: 'monday',
                    icon: 'chat',
                    marginTop: 100,
                    classes: [{
                            weekday: 'monday',
                            icon: 'success',
                            name: 'm1',
                            time: 480,
                            dur: 60,
                            margintop: 100,
                            height: 100,
                            displayMode: 2
                        },
                        {
                            weekday: 'monday',
                            icon: 'warn',
                            name: 'm2',
                            time: 720,
                            dur: 120,
                            margintop: 50,
                            height: 100,
                            displayMode: 2
                        }
                    ]
                },
                {
                    weekday: 'tuesday',
                    icon: 'like-o',
                    classes: [{
                            weekday: 'tuesday',
                            icon: 'download',
                            name: 'm2',
                            time: 480,
                            dur: 45,
                            marginTop: 10,
                            height: 100,
                            displayMode: 2
                        },
                        {
                            weekday: 'tuesday',
                            icon: 'info',
                            name: 'math',
                            time: 540,
                            dur: 60,
                            marginTop: 10,
                            height: 100,
                            displayMode: 2
                        }
                    ]
                },
                {
                    weekday: 'wednesday',
                    icon: 'like-o',
                    classes: [{
                            weekday: 'wednesday',
                            name: 'chinese',
                            time: 480,
                            dur: 45,
                            marginTop: 10,
                            height: 100,
                            displayMode: 2
                        },
                        {
                            weekday: 'wednesday',
                            name: 'math',
                            time: 600,
                            dur: 60,
                            marginTop: 10,
                            height: 100,
                            displayMode: 2
                        }
                    ]
                },
                {
                    weekday: 'thuesday',
                    icon: 'like-o',
                    classes: [{
                            weekday: 'thuesday',
                            name: 'chinese',
                            time: 600,
                            dur: 45,
                            marginTop: 10,
                            height: 100,
                            displayMode: 2
                        },
                        {
                            weekday: 'thuesday',
                            name: 'math',
                            time: 700,
                            dur: 60,
                            marginTop: 10,
                            height: 100,
                            displayMode: 2
                        }
                    ]
                },
                {
                    weekday: 'friday',
                    icon: 'like-o',
                    classes: [{
                            weekday: 'friday',
                            name: 'chinese',
                            time: 800,
                            dur: 45,
                            marginTop: 10,
                            height: 100,
                            displayMode: 2
                        },
                        {
                            weekday: 'friday',
                            name: 'math',
                            time: 900,
                            dur: 60,
                            marginTop: 10,
                            height: 100,
                            displayMode: 2
                        }
                    ]
                }
            ]
        }
    },
    mutations: {
        login(state, provider) {
            state.hasLogin = true;
            state.loginProvider = provider;
        },
        logout(state) {
            state.hasLogin = false
            state.openid = null
        },
        setOpenid(state, openid) {
            state.openid = openid
        },
        setTestTrue(state) {
            state.testvuex = true
        },
        setTestFalse(state) {
            state.testvuex = false
        },
        increaseCountBy(state, cnt) {
            state.count += cnt;
        },
        increaseCount(state) {
            console.log('increaseCount:')
            state.count += 2;
        },
        decreaseCount(state) {
            state.count--;
        },
        setProjs(state, item) {
            state.projs = item;
        },
        updateProjs(state, rpx) {
            let pretime = 0;

            state.projs.days.forEach(function(item1) {
                item1.classes.forEach(function(item2, index2) {
                    if(item2.time < state.projs.startLineTime)
                        state.projs.startLineTime = item2.time;
                    if((item2.time + item2.dur) > state.projs.endLineTime)
                        state.projs.endLineTime = item2.time + item2.dur;
                    console.log(index2);
                })
            })

            if((state.projs.endLineTime - state.projs.startLineTime) > state.projs.timeSpan)
                state.projs.timeSpan = state.projs.endLineTime - state.projs.startLineTime;

            console.log('updateProjs; rpx:' + rpx);
            state.projs.days.forEach(function(item1) {
                item1.classes.forEach(function(item2, index2) {
                    console.log(item2.name + ':' + item2.time + ':' + item2.dur + ':' + item2.margintop + ':' + index2)
                    if (index2 == 0) {
                        item2.margintop = (item2.time - state.projs.startLineTime) * rpx;
                        pretime = item2.time + item2.dur;
                    } else {
                        item2.margintop = (item2.time - pretime) * rpx;
                        pretime = item2.time + item2.dur;
                    }

                    item2.height = item2.dur * rpx;
                    if(item2.height > state.projs.displayFullThres)
                        item2.displayMode = 4;
                    else if(item2.height > state.projs.displayNormalThres)
                        item2.displayMode = 3;
                    else if(item2.height > state.projs.displayLessThres)
                        item2.displayMode = 2;
                    else if(item2.height > state.projs.displayNoneThres)
                        item2.displayMode = 1;
                    else
                        item2.displayMode = 0;
                    console.log(item2.name + ':' + item2.time + ':' + item2.dur + ':' + item2.margintop)
                })
            })
        },

        addClass(state, item) {
            console.log('addClass');
            console.log(JSON.stringify(item));
            state.projs.days.forEach(function(i1) {
                if (i1.weekday == item.weekday) {
                    i1.classes.push(item);
                }
            })
        },
		updateClass(state, item, day, classIdx) {
		    console.log('addClass');
		    console.log(JSON.stringify(item));
		    state.projs.days.forEach(function(i1) {
		        if (i1.weekday == item.weekday) {
		            i1.classes.push(item);
		        }
		    })
		}
    },
    actions: {
        // lazy loading openid
        getUserOpenId: async function({
            commit,
            state
        }) {
            return await new Promise((resolve, reject) => {
                if (state.openid) {
                    resolve(state.openid)
                } else {
                    uni.login({
                        success: (data) => {
                            commit('login')
                            setTimeout(function() { //模拟异步请求服务器获取 openid
                                const openid = '123456789'
                                console.log(
                                    'uni.request mock openid[' +
                                    openid +
                                    ']');
                                commit('setOpenid', openid)
                                resolve(openid)
                            }, 1000)
                        },
                        fail: (err) => {
                            console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务',
                                err)
                            reject(err)
                        }
                    })
                }
            })
        }
    }
})

export default store
