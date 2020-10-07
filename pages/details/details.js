// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0
  },
  loadArticle(){
    let id=this.data.id
    let url="http://101.132.136.165:7788/article/findById?id="+id;
    let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJNUT09Iiwic3ViIjoiYWRtaW4xIiwiaXNzIjoiMDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjYiLCJpYXQiOjE2MDIwNjEzNzgsImF1ZCI6InJlc3RhcGl1c2VyIiwiZXhwIjoxNjAyMjM0MTc4LCJuYmYiOjE2MDIwNjEzNzh9.7k221mNPGASnTpdd99PQJkNkMMlSZ07qZmdyvew7A_8"
    wx.request({
      url,
      method:"GET",
        header:{//携带token
        Authorization:token
      },
      success:(resp)=>{
        this.setData({
          articles:resp.data.data
        })
      }
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   * 获取参数
   */
  onLoad: function (options) {
    // console.log(options)
    let id=options.id;
    this.setData({
      id
    })
    this.loadArticle();
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