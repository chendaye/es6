{
  // 声明独一无二的值
  let a = Symbol();
  let b = Symbol();

  console.log(a === b);

  // 指定一个配值
  let c = Symbol.for('ww');
  let d = Symbol.for('ww');
  let e = Symbol.for('rr');
  console.log(c);
  console.log(d);

  console.log(c === d); //true
  console.log(d ===e);  //false
}


{
  let k = Symbol.for('qwer');

  // 创建唯一值 避免属性名重复
  let obj = {
    [k]:132,
    qwer:777,
    df:798
  };

  console.log(obj);


  // for 取不到 Symbol 属性
  for(let [key,val] of Object.entries(obj)){
    console.log(key, val);
  }

  //只能取到 Symbol的值
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
  });

  // 两者都取到
  Reflect.ownKeys(obj).forEach(function(item){
    console.log(obj[item]);
  });
}
