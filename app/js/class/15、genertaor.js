{
  // genertaor 基本定义
  // 调用 next()  依次执行  yield 或者 return 后面的 语句
  let tell = function* (){
    yield 'a';
    yield 'b';
    return 'c';
  };

  let k=tell();

  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}


{
  // iterator  与 genertaor
  let obj = {};
  obj[Symbol.iterator] = function* (){
    yield 1;
    yield 2;
    yield 3;
  };

  for(let val of obj){
    console.log(val);
  }
}


{
  // 状态机
  let state  = function* (){
    // 无限循环
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  };

  let  status = state();

  // 不断输出 ABC 三种状态
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

//
// {
//   // 状态机
//   let state  = async function(){
//     // 无限循环
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   };
//
//   let  status = state();
//
//   // 不断输出 ABC 三种状态
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }



{
  // 抽奖实例
  let draw = function(count){
    // 具体的抽奖逻辑
    // 。。。。。

    // 显示剩余抽奖次数
    console.log(count);
  };

  // genertaor 函数
  let residue = function* (count){
    while(1){
      if(count > 0){
        // 抽奖次数-1
        count--;

        // 执行抽奖
        yield draw(count);
      }
    }
  };

  let start = residue(6);

  // 创建一个按钮
  let btn = document.createElement('button');
  btn.id = 'draw';
  btn.textContent = '抽奖';
  document.body.appendChild(btn);

  // 注册事件
  document.getElementById('draw').addEventListener('click', function(){
    // genertaor
    start.next();
  }, false);


}




{
  // 长轮询 实现

  // 模拟后端接口
  let ajax = function* (){
    yield new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve({code:200});
      }, 200);
    });
  };


 let pull = function(){
   // genertaor 实例
   let genertaor = ajax();

   // 返回Promise 实例
   let step = genertaor.next();
   // Promise 实例
   step.value.then(function(d){
     if(d.code != 200) {
       // 如果获取的不是想要的状态 继续请求接口
       setTimeout(function(){
         console.log('wait');
         pull();
       }, 2000);
     }else{
       console.log(d);
     }
   });
 };

 pull();
}
