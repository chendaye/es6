{
  let array = [1,2,3];

  // 数组自带 iterator 接口
  let map = array[Symbol.iterator]();

  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}


{
  // 自己实现 iterator 接口
  let obj = {
    start:[1,2,3],
    end:[7,8,9],

    [Symbol.iterator](){
      let self = this;
      let index = 0;
      let array = self.start.concat(self.end);
      let len = array.length;

      return {

        next(){
          if(index < len){
            return {
              value:array[index++],
              done:false
            }
          }else{
            return {
              value:array[index++],
              done:true
            }
          }
        }

      }

    }
  }

  for(let v of obj){
    console.log(v);
  }
}


{
  // for of  就是用 iterator 接口来实现的  所有要用for of 循环 必须先实现iterator 接口
  let array = [1,2,3];

  for(let val of array){
    console.log(val);
  }
}
