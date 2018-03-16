{
  // 创建一个类型的数组
  let arr = Array.of(1,2,3,4,5);

  console.log(arr);
}


{
  let p = document.querySelectorAll('p');

  // 集合转义成数组
  let arr = Array.from(p);

  arr.forEach(function(item){
    console.log(item.textContent);
  });


  // 遍历
  console.log(Array.from([1,3,5], function(item){
    return item + 100;
  }));
}

{
  // 数组元素全部替换为7
  console.log([1, 'a', 'fff'].fill(7));

  // 指定替换的起始位置和 替换的长度
  console.log([1, 'a', 'fff'].fill(7,1, 2));
}


{
  // keys() values() 方法需要兼容 es7 要引入 babel-polyfill
  for(let key of [1, 'sd', 78].keys()){
    console.log('取键值',key);
  }

  for(let val of [1, 'sd', 78].values()){
    console.log('取值',val);
  }

  for(let [k, v] of [1, 'sd', 78].entries()){
    console.log('取键',k);
    console.log('取值',v);
  }

}



{
  // 替换 第一个参数  表示要替换的位置  后两个参数分别是要替换位置的起始和结尾
  console.log([1,2,3,4,5,6].copyWithin(0,3,5));
}


{
  // 查找  返回找到的第一个
  console.log([1,2,3,4,5,6].find(function(item){
     return item > 4;
  }));

  console.log([1,2,3,4,5,6].findIndex(function(item){
     return item > 4;
  }));
}


{
  // 是否包含
  console.log([1, 2, NaN].includes(NaN));
}
