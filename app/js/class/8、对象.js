{
  let m = 1;
  let n = 2;

// 两种写法等同
  let es5 = {
    m:m,
    n:n
  };

  let es6 = {
    m,
    n
  };

  console.log(es5, es6);

  let es5_m = {
    fun:function(){
      console.log('es5_m');
    }
  };

  let es6_m = {
    fun(){
      console.log('es6_m');
    }
  };

  es5_m.fun();
  es6_m.fun();
}


{
  let a = 1;
  let b = 2;
  let es5 = {
    a:a,
    b:b
  };

// es6 中属性的键可以是表达式
  let es6 = {
    [a]:777
  };

  console.log(es5, es6);
}


{
  // 新增api
  // 判断是否相等
  console.log(Object.is('aaa', 'aaa'), 'aaa' === 'aaa');
  console.log(Object.is([], []), [] === []);


  // 键和值的遍历
  let obj = {
    a:1,
    b:7
  };

  for(let [k, v] of Object.entries(obj)){
    console.log(k, v);
  }
}
