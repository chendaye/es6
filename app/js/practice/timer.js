class Timer{
  countDown(end, update, handle){
    // 当前时间
    const now = new Date().getTime();
    // 自身引用
    const self = this;

    if(now - end){
      // 超过截止时间
      handle.call(self);
    }else{
      // 剩余时间
      let left_time = end - now;

      // 一天是多少毫秒
      const px_d = 24 * 60 * 60 * 1000;

      // 一小时是多少毫秒
      const px_h = 60 * 60 * 1000;

      // 一分钟是多少毫秒
      const px_m = 60 * 1000;

      // 一秒钟是多少毫秒
      const ps_s = 1000;

      // 剩余天数
      let d = Math.floor(left_time / px_d);  //取整
      left_time = left_time - d * px_d;
      // 剩余小时
      let h = Math.floor(left_time / px_h);
      left_time = left_time - h * px_h;
      // 剩余分钟
      let m = Math.floor(left_time / px_m);
      left_time = left_time - m * px_m;
      // 剩余秒
      let s = Math.floor(left_time / px_s);

      let time = [];

      if(d > 0){
        time.push(`<em>{d}</em>天`)
      }

      if(time.length > 0 || h > 0){
        time.push(`<em>{h}</em>时`)
      }

      if(time.length > 0 || m > 0){
        time.push(`<em>{m}</em>分`)
      }

      if(time.length > 0 || s > 0){
        time.push(`<em>{s}</em>秒`)
      }

      // 剩余时间保存在属性中
      self.left_time = time.join(' ');
      // 更新当前
      update.call(self, self.left_time);

      // 轮询 不断倒计时
      setTimeout(function(){
        self.countDown(end, update, handle);
      }, 1000);


    }
  }
}

export default Timer
