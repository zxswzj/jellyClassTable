<template>
	<view id="topview" class="body z-flex" style="--dir:var(--dir-col);--wrap:var(--wrap-no)" :style="{ background: 'linear-gradient(' + cfg.bgc + ', ' + cfg.bgcGradient + ')' }">
		<view class="head"></view>
		<view class="main z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no)">
			<view class="dp-fc fd-c ruler-dummy" />
			<view class="dp-fc fd-c ruler">
				<view
					class="dp-fc f-1 w100 h100 time-vertical"
					:style="{ background: 'linear-gradient(' + cfg.axisColor + ', ' + cfg.axisColor1 + ')' }"
					v-for="(item, i) in projs.timeSpan"
					:key="i"
				>
					<view class="dot dp-fc" style="text-align: center;" :style="[{color: cfg.axisTextColor},{background:cfg.axisTextBgColor}]">
						<text>{{ projs.startLineTime / 60 + i }}</text>
					</view>
				</view>
			</view> 
			<view class="dp-fc fd-c ruler-dummy" />
			<view id="idtable" class="table">
				<view
					class="col-frame"
					v-show="isDayDisplayed(i)"
					:class="[{ emphasis: isEmphasis(i) }]"
					:style="[{ height: projs.tableHeight + 'px' }, { background: 'linear-gradient(' + cfg.colBgc + ', ' + cfg.colBgcGradient + ')' }]"
					v-for="(item1, i) in projs.days"
					:key="i"
					@click.stop="onNewClass"
					@longpress.stop="onNewClass"
					:data-class="item1"
					:data-x="i"
				>
											<!--  -->
					<view
						class="dp-f fw-w item-frame"
						v-for="(item2, j) in item1.classes"
						:key="j"
						:style="[
							{ 'margin-top': item2.margintop + 'px' },
							{ height: item2.height + 'px' },
							{ background: 'linear-gradient(' + item2.bgc + ', ' + item2.bgcGradient + ')' },
							{ border: item2.showBorder ? '1px solid' + item2.borderColor : transparent },
							{ 'border-radius': item2.borderRadio + 'px' }
						]"
						style="--dir:var(--dir-row); --wrap:var(--wrap-yes); width: 100%;text-align: center;"
						@longpress.stop="onEditClass"
						@click.stop="onEditClass"
						:data-class="item2"
						:data-x="i"
						:data-y="j"
					>
						<view
							class="atom z-flex"
							style="text-align: center;--dir:var(--dir-row);--wrap:var(--wrap-yes);margin:0 auto;"
							:style="[
								{ border: item2.textShowBorder ? '1px solid ' + item2.textBorderColor : transparent },
								{ 'border-radius': item2.textBorderRadio + 'px' },
								{ color: item2.textColor },
								{ 'background-color': item2.textBgColor }
							]"
							v-show="item2.showName"
						>
							<text style="overflow: hidden;" :style="{ 'font-size': item2.textSize + 'px' }">{{ item2.name }}</text>
						</view>

						<view
							class="iconfont"
							:class="item2.icon"
							style="text-align: center;margin: 0 auto;text-align: center;width: 100%;"
							:style="[
								{ border: item2.iconShowBorder ? '1px solid ' + item2.iconBorderCorlor : transparent },
								{ 'border-radius': item2.iconBorderRadio + 'px' },
								{ color: item2.iconColor },
								{ 'background-color': item2.iconBgColor },
								{ 'font-size': item2.iconSize + 'px' }
							]"
							v-show="item2.showIcon"
						/>
						<!-- <uni-tag :text="formatDate(item2.time)"></uni-tag> -->
						<view class="w100 dp-fc">
							<view>{{ formatDate(item2.time) }}</view>
							/
							<view>{{ formatDate(item2.dur) }}</view>
						</view>
						<!-- 						<image
							src="../../static/apiIndex.png"
							:style="[
								{ border: item2.iconShowBorder ? '1px solid ' + item2.iconBorderCorlor : transparent },
								{ 'border-radius': item2.iconBorderRadio + 'px' },
								{ color: item2.iconColor },
								{ 'background-color': item2.iconBgColor },
								{ 'font-size': item2.iconSize + 'px' }
							]"
							v-show="item2.showIcon"
						></image> -->
					</view>
				</view>
			</view>
			<!-- <view class="foot"></view> -->
		</view>

		<uni-transition :mode-class="['fade']" :styles="transfromClass" :show="showPop > 0" @change="cfgChanged = false">
			<scroll-view
				class="form-top-view z-flex"
				style="--dir:var(--dir-col);--wrap:var(--wrap-no)"
				scroll-y="true"
				:style="{ height: projs.tableHeight + 'px' }"
				show-scrollbar="true"
			>
				<view class="form-item margin-top colors-white-base">
					<view class="iconfont">
						<text class="icon-xiuli"></text>
						<text class="form-item-text">课程</text>
					</view>
					<input class="pop-input" style="display: flex;flex: 1;align-items: center;" @input="onUpdateClassName" :value="cfgt.name" />
				</view>
				<view class="form-item margin-top colors-white-base">
					<view class="iconfont">
						<text class="icon-xiuli"></text>
						<text class="form-item-text">日期</text>
					</view>
					<radio-group name="week">
						<label class="radio-bg" @click="cfgt.weekday = 'monday'">
							<radio value="monday" :checked="cfgt.weekday == 'monday'" />
							<text class="pop-text">周一</text>
						</label>
						<label class="radio-bg" @click="onChangeWeekday('tuesday')">
							<radio value="tuesday" :checked="cfgt.weekday == 'tuesday'" />
							<text class="pop-text">周二</text>
						</label>
						<label class="radio-bg" @click="onChangeWeekday('wednesday')">
							<radio value="wednesday" :checked="cfgt.weekday == 'wednesday'" />
							<text class="pop-text">周三</text>
						</label>
						<label class="radio-bg" @click="onChangeWeekday('thursday')">
							<radio value="thursday" :checked="cfgt.weekday == 'thursday'" />
							<text class="pop-text">周四</text>
						</label>
						<label class="radio-bg" @click="onChangeWeekday('friday')">
							<radio value="friday" :checked="cfgt.weekday == 'friday'" />
							<text class="pop-text">周五</text>
						</label>
						<label class="radio-bg" v-show="cfg.daysMode" @click="onChangeWeekday('saterday')">
							<radio value="saterday" :checked="cfgt.weekday == 'saterday'" />
							<text class="pop-text">周六</text>
						</label>
						<label class="radio-bg" v-show="cfg.daysMode" @click="onChangeWeekday('sunday')">
							<radio value="sunday" :checked="cfgt.weekday == 'sunday'" />
							<text class="pop-text">周日</text>
						</label>
					</radio-group>
				</view>
				<view class="form-item margin-top colors-white-base">
					<view class="iconfont">
						<text class="icon-xiuli"></text>
						<text class="form-item-text">开始时间 {{ formatDate(cfgt.time) }}</text>
					</view>
					<view class="pop-text-warning" v-show="cfgt.time >= 1200">太晚了吧，救救孩子</view>
				</view>
				<view class="form-item colors-white-base">
					<view class="slide-sub-btn pop-title" @click="onSubClassTime">-</view>
					<slider style="flex:1" :value="cfgt.time" @change="sliderClassTimeChange" @changing="sliderClassTimeChange" max="1439" step="5" />
					<view class="slide-add-btn pop-title" @click="onAddClassTime">+</view>
				</view>

				<view class="form-item  colors-white-base">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">时长:{{ formatDate(cfgt.dur) }}</text>
					</view>
					<view class="pop-text-warning" v-show="cfgt.dur >= 240">时间太长了吧，救救孩子</view>
				</view>
				<view class="form-item colors-white-base">
					<text class="text-grey slide-sub-btn" @click="cfgt.dur--">-</text>
					<slider style="flex:1" :value="cfgt.dur" @changing="sliderClassDurChange" :max="durMax" step="5" />
					<view class="text-grey slide-sub-btn" @click="cfgt.dur++">+</view>
					<view class="text-grey slide-sub-btn" @click="onExtendClassDurMax" v-show="cfgt.dur >= 240">></view>
				</view>

				<view class="uni-padding-wrap mt-50">
					<uni-segmented-control :current="classStyleTabIndex" :values="classStyleTabItems" style-type="button" active-color="#007aff" @clickItem="onChangeClassStyleTabItem" />
				</view>

				<view class="form-item margin-top colors-white-base" v-if="classStyleTabIndex === 0">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">课程背景颜色</text>
					</view>
					<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-yes);">
						<view :style="{ background: cfgt.bgc }" class="test" @click="showColorPicker = 1" />
						<view :style="{ background: cfgt.bgcGradient }" class="test" @click="showColorPicker = 2" />
					</view>
				</view>

				<view class="form-item colors-white-base" v-if="classStyleTabIndex === 0">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">显示课程外框</text>
					</view>
					<switch
						class="switch-sex"
						@change="cfgt.showBorder = !cfgt.showBorder"
						:class="cfgt.showBorder ? 'checked' : ''"
						color="#39B54A"
						:checked="cfg.showBorder ? true : false"
					></switch>
				</view>

				<view class="form-item colors-white-base indent-s" v-if="classStyleTabIndex === 0">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">外框颜色</text>
					</view>
					<view class="action"><view :style="{ background: cfgt.borderColor }" class="test" @click="showColorPicker = 3" /></view>
				</view>

				<view class="form-item colors-white-base indent-s" v-if="classStyleTabIndex === 0">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">外框弧度</text>
					</view>
					<slider style="flex:1" :value="cfgt.borderRadio" @change="sliderBorderRadio" min="0" max="20" show-value />
				</view>

				<view class="form-item margin-top colors-white-base" v-if="classStyleTabIndex === 1">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">显示课程名称</text>
					</view>
					<switch
						class="switch-sex"
						@change="cfgt.showName = !cfgt.showName"
						:class="cfgt.showName ? 'checked' : ''"
						color="#39B54A"
						:checked="cfgt.showName ? true : false"
					></switch>
				</view>

				<view class="form-item margin-top colors-white-base" v-if="classStyleTabIndex === 1">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">名称颜色/名称背景颜色</text>
					</view>
					<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-yes);">
						<view class="action"><view :style="{ background: cfgt.textColor }" class="test" @click="showColorPicker = 4" /></view>
						<view class="action"><view :style="{ background: cfgt.textBgColor }" class="test" @click="showColorPicker = 5" /></view>
					</view>
				</view>

				<view class="form-item margin-top colors-white-base indent-s" v-if="classStyleTabIndex === 1">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">名称大小</text>
					</view>
					<slider style="flex:1" :value="cfgt.textSize" @change="sliderTextSize" min="0" max="30" show-value />
				</view>

				<view class="form-item margin-top colors-white-base " v-if="classStyleTabIndex === 1">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">显示文字边框</text>
					</view>
					<switch
						class="switch-sex"
						@change="cfgt.textShowBorder = !cfgt.textShowBorder"
						:class="cfgt.textShowBorder ? 'checked' : ''"
						color="#39B54A"
						:checked="cfgt.textShowBorder ? true : false"
					></switch>
				</view>

				<view class="form-item margin-top colors-white-base indent-s" v-if="classStyleTabIndex === 1">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">文字边框颜色</text>
					</view>
					<view class="action"><view :style="{ background: cfgt.textBorderColor }" class="test" @click="showColorPicker = 6" /></view>
				</view>

				<view class="form-item colors-white-base indent-s" v-if="classStyleTabIndex === 1">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">文字边框弧度</text>
					</view>
					<slider style="flex:1" :value="cfgt.textBorderRadio" @change="sliderTextBorderRadio" min="0" max="10" show-value />
				</view>

				<view class="form-item colors-white-base " v-if="classStyleTabIndex === 2">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">显示图标</text>
					</view>
					<switch
						class="switch-sex"
						@change="cfgt.showIcon = !cfgt.showIcon"
						:class="cfgt.showIcon ? 'checked' : ''"
						color="#39B54A"
						:checked="cfgt.showIcon ? true : false"
					></switch>
				</view>
				<view class="form-item colors-white-base indent-s" v-if="classStyleTabIndex === 2">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">选择图标</text>
					</view>
					<view class="iconfont" :class="cfgt.icon" @click="showIconPicker = true" />
				</view>
				<view class="form-item colors-white-base indent-s" v-if="classStyleTabIndex === 2">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">图标颜色/图标背景颜色</text>
					</view>
					<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-yes);">
						<view class="action"><view :style="{ background: cfgt.iconColor }" class="test" @click="showColorPicker = 7" /></view>
						<view class="action"><view :style="{ background: cfgt.iconBgColor }" class="test" @click="showColorPicker = 8" /></view>
					</view>
				</view>
				<view class="form-item colors-white-base indent-s" v-if="classStyleTabIndex === 2">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">图标大小</text>
					</view>
					<slider style="flex:1" :value="cfgt.iconSize" @change="sliderIconSize" min="0" max="50" show-value />
				</view>
				<view class="form-item colors-white-base " v-if="classStyleTabIndex === 2">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">显示图标边框</text>
					</view>
					<switch
						class="switch-sex"
						@change="cfgt.iconShowBorder = !cfgt.iconShowBorder"
						:class="cfgt.iconShowBorder ? 'checked' : ''"
						color="#39B54A"
						:checked="cfgt.iconShowBorder ? true : false"
					></switch>
				</view>

				<view class="form-item colors-white-base indent-s" v-if="classStyleTabIndex === 2">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">图标边框颜色</text>
					</view>
					<view class="action"><view :style="{ background: cfgt.iconBorderCorlor }" class="test" @click="showColorPicker = 9" /></view>
				</view>
				<view class="form-item colors-white-base indent-s" v-if="classStyleTabIndex === 2">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">图标边框弧度</text>
					</view>
					<slider style="flex:1" :value="cfgt.iconBorderRadio" @change="sliderIconBorderRadio" min="0" max="10" show-value />
				</view>

				<view class="form-item colors-white-base indent-s" v-if="classStyleTabIndex === 3">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">显示开始时间</text>
					</view>
					<switch
						class="switch-sex"
						@change="cfgt.iconShowTime = !cfgt.iconShowTime"
						:class="cfgt.iconShowTime ? 'checked' : ''"
						color="#39B54A"
						:checked="cfgt.iconShowTime ? true : false"
					/>
				</view>

				<view class="form-item margin-top colors-white-base">
					<button type="primary" @click="submitUpdateClass" v-show="showPop == 1">修改</button>
					<button type="primary" @click="submitAddClass" v-show="showPop == 2">增加</button>
					<button type="default" @click="cancelCreateProj">取消</button>
					<button type="warn" @click="onDeleteCurrClass">删除</button>
				</view>
			</scroll-view>
		</uni-transition>
		<uni-transition :mode-class="['fade']" :styles="transfromClass" :show="showColorPicker > 0" @change="transChange">
			<view class="form-top-view dp-fc fd-c w100 h100">
				<view class="uni-padding-wrap uni-common-mt">
					<uni-segmented-control :current="colorSetsTabIndex" :values="colorSetsTabItems" style-type="button" active-color="#007aff" @clickItem="onChangeColorSetTabItem" />
				</view>
				<view class="pop-item-base" style="flex-flow:row wrap" v-if="colorSetsTabIndex == 0">
					<view
						class="pop-color-block"
						:class="[
							{
								popColorBlockSelected:
									(colors[i].color == cfg.bgc && showColorPicker == 1) ||
									(colors[i].color == cfg.bgcGradient && showColorPicker == 2) ||
									(colors[i].color == cfg.colBgc && showColorPicker == 3) ||
									(colors[i].color == cfg.colBgcGradient && showColorPicker == 4) ||
									(colors[i].color == cfg.axisColor && showColorPicker == 5) ||
									(colors[i].color == cfg.axisColor1 && showColorPicker == 6) ||
									(colors[i].color == cfg.axisTextColor && showColorPicker == 7) ||
									(colors[i].color == cfg.axisTextBgColor && showColorPicker == 8)
							}
						]"
						:style="{ background: item.color }"
						v-for="(item, i) in colorSets[0].colors"
						:key="i"
						@click="onSelectColor"
						:data-color="item"
						:data-index="i"
					></view>
				</view>
				<view class="pop-item-base" style="flex-flow:row wrap" v-if="colorSetsTabIndex == 1">
					<view class="pop-title">颜色</view>
					<view
						class="pop-color-block"
						:class="[
							{
								popColorBlockSelected:
									(colors[i].color == cfg.bgc && showColorPicker == 1) ||
									(colors[i].color == cfg.bgcGradient && showColorPicker == 2) ||
									(colors[i].color == cfg.colBgc && showColorPicker == 3) ||
									(colors[i].color == cfg.colBgcGradient && showColorPicker == 4) ||
									(colors[i].color == cfg.axisColor && showColorPicker == 5) ||
									(colors[i].color == cfg.axisColor1 && showColorPicker == 6) ||
									(colors[i].color == cfg.axisTextColor && showColorPicker == 7) ||
									(colors[i].color == cfg.axisTextBgColor && showColorPicker == 8)
							}
						]"
						:style="{ background: item.color }"
						v-for="(item, i) in colorSets[1].colors"
						:key="i"
						@click="onSelectColor"
						:data-color="item"
						:data-index="i"
					></view>
				</view>
		<view class="dp-fc"><view class="dp-fc btn w-200 h-80 mt-50 c-000" @click="showColorPicker = false">确定</view></view>
			</view>
		</uni-transition>
		<uni-transition :mode-class="['fade']" :styles="transfromClass" :show="showIconPicker" @change="cfgChanged = false">
			<scroll-view
				class="form-top-view z-flex"
				scroll-y="true"
				:style="{ height: projs.tableHeight + 'px' }"
				show-scrollbar="true"
				style="--dir:var(--dir-col); --wrap:var(--wrap-yes);margin:0 auto;"
			>
				<view
					class="iconfont icon-block"
					:class="[
						{
							popColorBlockSelected: item == cfgt.icon
						},
						item
					]"
					style="display:inline-block;font-size: 30px;text-align: center;"
					v-for="(item, i) in icons"
					:key="i"
					@click="onSelectIcon"
					:data-icon="item"
				/>
				<view class="pop-item-base" style="flex-flow:row wrap;justify-content: center;">
					<view class="atom" style="width: 100%;justify-content: center;display: flex;" @click="showIconPicker = false">确定</view>
				</view>
			</scroll-view>
		</uni-transition>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import uniTag from '@/components/uni-tag/uni-tag.vue';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniTransition from '@/components/uni-transition/uni-transition.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
