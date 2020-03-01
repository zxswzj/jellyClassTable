import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'
import viewHighlight from './components/view-highlight.vue'
import colorPicker from './components/color-picker.vue'
import iconPicker from './components/icon-picker.vue'
import uniPromise from './common/uniPromise.js'
// import uniAsync from '@/utils/uni-async.js'


Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$uni = uniPromise.uniPromise;
// Vue.prototype.$uniAsync = uniAsync

const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)
Vue.component('view-highlight', viewHighlight)
Vue.component('color-picker', colorPicker)
Vue.component('icon-picker', iconPicker)

Vue.prototype.$api = { json };

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
 