// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //加载文章数据
  loadArticleData(){
    let url="http://101.132.136.165:7788/article/findAll"
    let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJNUT09Iiwic3ViIjoiYWRtaW4xIiwiaXNzIjoiMDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjYiLCJpYXQiOjE2MDIwNjEzNzgsImF1ZCI6InJlc3RhcGl1c2VyIiwiZXhwIjoxNjAyMjM0MTc4LCJuYmYiOjE2MDIwNjEzNzh9.7k221mNPGASnTpdd99PQJkNkMMlSZ07qZmdyvew7A_8"
    wx.request({
      url,
      method:"GET",
      header:{//携带token
        Authorization:token
      },
      success:(resp)=>{
        //将查询到的数据设置到data中
        this.setData({
          articles:resp.data.data
        })
        console.log(resp);
      }
    })
  },
  toDetailsHandle(event){
   
    let id=event.currentTarget.dataset.id;
     console.log(id)
     //弹框
    //  wx.showToast({
    //   title: 'id',
    // })
    //导航到详情页面(不关闭当前页面)
    wx.navigateTo({
      url: '/pages/details/details?id='+id,
      // events: events,
      // success: (result) => {
      //   console.log(result)
      // },
      // fail: (res) => {},
      // complete: (res) => {},
    })
    //重定向到某个页面(关闭当前页面)
    // wx.redirectTo({
    //   url: 'url',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      this.loadArticleData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})