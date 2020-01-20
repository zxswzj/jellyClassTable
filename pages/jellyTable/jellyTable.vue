<template>
    <view>
        <view class="uni-flex uni-row">
            <view class="uni-flex uni-column devide5 colframe" :class="[{'light':i%2 != 1},{'dark':i%2 != 0}]" v-for="(item1, i) in projs.days"
                :key="i" @longpress.stop="toggle('right')">
                <view class="colframe" :class="[{'dark':j%2 != 1},{'light':j%2 != 0}]" v-for="(item2, j) in item1.classes"
                    :key="j" :style="[{ 'margin-top': item2.margintop + 'px' },{'height': item2.height + 'px' }]" @longpress.stop="onEditClass" id="class"
                    :data-class="item2" :data-x="i" :data-y="j" >
                    <icon :type="item2.icon" size="23px" v-show="item2.displayMode >= 3"/>
                    <uni-tag circle inverted class="block" type="primary" :text="item2.name" v-show="item2.displayMode >= 1"/>
                    <uni-tag class="block" inverted type="success" :text="formatDate(item2.time)" v-show="item2.displayMode >= 2"/>
                    <uni-tag class="block" type="success" :text="formatDate(item2.dur)" v-show="item2.displayMode >= 4"/>
                </view>
            </view>
        </view>
        <!-- <wrap title="弹出位置"> -->
        <van-button @click="toggleRightPopup">右侧弹出</van-button>
        <!-- <van-popup :show="show.right" position="right" custom-class="right" @close="toggleRightPopup"> -->
        <uni-drawer :visible="show.right" mode="right" @close="toggleRightPopup">
            <view class="uni-form-item uni-column">
                <view class="title">课程</view>
                <input class="uni-input" @input="onUpdateClassName" :placeholder="currentClass.name" />
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">日期</view>
                <radio-group name="week">
                    <label @click="onChangeWeekday('monday')">
                        <radio value="monday" :checked="currentClass.weekday == 'monday'" />
                        <text>星期一</text>
                    </label>
                    <label @click="onChangeWeekday('tuesday')">
                        <radio value="tuesday" :checked="currentClass.weekday == 'tuesday'" />
                        <text>星期二</text>
                    </label>
                    <label @click="onChangeWeekday('wednesday')">
                        <radio value="wednesday" :checked="currentClass.weekday == 'wednesday'" />
                        <text>星期三</text>
                    </label>
                    <label @click="onChangeWeekday('thursday')">
                        <radio value="thursday" :checked="currentClass.weekday == 'thursday'" />
                        <text>星期四</text>
                    </label>
                    <label @click="onChangeWeekday('friday')">
                        <radio value="friday" :checked="currentClass.weekday == 'friday'" />
                        <text>星期五</text>
                    </label>
                    <label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('saterday')">
                        <radio value="saterday" :checked="currentClass.weekday == 'saterday'" />
                        <text>星期六</text>
                    </label>
                    <label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('sunday')">
                        <radio value="sunday" :checked="currentClass.weekday == 'sunday'" />
                        <text>星期日</text>
                    </label>
                </radio-group>
            </view>
            <view class="uni-form-item uni-column">
                <view class="uni-list">
                    <view class="uni-list-cell">
                        <view class="uni-list-cell-left">当前选择</view>
                        <view class="uni-list-cell-db">
                            <picker mode="time" :value="formatDate(currentClass.time)" start="09:01" end="23:59"
                                @change="bindTimeChange">
                                <view class="uni-input">{{ formatDate(currentClass.time) }}</view>
                            </picker>
                        </view>
                    </view>
                </view>
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">课时长度（分钟）</view>
                <slider :value="currentClass.dur" max="240" name="slider" show-value></slider>
            </view>
            <view class="uni-btn-v">
                <button type="primary" @click="submitCreateProj">submit</button>
                <button type="primary" @click="cancelCreateProj">cancel</button>
            </view>
        </uni-drawer>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex';

    export default {
        components: {
            hTimePicker
        },
        mounted: {},
        data() {
            return {
                msg: 'abc',
                systemInfo: {},
                rpx: 0,
                selected: 'Home',
                menuItems: ['Home', 'About', 'Contact'],
                // projs: [],
                // goodsList: [],
                score: [{
                        name: 'english',
                        score: 70
                    },
                    {
                        name: 'math',
                        score: 80
                    },
                    {
                        name: 'chinese',
                        score: 90
                    }
                ],
                show: {
                    middle: false,
                    top: false,
                    bottom: false,
                    right: false,
                    right2: false
                },
                weekday: 'monday',
                classname: '语文',
                classStartTime: 720,
                classDur: 45,
                key: 'KEY_PROJECT',
                e: {},
                currentClass: {
                    weekday: "monday",
                    name: "语文",
                    time: 480,
                    dur: 45,
                    icon: "success",
                    margintop: 0
                }
            };
        },
        methods: {
            onChange(event) {
                console.log('onChange');
                this.increaseCountBy(5);
            },
            onSubmit() {
                // wx.showToast({
                //     title: '点击结算',
                //     icon: 'none'
                // });
            },
            getSystemInfo: function() {
                uni.getSystemInfo({
                    success: res => {
                        this.systemInfo = res;
                    }
                });
            },
            async loadData() {
                console.log('loadData');
                // this.projs = await this.$api.json('projs');
                this.goodsList = await this.$api.json('goodsList');
            },
            // increaseCount() {
            //     // store.commit('increaseCount', 3);
            //     this.increaseCount();
            // },
            // decreaseCount() {
            //     // store.commit('decreaseCount', 2);
            //     this.decreaseCount();
            // },
            ...mapMutations(['increaseCount', 'increaseCountBy', 'decreaseCount', 'updateProjs', 'addClass']),
            toggleRightPopup() {
                this.toggle('right');
            },
            toggle(type) {
                console.log(type);
                this.show[type] = !this.show[type];
            },
            formSubmit: function(e) {
                console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
                var formdata = e.detail.value;
                uni.showModal({
                    content: '表单数据内容：' + JSON.stringify(formdata),
                    showCancel: false
                });
            },
            formReset: function(e) {
                console.log('清空数据');
            },
            submitCreateProj: function() {
                console.log('submitCreateProj');
                this.addClass({
                    weekday: this.weekday,
                    name: this.classname,
                    time: this.classStartTime,
                    dur: this.classDur
                });
                this.cancelCreateProj();
            },
            cancelCreateProj: function() {
                this.show['right'] = !this.show['right'];
            },
            onChangeWeekday: function(day) {
                this.weekday = day;
            },
            bindTimeChange: function(e) {
                this.classStartTime = e.target.value;
            },
            onUpdateClassName: function(e) {
                this.classname = e.detail.value;
            },
            getStorage: function() {
                var key = this.key;
                //     data = this.projs;
                if (key.length === 0) {
                    uni.showModal({
                        title: '读取数据失败',
                        content: "key 不能为空",
                        showCancel: false
                    })
                } else {
                    uni.getStorage({
                        key: key,
                        success: (res) => {
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
                                content: "找不到 key 对应的数据",
                                showCancel: false
                            })
                        }
                    })
                }
            },
            setStorage: function() {
                var key = this.key
                var data = this.projs
                if (key.length === 0) {
                    uni.showModal({
                        title: '保存数据失败',
                        content: 'key 不能为空',
                        showCancel: false
                    })
                } else {
                    uni.setStorage({
                        key: key,
                        data: data,
                        success: (res) => {
                            uni.showModal({
                                title: '存储数据成功',
                                content: ' ',
                                showCancel: false
                            })
                        },
                        fail: () => {
                            uni.showModal({
                                title: '储存数据失败!',
                                showCancel: false
                            })
                        }
                    })
                }
            },
            clearStorage: function() {
                uni.clearStorageSync()
                this.key = '',
                    this.data = ''
                uni.showModal({
                    title: '清除数据成功',
                    content: ' ',
                    showCancel: false
                })
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
                if (s.length == 1)
                    s = '0' + s;
                return [h, s].join(':');
            },
            onEditClass(e) {
                console.log(JSON.stringify(e.currentTarget.dataset));
                this.e = e;
                this.currentClass = e.currentTarget.dataset.class;
                this.toggle('right');
            }
        },
        onLoad() {
            // 获取系统信息
            uni.getSystemInfo({
                success: res => {
                    this.systemInfo = res;
                    this.rpx = res.windowHeight / 600;
                }
            });
            //this.loadData();
            //this.getStorage();
            this.updateProjs(this.rpx);
            // this.h = uni.getSystemInfoSync().windowHeight;
            // this.w = uni.getSystemInfoSync().windowWidth;
            // uni.getSystemInfo({
            //     success(res) {
            //         console.log(res.brand) //手机牌子
            //         console.log(res.model) //手机型号
            //         console.log(res.screenWidth) //屏幕宽度
            //         console.log(res.screenHeight) //屏幕高度
            //         this.sysInfo = res
            //     }
            // });
        },
        computed: {
            // count() {
            //     return store.state.count;
            // },
            ...mapState({
                count: 'count',
            }),
            projs: {
                get: function() {
                    console.log('projs get')
                    return this.$store.state.projs
                },
                set: function(val) {
                    console.log('projs set')
                    this.$store.commit('setProjs', val)
                }
            },
            totalScore: function() {
                let total = 666;
                this.score.forEach(function(item) {
                    total += item.score;
                });
                console.log('totalScore:' + total);
                return total;
            },
            reversedMessage: function() {
                // `this` 指向 vm 实例
                console.log(this.msg);
                return this.msg
                    .split('')
                    .reverse()
                    .join('');
            }
        }
    };
