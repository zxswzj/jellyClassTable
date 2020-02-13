<template>
	<view id="topview" style="height: 100%;">
		<view class="uni-padding-wrap mt-50">
			<uni-segmented-control :current="classStyleTabIndex" :values="classStyleTabItems" style-type="button" active-color="#007aff" @clickItem="onChangeClassStyleTabItem" />
		</view>
		<button @click="calViewSize">计算view size</button>
		<scroll-view style="height: 100%;">{{ JSON.stringify(sysInfo) }}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!！！！！！！！！！！！！！！！！！！！！</scroll-view>
	</view>
</template>
<!-- 		<uni-popup class="pop-top-view" ref="popup" type="center">
			<view class="uni-form-item uni-row">
				<view class="pop-title">课程</view>
				<input class="pop-input" @input="onUpdateClassName" :value="cfgt.name" />
			</view>
			<view class="uni-form-item uni-row">
				<view class="pop-title">日期</view>
				<radio-group name="week">
					<label @click="onChangeWeekday('monday')">
						<radio value="monday" :checked="cfgt.weekday == 'monday'" />
						<text>星期一</text>
					</label>
					<label @click="onChangeWeekday('tuesday')">
						<radio value="tuesday" :checked="cfgt.weekday == 'tuesday'" />
						<text>星期二</text>
					</label>
					<label @click="onChangeWeekday('wednesday')">
						<radio value="wednesday" :checked="cfgt.weekday == 'wednesday'" />
						<text>星期三</text>
					</label>
					<label @click="onChangeWeekday('thursday')">
						<radio value="thursday" :checked="cfgt.weekday == 'thursday'" />
						<text>星期四</text>
					</label>
					<label @click="onChangeWeekday('friday')">
						<radio value="friday" :checked="cfgt.weekday == 'friday'" />
						<text>星期五</text>
					</label>
					<label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('saterday')">
						<radio value="saterday" :checked="cfgt.weekday == 'saterday'" />
						<text>星期六</text>
					</label>
					<label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('sunday')">
						<radio value="sunday" :checked="cfgt.weekday == 'sunday'" />
						<text>星期日</text>
					</label>
				</radio-group>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课程开始时间（分钟）:{{ formatDate(cfgt.time) }}</view>
				<slider :value="cfgt.time" @change="sliderClassTimeChange" max="1439" step="5" show-value />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课时长度（分钟）</view>
				<slider :value="cfgt.dur" max="240" @change="sliderClassDurChange" name="slider" show-value></slider>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="submitAddClass" v-show="drawerMode == 2">提交新课程</button>
				<button type="primary" @click="submitUpdateClass" v-show="drawerMode == 1">修改课程</button>
				<button type="primary" @click="onDeleteCurrClass">删除</button>
				<button type="primary" @click="cancelCreateProj">cancel</button>
			</view>
			<view class="uni-share-btn" @click="cancel('share')">取消分享</view>
		</uni-popup> -->
<!-- <uni-drawer :visible="drawerMode != 0" mode="right" @close="drawerMode = 0">
			<view class="uni-form-item uni-column">
				<view class="title" v-show="drawMode == 1">create class</view>
				<view class="title" v-show="drawMode == 2">update class</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课程</view>
				<input class="uni-input" @input="onUpdateClassName" :value="cfgt.name" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">日期</view>
				<radio-group name="week">
					<label @click="onChangeWeekday('monday')">
						<radio value="monday" :checked="cfgt.weekday == 'monday'" />
						<text>星期一</text>
					</label>
					<label @click="onChangeWeekday('tuesday')">
						<radio value="tuesday" :checked="cfgt.weekday == 'tuesday'" />
						<text>星期二</text>
					</label>
					<label @click="onChangeWeekday('wednesday')">
						<radio value="wednesday" :checked="cfgt.weekday == 'wednesday'" />
						<text>星期三</text>
					</label>
					<label @click="onChangeWeekday('thursday')">
						<radio value="thursday" :checked="cfgt.weekday == 'thursday'" />
						<text>星期四</text>
					</label>
					<label @click="onChangeWeekday('friday')">
						<radio value="friday" :checked="cfgt.weekday == 'friday'" />
						<text>星期五</text>
					</label>
					<label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('saterday')">
						<radio value="saterday" :checked="cfgt.weekday == 'saterday'" />
						<text>星期六</text>
					</label>
					<label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('sunday')">
						<radio value="sunday" :checked="cfgt.weekday == 'sunday'" />
						<text>星期日</text>
					</label>
				</radio-group>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课程开始时间（分钟）:{{ formatDate(cfgt.time) }}</view>
				<slider :value="cfgt.time" @change="sliderClassTimeChange" max="1439" step="5" show-value />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课时长度（分钟）</view>
				<slider :value="cfgt.dur" max="240" @change="sliderClassDurChange" name="slider" show-value></slider>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="submitAddClass" v-show="drawerMode == 2">提交新课程</button>
				<button type="primary" @click="submitUpdateClass" v-show="drawerMode == 1">修改课程</button>
				<button type="primary" @click="onDeleteCurrClass">删除</button>
				<button type="primary" @click="cancelCreateProj">cancel</button>
			</view>
		</uni-drawer> -->