var util = require('../../common/util.js');
// let wsAPI = require('@/common/wxApi.js');
let wxapi = require('@/common/wx.js');
 
export default {
	components: {
		uniTag,
		uniDrawer,
		uniPopup,
		uniTransition,
		uniSegmentedControl,
		uniSection
	},
	data() {
		return {
			classStyleTabIndex: 0,
			colorSetsTabIndex: 0,
			classStyleTabItems: ['课程', '名称', '图标', '时间'],
			colorSetsTabItems: ['1c-69bc38','1-adcd83'],
			cfgChanged: false, //设置页面发生变化
			showColorPicker: 0,
			showIconPicker: false,
			e: [],
			key: 'KEY_PROJECT',
			durMax: 240,
			drawerMode: 0, //0:drawer close; 1: createClass drawer; 2: updateClass drawer;
			cfgt: {
				weekday: 'monday',
				icon: 'icon-youyong4',
				name: '撸串',
				time: 480,
				dur: 60,
				margintop: 100,
				height: 100,
				displayMode: 2,

				bgc: 'transparent', //课程背景颜色
				bgcGradient: 'transparent', //课程背景渐变色

				showBorder: false, //是否显示课程外框
				borderColor: '#123456', //课程外框颜色
				borderRadio: 10, //课程边框弧度

				showName: false, //是否显示课程名称
				textColor: '#FFFFFF', //名称颜色
				textBgColor: 'transparent', //名称背景颜色
				textSize: 20, //文字尺寸
				textShowBorder: false, //是否显示文字边框
				textBorderColor: '#F44336', //文字边框颜色
				textBorderRadio: 5, //文字边框弧度

				showIcon: true, //是否显示图标
				iconColor: '#ff0000', //图标颜色
				iconBgColor: 'transparent', //图标背景颜色
				iconSize: 40, //图标尺寸
				iconShowBorder: true, //是否显示图标边框
				iconBorderCorlor: '#0000ff', //图标边框颜色
				iconBorderRadio: 5, //图标边框颜色

				showTime: false,
				timeBgColor: '00ff00',
				timeSize: 10,
				timeShowBorder: false,
				showDur: false,
				durBgColor: '00ff00',
				durSize: 10,
				durShowBorder: false
			},
			x: 0,
			y: 0,
			systemInfo: [],
			util1: util,
			timestamp: 'abc',
			today: 1,
			showPop: 0,
			transfromClass: {
				position: 'fixed',
				bottom: 0,
				top: 0,
				left: 0,
				right: 0,
				width: '100%',
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
		...mapMutations(['increaseCount', 'increaseCountBy', 'decreaseCount', 'updateProjs', 'addClass', 'updateClass', 'deleteClass']),
		getStorage: function() {
			var key = this.key;
			//     data = this.projs;
			if (key.length === 0) {
				uni.showModal({
					title: '读取数据失败',
					content: 'key 不能为空',
					showCancel: false
				});
			} else {
				uni.getStorage({
					key: key,
					success: res => {
						// console.log(JSON.stringify(res.data));
						// uni.showModal({
						//     title: '读取数据成功',
						//     content: "data: '" + res.data + "'",
						//     showCancel: false
						// })
						this.projs = res.data;
					},
					fail: () => {
						uni.showModal({
							title: '读取数据失败',
							content: '找不到 key 对应的数据',
							showCancel: false
						});
					}
				});
			}
		},
		setStorage: function() {
			var key = this.key;
			var data = this.projs;
			if (key.length === 0) {
				uni.showModal({
					title: '保存数据失败',
					content: 'key 不能为空',
					showCancel: false
				});
			} else {
				uni.setStorage({
					key: key,
					data: data,
					success: res => {
						// uni.showModal({
						// 	title: '存储数据成功',
						// 	content: ' ',
						// 	showCancel: false
						// });
					},
					fail: () => {
						uni.showModal({
							title: '储存数据失败!',
							showCancel: false
						});
					}
				});
			}
		},
		clearStorage: function() {
			uni.clearStorageSync();
			(this.key = ''), (this.data = '');
			uni.showModal({
				title: '清除数据成功',
				content: ' ',
				showCancel: false
			});
		},
		dirto: function() {
			console.log('dirto');
			uni.navigateTo({
				url: '/pages/viewtest/viewtest'
			});
		},
		formatDate: function(date) {
			var h = parseInt(date / 60);
			var s = date % 60;
			s = s + '';
			// console.log('second:' + s + ', second length:' + s.length)
			if (s.length == 1) s = '0' + s;
			return [h, s].join(':');
		},
		onNewClass(e) {
			let weekday = 'monday';
			switch (e.currentTarget.dataset.x) {
				case 0:
					weekday = 'monday';
					break;
				case 1:
					weekday = 'tuesday';
					break;
				case 2:
					weekday = 'wednesday';
					break;
				case 3:
					weekday = 'thursday';
					break;
				case 4:
					weekday = 'friday';
					break;
				case 5:
					weekday = 'saturday';
					break;
				case 6:
					weekday = 'sunday';
					break;
				default:
					weekday = 'monday';
					break;
			}
			(this.cfgt = {
				weekday: weekday,
				icon: 'success',
				name: 'm1',
				time: 480,
				dur: 60,
				margintop: 100,
				height: 100,
				displayMode: 2,
				showName: false,
				showIcon: false,
				bgc: 'transparent',
				bgcGradient: 'transparent',
				textShowBorder: true,
				textBorderColor: '#F44336',
				textBorderRadio: 5,
				textColor: '#FFFFFF',
				textSize: 20
			}),
				// this.drawerMode = 2;
				(this.x = e.currentTarget.dataset.x);
			this.showPop = 2;
		},
		onEditClass(e) {
			console.log('onEditClass');
			// console.log(JSON.stringify(e.currentTarget.dataset));
			// this.drawerMode = 1;
			this.showPop = 1;
			this.e = e;
			this.cfgt = e.currentTarget.dataset.class;
			this.x = e.currentTarget.dataset.x;
			this.y = e.currentTarget.dataset.y;
		},
		onChangeClassStyleTabItem(e) {
			if (this.classStyleTabIndex !== e.currentIndex) {
				this.classStyleTabIndex = e.currentIndex;
			}
		},
		onChangeColorSetTabItem(e) {
			if (this.colorSetsTabIndex !== e.currentIndex) {
				this.colorSetsTabIndex = e.currentIndex;
			}
		},
		submitUpdateClass: function() {
			console.log('submitUpdateClas');
			// console.log(JSON.stringify(e.currentTarget.dataset))
			this.cfgt.height = this.cfgt.dur * this.projs.rpx;
			this.updateClass({ cfgt: this.cfgt, x: this.x, y: this.y });
			this.updateProjs();
			this.showPop = 0;
			// this.setStorage();
		},
		submitAddClass: function() {
			console.log('submitCreateProj');
			this.cfgt.height = this.cfgt.dur * this.projs.rpx;
			this.addClass(this.cfgt);
			this.updateProjs();
			this.showPop = 0;
			// this.setStorage();
		},
		cancelCreateProj: function() {
			this.showPop = 0;
		},
		onDeleteCurrClass: function() {
			console.log('onDeleteCurrClass');
			// console.log(JSON.stringify(this.cfgt));
			this.deleteClass({ cfgt: this.cfgt, x: this.x, y: this.y });
			this.updateProjs();
			this.showPop = false;
		},
		sliderClassTimeChange: function(e) {
			this.cfgt.time = e.detail.value;
		},
		sliderClassDurChange: function(e) {
			this.cfgt.dur = e.detail.value;
		},
		sliderBorderRadio: function(e) {
			this.cfgt.borderRadio = e.detail.value;
		},
		sliderTextSize: function(e) {
			this.cfgt.textSize = e.detail.value;
		},
		sliderTextBorderRadio: function(e) {
			this.cfgt.textBorderRadio = e.detail.value;
		},
		sliderIconSize: function(e) {
			this.cfgt.iconSize = e.detail.value;
		},
		sliderIconBorderRadio: function(e) {
			this.cfgt.iconBorderRadio = e.detail.value;
		},
		onSubClassTime: function() {
			this.cfgt.time--;
		},
		onAddClassTime: function() {
			this.cfgt.time++;
		},
		onSubClassDur: function() {
			this.cfgt.dur--;
		},
		onAddClassDur: function() {
			this.cfgt.dur++;
		},
		onExtendClassDurMax: function() {
			this.durMax += 10;
			// this.cfgt.dur ++;
		},
		onChangeWeekday: function(day) {
			this.cfgt.weekday = day;
		},
		onUpdateClassName: function(e) {
			this.cfgt.name = e.detail.value;
		},
		onUpdateStartTime: function(e) {
			this.cfgt.time = e.detail.value;
		},
		isEmphasis: function(day) {
			// console.log('isEmphasis');
			if (this.today == day && this.cfg.hilightCurrentDay) return true;
			else return false;
		},
		transChange: function() {},
		onSelectColor: function(e) {
			//双色模式
			this.e = e;
			if (this.showColorPicker == 1) this.cfgt.bgc = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 2) this.cfgt.bgcGradient = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 3) this.cfgt.borderColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 4) this.cfgt.textColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 5) this.cfgt.textBgColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 6) this.cfgt.textBorderColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 7) this.cfgt.iconColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 8) this.cfgt.iconBgColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 9) this.cfgt.iconBorderCorlor = e.currentTarget.dataset.color.color;
			else {
				console.log('onSelectColor.exception');
			}
		},
		onSelectIcon: function(e) {
			this.cfgt.icon = e.currentTarget.dataset.icon;
		},
		isDayDisplayed: function(day) {
			// console.log('isDayDisplayed' + day);
			// console.log('daysMode:' + this.cfg.daysMode);
			if (!this.cfg.daysMode) {
				if (day > 4) {
					return false;
				}
			}
			return true;
		},
		calViewSize: function() {
			console.log('calViewSize');
			const query = wx.createSelectorQuery();
			query.select('#idtable').boundingClientRect();
			query.exec(res => {
				console.log('calViewSize: ' + JSON.stringify(res));
				this.e = res;
				this.$store.commit('setTableHeight', res[0].height);
				return res;
			});
		},
		initTable: function() {
			console.log('initTable');
			console.log('getSystemInfo');
			this.$uni(uni.getSystemInfo)()
				.then(res => {
					console.log('promise1');
					console.log(JSON.stringify(res));
					this.$uni(this.calViewSize)();
				})
				.then(res => {
					console.log('promise2');
					console.log(JSON.stringify(res));
				})
				.then(res => {
					console.log('promise3');
					this.updateProjs();
				})
				.then(res => {
					console.log('promise4');
				});
		}
	},
	computed: {
		projs: { 
			get: function() {
				console.log('projs get');
				return this.$store.state.projs;
			},
			set: function(val) {
				console.log('projs set');
				this.$store.commit('setProjs', val);
			}
		},
		...mapState(['cfg', 'colors', 'icons', 'colorSets'])
	},
	onLoad() {
		// 获取系统信息
		// wsAPI.taskSequence()
		// 	.then(() => wsAPI.showLoading({title: "保存中"}))
		// 	.then(() => wsAPI.sleep(1000))
		// 	.then(() => wsAPI.hideLoading());
		console.log('onLoad');
		// this.initTable();
		console.log('initTable is done');

		/////////////////////////
		// this.$uni(uni.showModal)({
		//     title: 'uniPromise'
		// })
		// .then(res => {
		//     console.log(res)
		//     if (res.cancel) {
		//         // 中断本次运行
		//         console.warn('中断本次运行... 出问题了')
		//         return Promise.reject('这里填写出错的原因，并且中断它');
		//     }
		// })
		// .then(() => this.$uni(uni.showLoading)({
		//     title: '正在保存'
		// }))
		// .then(() =>{
		//     sleep(3000);
		//     console.log('这里延迟了3s')
		// })
		////////////////////////////////////////
		console.log('1');
		uni.getSystemInfo({
			success: res => {
				this.systemInfo = res;
				console.log('getSystemInfo:' + res.windowHeight);
				this.$store.commit('setSysInfo', res);
			}
		});
		console.log('2');
		console.log('3');
		console.log('4');
		console.log('5');

		//this.loadData();
		// this.getStorage();
		this.updateProjs();
		//获取当前日期，1：星期一。。。
		this.today = new Date().getDay() - 1;
	},
	created() {
		// this.timestamp = new Date().getTime();
		// console.log('timestamp:' + this.timestamp);
	},
	//监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
	onReady() {
		console.log('jellyTable onReady');
		//
		// this.initTable();
	},
	onShow() {
		console.log('jellyTable onShow');
		this.initTable();
	}
};
</script>