</script>

<style lang="scss">
    $bgcolor: lightblue;
    $textcolor: darkblue;
    $fontsize: 18px;

    .flex-wrapper {
        width: 100%;
        height: 56px;
        margin-top: 8px;
    }

    .flex-demo {
        background-color: #ff0000;
        text-align: center;
        line-height: 32px;
        margin-left: 8px;
    }

    .flex-wrapper:first-child {
        margin-top: 0;
    }

    .flex-demo:first-child {
        margin-left: 0;
    }

    .card-goods {
        padding: 10px 0;
        background-color: #fff;
    }

    .card-goods__item {
        position: relative;
        background-color: #f0ad4e;
    }

    .card-goods__item .van-checkbox__label {
        width: 100%;
        height: auto;
        padding: 0 10px 0 15px;
        box-sizing: border-box;
    }

    .card-goods__item .van-checkbox__icon {
        top: 50%;
        left: 10px;
        z-index: 1;
        position: absolute;
        margin-top: -10px;
    }

    .card-goods__item .van-card__price {
        color: #f76260;
    }

    .colorred {
        color: #f76260;
    }

    .dark,
    .light {
        color: #fff;
        font-size: 13px;
        text-align: center;
        background-clip: border-box;
        // border: 2px solid #0ea391;
    }

    .dark {
        background-color: $textcolor;
    }

    .light {
        background-color: $bgcolor;
    }

    .margintop {
        margin-top: 100px;
    }

    .keepwidth {
        flex: 0 0 150px;
        width: 100px;
        height: 10px;
    }

    .text {
        margin: 15rpx 10rpx;
        padding: 0 20rpx;
        background-color: #ebebeb;
        height: 100%;
        line-height: 70rpx;
        text-align: center;
        color: #777;
        font-size: 26rpx;
    }

    .box {
        height: 100%;
    }

    .left {
        position: relative;
        float: left;
        width: 200px;
        height: 100%;
        padding: 50px 0;
        box-sizing: border-box;
        background: #39f;
    }

    .top {
        height: 50px;
        background: yellow;
    }

    .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: green;
    }

    .right {
        height: 100%;
        padding-left: 200px;
        background: #e5e5e5;
    }

    .colframe {
        border: 2px solid;
        border-radius: 20px;
    }
</style>
