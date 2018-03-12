// 解构赋值
// 解构赋值的分类  数组解构赋值  对象解构赋值  字符串解构赋值  布尔值解构赋值  函数参宿解构赋值 数值解构赋值


{
  // 数值解构赋值
  let a,b,c;
  [a, b] = [1, 2];

  console.log(a, b);
}

{
  let a,b,c;

  [a, b, ...c] = [1, 2, 3, 4, 5, 6];

  console.log(a, b, c);
}




{
  // 对象解构赋值
  let a,b;
  ({a, b}={a:1, b:2})
  console.log(a, b);
}


{
  // 默认值
  let a,b,c;

  [a, b, c=3] = [1, 2];

  console.log(a, b, c);
}

{
  let a = 1;
  let b = 2;

// 变量交换
  [a, b] = [b, a];

  console.log(a, b);
}

{
  function f(){
    return [1, 2];
  }

  let a,b;

  [a,b] = f();

  console.log(a, b);
}

{
  function f(){
    return [1,2,3,4,5];
  }

  let a,b,c;

  [a,,b,c]=f();

  console.log(a,b,c);
}


{
  function f(){
    return [1,2,3,4,5];
  }

  let a,b,c;

  [a,...b]=f();

  console.log(a,b);
}

{
  let o = {a:1, b:2};

  let {a, b} = o;

  console.log(a, b);
}

{
  let {a=1, b=2} = {a:7};

  console.log(a, b);
}

{
  let data = {
    title:123,
    test:[
      {title:456, des:'desc'}
    ]
  }

  let {title:title1, test:[{title:title2}]} = data;

  console.log(title1, title2);
}
