                wx.cloud.init()                              //调用前需先调用init
                wx.cloud.callFunction({
                    name: 'check',
                    data: {
                        "content": this.contents.join()
                    }
                }).then(res => {
                    console.log(res.result)
                    if (res.result.code == 300) {
                        uni.showModal({
                            title: "温馨提示",
                            content: "你所输入的内容可能含有违法违规内容，不支持进行下一步操作"
                        })
                        return
                    } else {
                        ... // 你要进行的操作
                    }
                })