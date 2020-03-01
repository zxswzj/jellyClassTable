<template>
	<view id="topview" class="body dp-f ff-cn" style="height: 100vh;" :style="[{ background: 'linear-gradient(' + cfg.bgc + ', ' + cfg.bgcGradient + ')' }]">
		<view id="idtop" class="dp-fc fd-c w100 h10">
			<view class="dp-f ff-rn jc-sb">
				<cmd-icon type="arrowLeft1" color="red"/>
				{{date.currentDate}} 第{{date.weekofYear}}周
				<cmd-icon type="xiangyou-copy" color="red"/>
			</view>
			<view class="dp-fc fd-r w100 h100">
				<view class="w10 h100"/>
				<view class="dp-fc fd-r w90 h100">
					<view class="dp-fc fd-c w100 h100" v-for="(item,i) in date.week" :key="i" v-show="isDayDisplayed(i)">
						<view class="dp-fc ff-rn w100 h100">{{item.weekday}}</view>
						<view class="dp-fc ff-rn w100 h100">{{item.month}}/{{item.day}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="w100 h90 dp-f ff-rn">
			<view class="dp-fc fd-c ruler-dummy" />
			<view class="dp-fc fd-c ruler">
				<view
					class="dp-fc f-1 w100 h100 time-vertical"
					:style="{ background: 'linear-gradient(' + cfg.axisColor + ', ' + cfg.axisColorGradient + ')' }"
					v-for="(item, i) in projs.timeSpan"
					:key="i"
				>
					<view class="dot dp-fc" style="text-align: center;" :style="[{ color: cfg.axisTextColor }, { background: cfg.axisTextBgc }]">
						<text>{{ Math.floor(projs.startLineTime / 60) + i }}</text>
					</view>
				</view>
			</view>
			<view class="dp-fc fd-c ruler-dummy" />
			<view id="idtable" class="table">
				<view
					class="col-frame"
					v-show="isDayDisplayed(i)"
					:style="[
						{ height: projs.tableHeight + 'px' },
						{ background: 'linear-gradient(' + cfg.colBgc + ', ' + cfg.colBgcGradient + ')' },
						{
							'box-shadow': isColHilight(i)
								? '2px 2px 5px 4px ' + cfg.highlightBorderColor
								: cfg.colBorderShow
								? '2px 2px 5px 4px ' + cfg.colBorderColor
								: 'transparent'
						}
					]"
					v-for="(item1, i) in projs.days"
					:key="i"
					@longpress.stop="onNewClass"
					:data-class="item1"
					:data-x="i"
					:data-y="-1"
				> 
					<view
						class="dp-fc fw-w item-frame o-h"
						v-for="(item2, j) in item1.classes"
						:key="j"
						:style="[
							{ 'margin-top': item2.margintop + 'px' },
							{ height: item2.height + 'px' },
							{ background: 'linear-gradient(' + item2.classBgc + ', ' + item2.classBgcGradient + ')' },
							{ border: item2.classBorderShow ? '2px solid' + item2.classBorderColor : 'transparent' },
							{ 'border-radius': item2.borderRadio + 'px' },
							{
								'box-shadow':
									item2.classBorderShow && item2.classBorderShowShadow ? '-5px -5px 10px ' + item2.classBorderColor + ', 5px 5px 10px #ffffff' : 'transparent'
							}
						]"
						@longpress.stop="onEditClass"
						:data-class="item2"
						:data-x="i"
						:data-y="j"
					>
						<view class="w100 dp-f fb-100 f-1 ai-c" style="height: 70%;" v-if="item2.showName || item2.showIcon">
							<cmd-icon class="dp-f ai-c jc-c w100 h100" v-if="item2.showIcon" :type="item2.icon" :size="item2.iconSize" :color="item2.iconColor"/>
							<view
								class="dp-f ai-c jc-c w100 h100"
								:style="[
									{ border: item2.textShowBorder ? '1px solid ' + item2.textBorderColor : transparent },
									{ 'border-radius': item2.textBorderRadio + 'px' },
									{ color: item2.textColor },
									{ 'background-color': item2.textBgc }
								]"
								v-show="item2.showName"
							>
								<text style="overflow: hidden;" :style="{ 'font-size': item2.textSize + 'px' }">{{ item2.name }}</text>
							</view>						
						</view>

						<view class="w100 dp-f fb-100" style="height:30%" v-if="item2.showStime || item2.showDur">
							<text
								class="item-time dp-fc w100 f-1"
								v-if="item2.showStime"
								:style="[
									{ border: item2.stimeShowBorder ? '1px solid ' + item2.stimeBorderCorlor : transparent },
									{ 'border-radius': item2.stimeBorderRadio ? '20px 0 0 20px' : '' },
									{ color: item2.stimeColor },
									{ 'font-size': item2.stimeSize + 'px' },
									{ 'background-color': item2.stimeBgc }
								]"
							>
								{{ formatDate(item2.time) }}
							</text>
							<text
								class="item-dur dp-fc w100 f-1"
								:style="[
									{ border: item2.durShowBorder ? '1px solid ' + item2.durBorderCorlor : transparent },
									{ 'border-radius': item2.durBorderRadio ? '20px 0 0 20px' : '' },
									{ color: item2.durColor },
									{ 'font-size': item2.durSize + 'px' },
									{ 'background-color': item2.durBgc }
								]"
								v-if="item2.showDur"
							>
								{{ formatDate(item2.dur) }}
							</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<uni-popup ref="popupCfg" type="center">
			<!-- <view class="dp-fc fd-c ac-fs ai-c of-s c-e0 mt-15" :style="[{ width:systemInfo.windowWidth+'px'},{height: systemInfo.windowHeight + 'px' }]"> -->
			<view class="dp-f fd-c h100 ai-s ac-fs p-0-20 pt-20">
				<view class="dp-f fd-r jc-sb ai-c c-e0 mt-15"/>
			<!-- <view class="dp-f fd-c h100 ai-s ac-fs p-0-20 pt-20"> -->
				<view class="dp-f fd-r jc-sb ai-c c-e0 mt-15">
				<!-- <view class="dp-f fd-r jc-sb ai-c m-10-a p-0-20 w100 c-e0"> -->
					<view class="iconfont dp-f ai-c">
						<text class="icon-xiuli"></text>
						<text class="fs-32 c-3c">课程</text>
					</view>
					<input class="pop-input" style="display: flex;flex: 1;align-items: center;" @input="onUpdateClassName" :value="classTmp.name" />
				</view>
				<view class="dp-f fd-r jc-sb ai-c c-e0 mt-15">
					<view class="iconfont dp-f ai-c">
						<text class="icon-xianshimoshi c-27"></text>
						<text class="fs-32 c-3c">日期</text>
					</view>

					<uni-segmented-control
						class="f-1"
						:current="classTmp.weekday"
						:values="weekTabItems"
						style-type="button"
						active-color="#007aff"
						@clickItem="onChangeWeekTabItem"
					/>
				</view>
				<view class="dp-f fd-r jc-sb ai-c c-e0 mt-15">
					<view class="iconfont">
						<text class="icon-xiuli"></text>
						<text class="form-item-text">开始时间 {{ formatDate(classTmp.time) }}</text>
					</view>
					<view class="pop-text-warning" v-show="classTmp.time >= 1200">太晚了吧，救救孩子</view>
				</view>
				<view class="dp-f fd-r jc-sb ai-c c-e0 mt-15">
					<view class="slide-sub-btn pop-title" @click="classTmp.time--">-</view>
					<slider style="flex:1" :value="classTmp.time" @change="sliderClassTimeChange" @changing="sliderClassTimeChange" max="1439" step="5" />
					<view class="slide-add-btn pop-title" @click="classTmp.time++">+</view>
				</view>

				<view class="dp-f fd-r jc-sb ai-c c-e0 mt-15">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">时长:{{ formatDate(classTmp.dur) }}</text>
					</view>
					<view class="pop-text-warning" v-show="classTmp.dur >= 240">时间太长了吧，救救孩子</view>
				</view>
				<view class="dp-f fd-r jc-sb ai-c c-e0 mt-15">
					<text class="text-grey slide-sub-btn" @click="classTmp.dur--">-</text>
					<slider style="flex:1" :value="classTmp.dur" @change="sliderClassDurChange" @changing="sliderClassDurChange" :max="durMax" step="5" />
					<view class="text-grey slide-sub-btn" @click="classTmp.dur++">+</view>
					<view class="text-grey slide-sub-btn" @click="durMax += 10" v-show="classTmp.dur >= 240">></view>
				</view>

				<view class="uni-padding-wrap mt-50">
					<uni-segmented-control
						:current="classStyleTabIndex"
						:values="classStyleTabItems"
						style-type="button"
						active-color="#007aff"
						@clickItem="onChangeClassStyleTabItem"
					/>
				</view>
				<view class="dp-f fd-c ai-s of-s" :style="{ height: systemInfo.windowHeight * 0.3 + 'px' }" v-if="classStyleTabIndex == 0">
					<view class="dp-f ff-rn jc-sb mt-10 c-fff">
						<view class="iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">课程背景颜色</text>
						</view>
						<view class="dp-fc">
							<color-picker w="60" h="60" :defColor="classTmp.classBgc" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetClassBgc" />
							<color-picker
								w="60"
								h="60"
								:defColor="classTmp.classBgcGradient"
								:tabItems="colorSetNames"
								:colorSets="colorSets"
								@loadColorPicker="cpGetClassBgcGradient"
							/>
						</view>
					</view>

					<view class="dp-f ff-rn jc-sb mt-10 c-fff">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-yanse c-27"></text>
							<text class="fs-32 c-3c">显示课程外框</text>
						</view>
						<switch
							class="switch-outline"
							@change="classTmp.classBorderShow = !classTmp.classBorderShow"
							:class="classTmp.classBorderShow ? 'checked' : ''"
							color="#39B54A"
							:checked="classTmp.classBorderShow ? true : false"
						></switch>
					</view>

					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.classBorderShow">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-yanse c-27"></text>
							<text class="fs-32 c-3c">外框颜色</text>
						</view>
						<color-picker
							w="60"
							h="60"
							:defColor="classTmp.classBorderColor"
							:tabItems="colorSetNames"
							:colorSets="colorSets"
							@loadColorPicker="cpGetClassBorderColor"
						/>
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.classBorderShow">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-yanse c-27"></text>
							<text class="fs-32 c-3c">外框弧度</text>
						</view>
						<slider style="flex:1" :value="classTmp.borderRadio" @changing="sliderBorderRadio" @change="sliderBorderRadio" min="0" max="20" show-value />
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.classBorderShow">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-yanse c-27"></text>
							<text class="fs-32 c-3c">显示阴影</text>
						</view>
						<switch
							class="switch-outline"
							@change="classTmp.classBorderShowShadow = !classTmp.classBorderShowShadow"
							:class="classTmp.classBorderShowShadow ? 'checked' : ''"
							color="#39B54A"
							:checked="classTmp.classBorderShowShadow ? true : false"
						></switch>
					</view>
				</view>
				<view class="dp-f fd-c ai-s of-s" :style="{ height: systemInfo.windowHeight * 0.3 + 'px' }" v-if="classStyleTabIndex == 1">
					<view class="dp-f ff-rn jc-sb mt-10 c-fff">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">显示课程名称</text>
						</view>
						<switch
							class="switch-class"
							@change="classTmp.showName = !classTmp.showName"
							:class="classTmp.showName ? 'checked' : ''"
							color="#39B54A"
							:checked="classTmp.showName ? true : false"
						></switch>
					</view>

					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.showName">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">名称颜色/名称背景颜色</text>
						</view>
						<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-yes);">
							<color-picker w="60" h="60" :defColor="classTmp.textColor" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetTextColor" />
							<color-picker w="60" h="60" :defColor="classTmp.textBgc" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetTextBgc" />
						</view>
					</view>

					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.showName">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">名称大小</text>
						</view>
						<slider style="flex:1" :value="classTmp.textSize" @change="sliderTextSize" @changing="sliderTextSize" min="0" max="30" show-value />
					</view>

					<view class="dp-f ff-rn jc-sb mt-10 c-fff">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">显示文字边框</text>
						</view>
						<switch
							class="switch-outline"
							@change="classTmp.textShowBorder = !classTmp.textShowBorder"
							:class="classTmp.textShowBorder ? 'checked' : ''"
							color="#39B54A"
							:checked="classTmp.textShowBorder ? true : false"
						></switch>
					</view>

					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.textShowBorder">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">文字边框颜色</text>
						</view>
						<color-picker w="60" h="60" :defColor="classTmp.textBorderColor" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetTextBorderColor" />
					</view>

					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.textShowBorder">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">文字边框弧度</text>
						</view>
						<slider style="flex:1" :value="classTmp.textBorderRadio" @change="sliderTextBorderRadio" @changing="sliderTextBorderRadio" min="0" max="10" show-value />
					</view>
				</view>
				<view class="dp-f fd-c ai-s of-s" :style="{ height: systemInfo.windowHeight * 0.3 + 'px' }" v-if="classStyleTabIndex == 2">
					<view class="dp-f ff-rn jc-sb mt-10 c-fff">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">显示图标</text>
						</view>
						<switch
							class="switch-icon"
							@change="classTmp.showIcon = !classTmp.showIcon"
							:class="classTmp.showIcon ? 'checked' : ''"
							color="#39B54A"
							:checked="classTmp.showIcon ? true : false"
						></switch>
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.showIcon">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">选择图标</text>
						</view>
						<icon-picker w="40" h="40" :defIcon="classTmp.icon" tabItems="iconSetNames" :iconSets="icons" @loadIconPicker="ipGetIcon" />
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.showIcon">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">图标颜色/图标背景颜色</text>
						</view>
						<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-yes);">
							<color-picker w="60" h="60" :defColor="classTmp.iconColor" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetIconColor" />
							<color-picker w="60" h="60" :defColor="classTmp.iconBgc" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetIconBgc" />
						</view>
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.showIcon">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">图标大小</text>
						</view>
						<slider style="flex:1" :value="classTmp.iconSize" @change="sliderIconSize" @changing="sliderIconSize" min="0" max="50" show-value />
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">显示图标边框</text>
						</view>
						<switch
							class="switch-outline"
							@change="classTmp.iconShowBorder = !classTmp.iconShowBorder"
							:class="classTmp.iconShowBorder ? 'checked' : ''"
							color="#39B54A"
							:checked="classTmp.iconShowBorder ? true : false"
						></switch>
					</view>

					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.iconShowBorder">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">图标边框颜色</text>
						</view>
						<color-picker
							w="60"
							h="60"
							:defColor="classTmp.iconBorderCorlor"
							:tabItems="colorSetNames"
							:colorSets="colorSets"
							@loadColorPicker="cpGetIconBorderColor"
						/>
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.iconShowBorder">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">图标边框弧度</text>
						</view>
						<slider style="flex:1" :value="classTmp.iconBorderRadio" @change="sliderIconBorderRadio" @changing="sliderIconBorderRadio" min="0" max="10" show-value />
					</view>
				</view>
				<view class="dp-f fd-c ai-s of-s" :style="{ height: systemInfo.windowHeight * 0.3 + 'px' }" v-if="classStyleTabIndex == 3">
					<view class="dp-f ff-rn jc-sb mt-10 c-fff">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">显示开始时间</text>
						</view>
						<switch
							class="switch-time"
							@change="classTmp.showStime = !classTmp.showStime"
							:class="classTmp.showStime ? 'checked' : ''"
							color="#39B54A"
							:checked="classTmp.showStime ? true : false"
						/>
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.showStime">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">颜色/背景颜色</text>
						</view>
						<view class="dp-fc">
							<color-picker w="60" h="60" :defColor="classTmp.stimeColor" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetStimeColor" />
							<color-picker w="60" h="60" :defColor="classTmp.stimeBgc" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetStimeBgc" />
						</view>
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.showStime">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">字体大小</text>
						</view>
						<slider style="flex:1" :value="classTmp.stimeSize" @change="sliderStimeSize" @changing="sliderStimeSize" min="0" max="50" show-value />
					</view>

					<view class="dp-f ff-rn jc-sb mt-10 c-fff">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">显示课程时长</text>
						</view>
						<switch
							class="switch-timeLen"
							@change="classTmp.showDur = !classTmp.showDur"
							:class="classTmp.showDur ? 'checked' : ''"
							color="#39B54A"
							:checked="classTmp.showDur ? true : false"
						/>
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.showDur">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">颜色/背景颜色</text>
						</view>
						<view class="dp-fc">
							<color-picker w="60" h="60" :defColor="classTmp.durColor" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetDurColor" />
							<color-picker w="60" h="60" :defColor="classTmp.durBgc" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetDurBgc" />
						</view>
					</view>
					<view class="dp-f ff-rn jc-sb mt-10 c-fff indent-us" v-if="classTmp.showDur">
						<view class="dp-fc iconfont dp-f ai-c">
							<text class="icon-xianshimoshi c-27"></text>
							<text class="fs-32 c-3c">字体大小</text>
						</view>
						<slider style="flex:1" :value="classTmp.durSize" @change="sliderDurSize" @changing="sliderDurSize" min="0" max="50" show-value />
					</view>
				</view>

				<view class="dp-f fd-r jc-sb ai-c c-e0 mt-15">
					<button type="primary" @click="submitUpdateClass" v-show="showPop == 1">修改</button>
					<button type="primary" @click="submitAddClass" v-show="showPop == 2">增加</button>
					<button type="default" @click="cancelCreateProj">取消</button>
					<button type="default" @click="copyProj">复制</button>
					<button type="default" @click="pasteProj">黏贴</button>
					<button type="warn" @click="onDeleteCurrClass" v-show="showPop == 1">删除</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
