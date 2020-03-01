<template>
	<view class="mask" @tap="tapMask" :style="{backgroundColor:value?`rgba(0,0,0,${opacity})`:'rgba(0,0,0,0)'}" :class="!value?'':'mask-show'" @touchmove.stop.prevent>
			<view class="share-view" @tap.stop>
				<view v-for="(item,index) in mData" :key="index" class="share-box" @tap="tapConfirm(item)">
					<image class="image" :src="item.icon" v-if="item.icon"></image>{{item.title}}
				</view>
			</view>
	</view>
</template>

<script>
	import TabMask from './tabMask.js'
	export default{
		props:{
			type:{
				type:String,
				default:'default'
			},
			value:{
				type:Boolean,
				default:false
			},
			maskEnable:{
				type:Boolean,
				default:true
			},
			mData:{
				type:[Object, Array],
				default:()=>{}
			},
			tabbarHeight:{
				type:Number,
				default:null 
			},
			navHeight:{
				type:Number,
				default:null
			},
			opacity:{
				type:Number,
				default:0.6
			},
		},
		data(){
			return{
				tabMask:null
			}
		},
		mounted() {

			//#ifdef APP-PLUS
			this.tabMask = new TabMask({
				tabbarHeight:this.tabbarHeight,
				navHeight:this.navHeight,
				opacity:this.opacity,
				fn: this.tapMask
			})
			//#endif
			
		},
		methods:{
			checkboxChange(e){
				var items = this.mData,
				values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
				    const item = items[i]
				    if(values.includes(item.title)){
				        this.$set(item,'flag',true)
				    }else{
                        this.$set(item,'flag',false)
                    }
				}
				
			},
			inputConfirm(){
				this.$emit('onConfirm',this.mData.content)
				this.$emit('input',false)
			},
			tapCancel(){
				this.$emit('cancel')
				this.$emit('input',false)
			},
			tapConfirm(item){
				this.$emit('onConfirm',item)
				this.$emit('input',false)
			},
			tapMask(){
				if(!this.maskEnable) return
				if(this.type == 'multiSelect'){
					this.$emit('onConfirm',this.mData)
				}else{
					this.$emit('cancel',this.mData)
				}
				
				this.$emit('input',false)

			}
		},
		watch:{
			value:{
				immediate:true,
				handler(newVal,oldVal){ 
					//#ifdef APP-PLUS
					if(newVal) {
						this.tabMask.show()
					}else{
						this.tabMask.hide()
					}
					//#endif
				}
			}
		}
	}
</script>

<style lang="scss">
	.mask{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 9999;
		transition: background 0.3s linear;
		display: flex;
		align-items: center;
		opacity: 0;
		visibility: hidden;
		justify-content: center;
		&.mask-show{
			visibility:visible;
			opacity: 1;
		}
		
	}
	.hover{
		background: #f2f2f2;
	}
	.default-view{
		width: 600rpx;
		font-weight: 400;
		font-size: 18px;
		background-color: #fff;
		border-radius: 6rpx;
		.title{
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.content{
			padding: 40rpx 48rpx;
			min-height: 40px;
			font-size: 15px;
			line-height: 1.4;
			color: #999;
			text-align: center;
		}
		.btn{
			height: 100rpx;
			display: flex;
			flex-direction: row;
			border-top:1px solid #ccc;
			.cancel{
				display: flex;
				flex: 1;
				justify-content: center;
				align-items: center;
				border-right:1px solid #ccc;
			}
			.confirm{
				display: flex;
				flex: 1;
				justify-content: center;
				align-items: center;
				color: rgb(0, 122, 255);
			}
		}
	}
	.select-view{
		width: 600rpx;
		background-color: #fff;
		border-radius: 6rpx;
		.select-box{
			height: 100rpx;
			padding: 20rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 0.5px solid #ddd;
			.select-content{
				color: #aaa;
				font-size: 12px;
			}
		}
		.image{
			display: inline-block;
			vertical-align: middle;
			width: 40rpx;
			height: 40rpx;
			margin-right: 20rpx;
		}
	}
	.select-view .select-box:last-child{
		border: none;
	}
	.notify-view{
		width: 600rpx;
		background-color: #fff;
		border-radius: 6rpx;
		.image{
			width: 600rpx;
			height: 150rpx;
		}
		.title{
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.content{
			padding: 40rpx 48rpx;
			min-height: 40px;
			font-size: 15px;
			line-height: 1.4;
			color: #999;
			text-align: center;
		}
		.cancel{
			height: 100rpx;
			display: flex;
			flex: 1;
			justify-content: center;
			align-items: center;
			border-top:1px solid #E7E7E7;
		}
	}
	.advert-view{
		overflow: hidden;
		
		display: flex;
		flex-direction: column;
		align-items: center;
		.confirm{
			width: 500rpx;
			height: 700rpx;
			border-radius: 6rpx;
		}
		.cancel{
			margin-top: 150rpx;
			width: 60rpx;
			height: 60rpx;
		}
	}
	.share-view{
		width: 600rpx;
		background-color: #fff;
		border-radius: 6rpx;
		padding: 20rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		font-size: 18px;
		.share-box{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 33.33%;
			padding: 40rpx 0;
		}
		.image{
			width: 80rpx;
			height: 80rpx;
			margin-bottom: 20rpx;
		}
	}
	.input-view{
		width: 600rpx;
		font-weight: 400;
		font-size: 18px;
		background-color: #fff;
		border-radius: 6rpx;
		.title{
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1px solid #ccc;
		}
		.content{
			padding: 40rpx 48rpx;
			min-height: 40px;
			font-size: 18px;
			
			text-align: left;
		}
		.input-box{
			display: flex;
			margin-bottom: 20rpx;
			.view{
				margin-right: 20rpx;
				min-width: 150rpx;
			}
			.input{
				
				font-size: 18px;
			}
		}
		.btn{
			height: 100rpx;
			display: flex;
			flex-direction: row;
			border-top:1px solid #ccc;
			.cancel{
				display: flex;
				flex: 1;
				justify-content: center;
				align-items: center;
				border-right:1px solid #ccc;
			}
			.confirm{
				display: flex;
				flex: 1;
				justify-content: center;
				align-items: center;
				color: rgb(0, 122, 255);
			}
		}
	}
	.word-break{
		word-wrap: break-word;
		word-break: break-all;
		white-space: pre-wrap;
	}
</style>
