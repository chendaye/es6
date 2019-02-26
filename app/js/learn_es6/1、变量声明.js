
// es6 默认开启严格模式

// let 是快作用域 局部变量
// var 是全局作用域  全局变量
function test(){

  // let 不能重复定义一个变量
  for(let i = 1; i <= 6; i ++){
    console.log(i);
  }

// 报错  i 没有定义
  // console.log(i);

  for(var j = 1; j <= 6; j ++){
    console.log(j);
  }
// 不报错
  console.log(j);
}

test();



function test2(){
  // 常量声明时必须赋值
  const PI = 3.1415926;  // 常量不可变

// k 实际上是指向对象的指针    k不变  但是对象本身是可以变的
  const k = {
    a:1
  };

  console.log(PI, k);
}

test2();
