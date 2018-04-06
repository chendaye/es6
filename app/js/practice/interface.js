// 引入 jquery 库  因为封装了很多方法 且最流行
import $ from 'jquery';

class Interface{

  /**
   * [getOmit description]
   * @param  {[type]} issue [遗漏数字]
   * @return {[type]}       [promise 对象 用于执行异步操作]
   */
  getOmit(issue){
    // 当前类的引用
    let self = this;
    // 用promise 来实现异步操作
    return new Promise((resolve, reject) => {
      // ajax 是 jquery库的一个方法  方法的参数是一个对象
      $.ajax({
        url:'/get/omit',
        data:{
          issue:issue
        },
        dataType:'json',

        // 成功
        success:function(res){
          // 保存拿到的遗漏数据
          self.setOmit(res.data);
          // 成功时执行异步操作
          resolve(self, res);
        },
        // 失败
        error:function(err){
          // 不成功执行 reject
          reject.call(err);
        }
      });
    });
  }

  /**
   * [getOpenCode 获取开奖号码
   * @param  {[type]} issue [description]
   * @return {[type]}       [description]
   */
  getOpenCode(issue){
    // 当前类的引用
    let self = this;

    return new Promise((resolve, reject) => {
      $.ajax({
        url:'/get/opencode',
        data:{
          issue:issue
        },
        dataType:'json',

        success:function(res){
          self.setOpenCode(res.data);

          resolve.call(self, res);
        },

        error:function(err){
          reject.call(err);
        }
      });
    });
  }

  /**
   * [getStatus 获取当前状态]
   * @param  {[type]} issue [description]
   * @return {[type]}       [description]
   */
  getStatus(issue){
    // 当前类的引用
    let self = this;

    return new Promise((resolve, reject) => {
      $.ajax({
        url:'/get/state',
        data:{
          issue:issue
        },
        dataType:'json',

        success:function(res){
          resolve.call(self, res);
        },

        error:function(err){
          reject.call(err);
        }
      });
    });
  }
}

  // 导出接口
  export default Interface