// import uniTag from '@/components/uni-tag/uni-tag.vue';
// import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
// import uniTransition from '@/components/uni-transition/uni-transition.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
// import colorPicker from '@/components/color-picker.vue';

var util = require('@/utils/util.js');
// let wsAPI = require('@/common/wxApi.js');
let wxapi = require('@/common/wx.js');
let {formatTime, dateUtil} = require('@/utils/DateUtil.js');

export default {
	components: {
		// uniTag,
		// uniDrawer,
		uniPopup,
		// uniTransition,
		uniSegmentedControl,
		uniSection
	},
	data() {
		return {
			formatTime: formatTime,
			// date: {
			// 	'currentDate': '',
			// 	'daysInThisMonth': -1,
			// 	'firstDayOfWeek': -1,
			// 	'weekofYear': -1,
			// 	'week':[]
			// },
			classStyleTabIndex: 0,
			colorSetsTabIndex: 0,
			weekTabItems: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			classStyleTabItems: ['课程', '名称', '图标', '时间'],
			colorSetsTabItems: ['1c-69bc38', '1-adcd83'],
			cfgChanged: false, //设置页面发生变化
			showColorPicker: 0,
			showIconPicker: false,
			e: [],
			key: 'KEY_PROJECT',
			durMax: 240,
			drawerMode: 0, //0:drawer close; 1: createClass drawer; 2: updateClass drawer;
			classDefault: {
				weekday: 0,
				weekdayPrevious: 0,
				icon: 'icon-youyong4',
				name: '语文',
				time: 480,
				dur: 60,
				margintop: 100,
				height: 100,

				classBgc: 'transparent', //课程背景颜色
				classBgcGradient: 'transparent', //课程背景渐变色
				classBorderShow: false, //是否显示课程外框
				classBorderColor: '#123456', //课程外框颜色
				classBorderRadio: 20, //课程边框弧度
				classBorderShowShadow: true,

				showName: false, //是否显示课程名称
				textColor: '#FFFFFF', //名称颜色
				textBgc: 'transparent', //名称背景颜色
				textSize: 20, //文字尺寸
				textShowBorder: false, //是否显示文字边框
				textBorderColor: '#F44336', //文字边框颜色
				textBorderRadio: 20, //文字边框弧度

				showIcon: true, //是否显示图标
				iconColor: '#ff0000', //图标颜色
				iconBgc: 'transparent', //图标背景颜色
				iconSize: 40, //图标尺寸
				iconShowBorder: false, //是否显示图标边框
				iconBorderCorlor: '#0000ff', //图标边框颜色
				iconBorderRadio: 20, //图标边框颜色

				showStime: false,
				stimeColor: '#ff0000',
				stimeBgc: '#00ff00',
				stimeSize: 10,
				stimeShowBorder: false,
				stimeBorderColor: '#00ff00',
				showDur: false,
				durColor: '#0000ff',
				durBgc: '#00ff00',
				durSize: 10,
				durShowBorder: false,
				durBorderColor: '#00ff00'
			},
			classCopied: {},
			classTmp: {
				weekday: 0,
				weekdayPrevious: 0,
				icon: 'icon-youyong4',
				name: '语文',
				time: 480,
				dur: 60,
				margintop: 100,
				height: 100,

				classBgc: 'transparent', //课程背景颜色
				classBgcGradient: 'transparent', //课程背景渐变色
				classBorderShow: false, //是否显示课程外框
				classBorderColor: '#123456', //课程外框颜色
				classBorderRadio: 20, //课程边框弧度
				classBorderShowShadow: true,

				showName: false, //是否显示课程名称
				textColor: '#FFFFFF', //名称颜色
				textBgc: 'transparent', //名称背景颜色
				textSize: 20, //文字尺寸
				textShowBorder: false, //是否显示文字边框
				textBorderColor: '#F44336', //文字边框颜色
				textBorderRadio: 20, //文字边框弧度

				showIcon: true, //是否显示图标
				iconColor: '#ff0000', //图标颜色
				iconBgc: 'transparent', //图标背景颜色
				iconSize: 40, //图标尺寸
				iconShowBorder: false, //是否显示图标边框
				iconBorderCorlor: '#0000ff', //图标边框颜色
				iconBorderRadio: 20, //图标边框颜色

				showStime: false,
				stimeColor: '#ff0000',
				stimeBgc: '#00ff00',
				stimeSize: 10,
				stimeShowBorder: false,
				stimeBorderColor: '#00ff00',
				showDur: false,
				durColor: '#0000ff',
				durBgc: '#00ff00',
				durSize: 10,
				durShowBorder: false,
				durBorderColor: '#00ff00'
			},
			x: 0,
			y: 0,
			systemInfo: [],
			util: util,
			timestamp: 'abc',
			showPop: 0
		};
	},
	methods: {
		...mapMutations(['increaseCount', 'increaseCountBy', 'decreaseCount', 'updateProjs', 'addClass', 'updateClass', 'deleteClass']),
		cpGetClassBgc(c) {
			this.classTmp.classBgc = c;
		},
		cpGetClassBgcGradient(c) {
			this.classTmp.classBgcGradient = c;
		},
		cpGetClassBorderColor(c) {
			this.classTmp.classBorderColor = c;
		},
		cpGetTextColor(c) {
			this.classTmp.textColor = c;
		},
		cpGetTextBgc(c) {
			this.classTmp.textBgc = c;
		},
		cpGetTextBorderColor(c) {
			this.classTmp.textBorderColor = c;
		},
		cpGetIconColor(c) {
			this.classTmp.iconColor = c;
		},
		cpGetIconBgc(c) {
			this.classTmp.iconBgc = c;
		},
		cpGetIconBorderColor(c) {
			this.classTmp.iconBorderCorlor = c;
		},
		cpGetStimeColor(c) {
			this.classTmp.stimeColor = c;
		},
		cpGetStimeBgc(c) {
			this.classTmp.stimeBgc = c;
		},
		cpGetStimeBorderColor(c) {
			this.classTmp.stimeBorderColor = c;
		},
		cpGetDurColor(c) {
			this.classTmp.durColor = c;
		},
		cpGetDurBgc(c) {
			this.classTmp.durBgc = c;
		},
		cpGetDurBorderColor(c) {
			this.classTmp.durBorderColor = c;
		},
		ipGetIcon(icon) {
			console.log('ipGetIcon' + icon);
			this.classTmp.icon = icon;
		},
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
			this.showPop = 2;
			this.classTmp = this.classDefault;
			this.classTmp.weekday = e.currentTarget.dataset.x;
			this.classTmp.weekdayPrevious = e.currentTarget.dataset.x;
			// this.weekTabIndex = e.currentTarget.dataset.x;
			this.$refs.popupCfg.open();
		},
		onEditClass(e) {
			// this.weekTabIndex = e.currentTarget.dataset.x;
			this.showPop = 1;
			console.log('onEditClass');
			this.classTmp = e.currentTarget.dataset.class;
			this.x = e.currentTarget.dataset.x;
			this.y = e.currentTarget.dataset.y;
			this.$refs.popupCfg.open();
			// this.e = e;
		},
		onChangeClassStyleTabItem(e) {
			if (this.classStyleTabIndex !== e.currentIndex) {
				this.classStyleTabIndex = e.currentIndex;
			}
		},
		onChangeWeekTabItem(e) {
			if (this.weekTabIndex !== e.currentIndex) {
				this.weekTabIndex = e.currentIndex;
				this.classTmp.weekdayPrevious = this.classTmp.weekday;
				this.classTmp.weekday = e.currentIndex;
			}
		},
		submitUpdateClass: function() {
			console.log('submitUpdateClass: ' + this.classTmp.showName);
			this.$refs.popupCfg.close();			
			this.classTmp.height = this.classTmp.dur * this.projs.rpx;
			this.updateClass({ classTmp: this.classTmp, x: this.x, y: this.y });
			this.updateProjs();
		},
		submitAddClass: function() {
			console.log('submitAddClass');
			this.$refs.popupCfg.close();
			let newClassStart = this.classTmp.time;
			let newClassEnd = this.classTmp.time + this.classTmp.dur;
			try {
				this.projs.days[this.classTmp.weekday].classes.forEach(function(i1, i) {
					let oriClassStart = i1.time;
					let oriClassEnd = i1.time + i1.dur;
					console.log('oriClassStart:' + oriClassStart + ' oriClassEnd' + oriClassEnd);
					if ((newClassStart >= oriClassStart && newClassStart < oriClassEnd) || (newClassEnd > oriClassStart && newClassEnd <= oriClassEnd)) {
						console.log('returned...1');
						throw 'jump out here';
						console.log('returned...2');
					}
					console.log('returned...3');
				});
			} catch (e) {
				console.log(JSON.stringify(e));
				uni.showToast({
					title: '时间重复了哦，请重新选择时间',
					mask: false,
					duration: 1000,
					icon: 'none'
				});
				console.log('returned...5');
				return;
			}
			console.log('returned...4');
			this.classTmp.height = this.classTmp.dur * this.projs.rpx;

			this.addClass(this.classTmp);
			this.updateProjs();
		},
		cancelCreateProj: function() {
			this.$refs.popupCfg.close();
		},
		copyProj() {
			this.classCopied = this.classTmp;
		},
		pasteProj() {
			let day = this.classTmp.weekday;
			this.classTmp = this.classCopied;
			this.classTmp.weekday = day;
			this.classTmp.weekdayPrevious = day;
		},
		onDeleteCurrClass: function() {
			console.log('onDeleteCurrClass');
			this.$refs.popupCfg.close();
			// console.log(JSON.stringify(this.classTmp));
			this.deleteClass({ classTmp: this.classTmp, x: this.x, y: this.y });
			this.updateProjs();
		},
		sliderClassTimeChange: function(e) {
			this.classTmp.time = e.detail.value;
		},
		sliderClassDurChange: function(e) {
			this.classTmp.dur = e.detail.value;
		},
		sliderBorderRadio: function(e) {
			this.classTmp.borderRadio = e.detail.value;
		},
		sliderTextSize: function(e) {
			this.classTmp.textSize = e.detail.value;
		},
		sliderTextBorderRadio: function(e) {
			this.classTmp.textBorderRadio = e.detail.value;
		},
		sliderIconSize: function(e) {
			this.classTmp.iconSize = e.detail.value;
		},
		sliderIconBorderRadio: function(e) {
			this.classTmp.iconBorderRadio = e.detail.value;
		},
		sliderStimeSize: function(e) {
			this.classTmp.stimeSize = e.detail.value;
		},
		sliderDurSize: function(e) {
			this.classTmp.durSize = e.detail.value;
		},
		onUpdateClassName: function(e) {
			this.classTmp.name = e.detail.value;
		},
		onUpdateStartTime: function(e) {
			this.classTmp.time = e.detail.value;
		},
		isColHilight: function(day) {
			
			let show =false;
			if (this.date.weekday - 1 == day && this.cfg.hilightCurrentDay) show = true;
			else show = false;
			// console.log('isColHilight.day'+ day + ' show:' + show);
			return show;
		},
		transChange: function() {},
		onSelectIcon: function(e) {
			this.classTmp.icon = e.currentTarget.dataset.icon;
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
		test1: function(aa) {
			return aa;
		},
		test2: function() {
			return 'helloworld';
		},
		initTable: function() {
			console.log('initTable');
			this.$uni(this.test2)().then(res => {
				console.log('test2 return:' + JSON.stringify(res));
			});

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
		},
		isEmptyObject(obj) {
			for (var key in obj) {
				return false; //返回false，不为空对象
			}
			return true; //返回true，为空对象
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
		...mapState(['cfg', 'colors', 'icons', 'colorSets', 'colorSetNames','sysInfo', 'date'])
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
		//获取当前日期，1：星期一。。。
		let date = {};
		let d = new Date();
		date.currentDate = util.getTime(0);
		date.today = d.getDay();
		if(date.today == 0)
			date.today = 6;		
		date.year = d.getFullYear();
		date.month = d.getMonth();
		date.year = d.getFullYear();
		date.daysInThisMonth = util.getThisMonthDays(date.year, date.month);
		date.firstDayOfWeek = util.getFirstDayOfWeek(date.year, date.month);
		date.weekofYear = util.getWeekOfYear();
		date.week = util.getCurrentWeek().week;
		date.weekday = util.getCurrentWeek().weekday;
		console.log('date:' + JSON.stringify(date));
		this.$store.commit('setDate', date);

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
		//this.loadData();
		// this.getStorage();
		this.updateProjs();
	},
	created() {
		console.log('created');
	},
	//监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
	onReady() {
		console.log('jellyTable onReady');
		this.initTable();
	},
	onShow() {
		console.log('jellyTable onShow');
		// this.initTable();
	}
};
</script>

<style lang="scss">
@import '../../common/vuecolors.scss';
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
	// box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
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
	color: #757575;
	font-size: 13px;
	position: relative;
	// text-align: left;
	// justify-content: center;
	// background-clip: border-box;
	// flex-flow: column wrap;
	// overflow: hidden;

	.item-name {
		position: absolute;
		top: 0;
		font-size: 13px;
		color: #ffffff;
		// background: #b73615;
		//box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.5);
		border-radius: 5rpx;
	}
	.item-name:before {
		content: '\e637';
	}
	.item-time {
		// position: absolute;
		bottom: 1px;
		left: 1px;
	}
	.item-dur {
		// position: absolute;
		bottom: 1px;
		right: 1px;
	}
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
	// height: 100%;
	// flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	// z-index: -99;
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
	// flex-direction: row;
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
	// border: 1px solid $blue-base;
	border-radius: 40%;
	// background: #98FB98;
}

.switch-outline::after {
	content: '\e611';
	color: #0066cc;
}
.switch-outline::before {
	content: '\e611';
}
.switch-class::after {
	content: '\e637';
	color: #0066cc;
}
.switch-class::before {
	content: '\e637';
}
.switch-icon::after {
	content: '\e60d';
	color: #0066cc;
}
.switch-icon::before {
	content: '\e60a';
}
.switch-time::after {
	content: '\e606';
	color: #0066cc;
}
.switch-time::before {
	content: '\e606';
}
.switch-timeLen::after {
	content: '\e747';
	color: #0066cc;
}
.switch-timeLen::before {
	content: '\e747';
}
.item-class {
	display: flex;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}
</style>