<script>
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import uniTransition from '@/components/uni-transition/uni-transition.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';

import { mapState, mapMutations } from 'vuex';

export default { 
	components: {
		uniTransition,
		uniDrawer,
		uniSegmentedControl
	},
	data() {
		return {
			classStyleTabIndex: 0,
			classStyleTabItems: ['2','4','8'],
			systemInfo1: [],
			skin: true,
			showme: false,
			transfromClass: {
				position: 'fixed',
				bottom: 0,
				top: 0,
				left: 0,
				right: 0,
				width: 'auto',
				height: 'auto',
				margin: 'auto',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
				'background-color': 'rgba(0, 0, 0, 0.4)'
			}
		};
	},
	methods: {
		onShowme() {
			this.showme = !this.showme;
		},
		calViewSize: function() {

		}
	},
	computed: {
		...mapState(['cfg', 'colors', 'icons', 'projs', 'sysInfo'])
	},
	onLoad() {
		// 获取系统信息
		console.log('getSystemInfo');
		uni.getSystemInfo({
			success: res => {
				this.systemInfo1 = res;
			}
		});
	}
};
</script>

<style>
.clear_float {
	margin-bottom: 20px;
}
.goods_cell {
	width: 47%;
	box-sizing: border-box;
	padding: 10px;
	float: left;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	font-size: 13px;
	color: #333333;
	margin-left: 15px;
	margin-bottom: 20px;
}
/* .clear_float > .goods_cell:nth-of-type(2n + 1) { */
.goods_cell:nth-of-type(2n + 1) {
	margin-left: 0;
}
.img_goods {
	width: 78.5px;
	height: 96px;
	display: block;
	margin: 0 auto;
}
.text_goods {
	margin: 10px;
	color: #333333;
	font-size: 13px;
}
.goods_price {
	font-size: 18px;
	color: #ff0845;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1px;
}
.goods_price .price_span {
	font-size: 8px;
	color: #fa5754;
	line-height: 8px;
}
.goods_price .price_num {
	font-size: 16px;
	color: #fa5754;
	line-height: 18px;
}
.goods_seckill {
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	line-height: 15px;
	width: 100%;
	height: 15px;
}
.goods_seckill .seckill_left {
	width: 70%;
	padding: 2.5px 0px;
	font-size: 10px;
	color: #2d2d2d;
	line-height: 10px;
	border: 1px solid #999999;
	border-right: 1px solid #ff0845;
	text-align: center;
}
.goods_seckill .seckill_right {
	width: 30%;
	color: #ffffff;
	background-color: #ff0845;
	border: 1px solid #ff0845;
	font-size: 10px;
	line-height: 10px;
	padding: 2.5px 8px;
	text-align: center;
}
.switch-sex::after {
	content: '\e716';
}

.switch-sex::before {
	content: '\e7a9';
}

.switch-music::after {
	content: '\e66a';
}

.switch-music::before {
	content: '\e6db';
}
.nodisplay {
	display: none;
}
.test {
	display: flex;
	width: 50px;
	height: 50px;
}

.pop-top-view {
	--dir-row: row;
	--dir-col: column;

	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	background: $grey-lighten-3;
	border-radius: 10px;
	padding: 20rpx;
	flex-direction: var(--dir);
}
</style>