<style lang="scss">
@import '../../common/vuecolors.scss';
.devide5 {
	flex-grow: 1;
	-webkit-flex-grow: 1;
	flex-shrink: 1;
	-webkit-flex-shrink: 1;
	flex-basis: 20%;
	-webkit-flex-basis: 20%;
	width: 1px;
}

.devide7 {
	flex-grow: 1;
	-webkit-flex-grow: 1;
	flex-shrink: 1;
	-webkit-flex-shrink: 1;
	flex-basis: 14%;
	-webkit-flex-basis: 14%;
	width: 1px;
}
.slide-sub-btn {
	width: 20px;
	height: 20px;
	background-color: $blue-lighten-3;
	border-radius: 10px;
	margin: 0 auto;
	text-align: center;
}
.slide-add-btn {
	width: 20px;
	height: 20px;
	background-color: $blue-lighten-3;
	border-radius: 10px;
	margin: 0 auto;
	text-align: center;
}
.radio-bg,
.radio-1 {
	margin: 10rpx 10rpx;
	background-color: $blue-lighten-3;
	border-radius: 10px;
	display: inline-block;
	align-items: stretch;
	line-height: 40rpx;
	font-size: 40rpx;
}
.radio-1:nth-of-type(2n + 1) {
	background-color: $blue-lighten-1;
}
.radio-bg:nth-of-type(2n + 1) {
	background-color: $blue-lighten-1;
}
.foot {
	display: flex;
	flex-direction: row;
	width: auto;
	height: 10px;
	background: #ffffff;
	align-content: flex-end;
}
.col-frame {
	flex: 1;
	// background: $grey-lighten-3;
	display: flex;
	flex-direction: column;
	// border: 1px solid;
	margin: 0 2px;
	border-radius: 5px;
	align-items: stretch;
	// background: linear-gradient(#74fff4, #448de0);
	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
	color: #757575;
	font-size: 13px;
	text-align: center;
	//justify-content: center;
	background-clip: border-box;
	flex-flow: column wrap;
	width: 100%;
	overflow: hidden;
}
.col-frame:nth-of-type(2n + 1) {
	// background: linear-gradient(#aaffff, #b5eeff);
}

