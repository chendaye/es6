{
  // 函数默认值
  function test(x, y = 'word'){
    console.log(x, y);
  }

  test('hello');
  test('hello', 'fuck jun');
}


{
  // 作用域
  let var1 = 666;

  // let 在函数外面声明的变量 会被函数括号里声明的变量覆盖
  function test1(var1, tmp=var1){
    console.log(tmp);
  }

  test1(777);
}

{
  function test(...arg){
    for(let v of arg){
      console.log(v);
    }
  }

  test(1,2,'dsf');
}

{
  // 数组转成离散值
  console.log(...[1,2,3]);
  console.log('aaa',...[1,2,3]);
}

{
  // 箭头函数
  let functioin_name = param => param - 5;  // 有参数的情形

  console.log(functioin_name(222));

  let function_name2 = () => 777;

  console.log(function_name2());  // 没有参数的情形
}

{
  // 尾调用
function fun1(x){
  console.log(x);
}

function fun2(x){
  return fun1(x);
}

fun2(777);

}
