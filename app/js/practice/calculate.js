class Calculate{

  /**
   * [计算注数]
   * @param  {[type]} active    [当前选中的号码]
   * @param  {[type]} play_type [当前的玩法标识]
   * @return {[type]}           [当前玩法选中的注数]
   */
  computeCount(active, play_type){
    let count = 0;
    // 是否存在这种玩法
    const exist = this.play_list.has(play_type);

    // 创建一个长度为 active 的数组  并且给元素填充0
    const arr = new Array(active).fill('0');

    // 玩法是以 R开头
    if(exist && play_type.at(0) == 'r'){
      // 如果玩法存在 计算注数
      count = Calculate.combine(arr, play_type.split('')[1]).length;
    }

    // 返回注数
    return count;
  }



   /**
     * [computeBonus 奖金范围预测]
     * @param  {number} active    [当前选中的号码]
     * @param  {string} play_name [当前的玩法标识]
     * @return {array}           [奖金范围]
     */
    computeBonus(active,play_name){
      const play=play_name.split('');
      const self=this;
      let arr=new Array(play[1]*1).fill(0);
      let min,max;
      if(play[0]==='r'){
        let min_active=5-(11-active);
        if(min_active>0){
          if(min_active-play[1]>=0){
            arr=new Array(min_active).fill(0);
            min=Calculate.combine(arr,play[1]).length;
          }else{
            if(play[1]-5>0&&active-play[1]>=0){
              arr=new Array(active-5).fill(0);
              min=Calculate.combine(arr,play[1]-5).length;
            }else{
              min=active-play[1]>-1?1:0
            }
          }
        }else{
          min=active-play[1]>-1?1:0;
        }

        let max_active=Math.min(active,5);
        if(play[1]-5>0){
          if(active-play[1]>=0){
            arr=new Array(active-5).fill(0);
            max=Calculate.combine(arr,play[1]-5).length;
          }else{
            max=0;
          }
        }else if(play[1]-5<0){
          arr=new Array(Math.min(active,5)).fill(0);
          max=Calculate.combine(arr,play[1]).length;
        }else{
          max=1;
        }
      }
      return [min,max].map(item=>item*self.play_list.get(play_name).bonus)
    }


  /**
   * [组合运算注数]
   * @param  {[type]} arr  [参与组合运算的数组]
   * @param  {[type]} size [组合运算的基数]
   * @return {[type]}      [注数]
   */
  static combine(arr, size){
    let allResult = [];
    // 递归
    (function f(arr, size, result){
      // 数组的长度
      let arrLen = arr.length;

      // 如果 size 大于 数组长度 递归结束
      if(size > arrLen){
        return;
      }

      if(size === arrLen){
        // 递归结束
        allResult.push([].concat(arr, result));
      }else{
        // 正常递归
        for(let i = 0; i < arrLen; i++){
          // 上一轮结果
          let newResult = [].concat(result);

          newResult.push(arr[i]);

          if(size === 1){
            // 保存结果
            allResult.push(newResult);
          }else{

            let newArr = [].concat(arr);
            // 取数组的子集
            newArr.splice(0, i + 1);
            // 递归
            f(newArr, size - 1, newResult);
          }
        }
      }
    })(arr, size, [])   //对应 f 的三个参数

    return allResult;
  }

}


export default Calculate