.item-frame {
	// display: flex;
	// flex-direction: column;
	//border: 1px solid;
	// border-radius: 10px;
	// align-items: stretch;
	// box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
	box-shadow:  -5px -5px 10px #666666, 5px 5px 10px #ffffff;
	color: #757575;
	font-size: 13px;
	// text-align: left;
	// justify-content: center;
	// background-clip: border-box;
	// flex-flow: column wrap;
	// overflow: hidden;
}
.item-name {
	font-size: 13px;
	color: #ffffff;
	// background: #b73615;
	//box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.5);
	border-radius: 5rpx;
}
.item-start-time {
	font-size: 10px;
	color: #ffffff;
	background: #b73a67;
	border-radius: 5rpx;
}
.item-end-time {
	font-size: 10px;
	color: #ffffff;
	background: #ff7e53;
	//box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.5);
	border-radius: 5rpx;
}
.emphasis {
	box-shadow: 2px 2px 5px 4px #0080ff;
	// background-color: $grey-lighten-2;
}
.nodisplay {
	display: none;
}
.tag {
	--font-size-18: 18rpx;
	--font-size-36: 36rpx;
	font-size: var(--font-size);
	vertical-align: left;
	// position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 0rpx 12rpx;
	height: 36rpx;
	font-family: Helvetica Neue, Helvetica, sans-serif;
	white-space: nowrap;
}
.badge {
	border-radius: 20rpx;
	// position: absolute;
	// top: -10upx;
	// right: -10upx;
	font-size: 2rupx;
	padding: 10rpx 10rpx;
	height: 20rpx;
	width: 20rpx;
	background-color: red;
	margin: 20rpx;
	display: flex;
}
.test {
	width: 50rpx;
	height: 50rpx;
	display: flex;
	margin: 10rpx;
	border: 1px solid rgb(0, 0, 0);
}
.body {
	// background: linear-gradient(rgba(86, 53, 248, 204), rgba(94, 80, 246, 204));
	/* background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../../static/purple_bg.png) no-repeat center center/cover; */
	font-family: Arial, Helvetica, sans-serif;
	// display: flex;
	width: 100%;
	height: 100%;
	// flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	z-index: -99;
}
.ruler-dummy {
	align-items: center;
	align-content: center;
	width: 4%;
	height: 100%;
}
.ruler {
	align-items: center;
	align-content: center;
	border-radius: 10rpx;
	width: 2%;
	height: 100%;
}
.main {
	width: 100%;
	height: 90%;
}
.head {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 10%;
	align-content: flex-start;
}
.table {
	display: flex;
	flex-direction: row;
	width: 90%;
	height: 100%;
}

.atom {
	text-decoration: none;
	// border: 1px solid rgb(146, 148, 248);
	position: relative;
	overflow: hidden;
	// border-radius: 100px;
	// color: #ffffff;
	// padding: 0 10rpx;
}

.atom:hover {
	box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
}

.atom:before {
	content: '';
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(120deg, transparent, rgba(146, 148, 248, 0.4), transparent);
	transition: all 650ms;
}

.atom:hover:before {
	left: 100%;
}

.classText {
	font-size: 50px;
}
.icon-block {
	width: 40px;
	height: 40px;
}
/*纵向时间轴*/
.time-vertical {
	list-style-type: none;
	// border-right: 2px solid green;
	// background: linear-gradient(rgba(86, 53, 248, 204), rgba(94, 80, 246, 204));
	padding: 0px;
	height: 400px;
	position: relative;
}

.time-vertical .dot {
	// content: '';
	position: absolute;
	top: -10px;
	// right: -10px;
	width: 20px;
	height: 20px;
	border: 1px solid $blue-base;
	border-radius: 50%;
	// background: #98FB98;
}
</style>
