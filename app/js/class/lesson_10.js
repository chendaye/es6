// set数据类型

{
  let list = new Set();
  list.add(8);
  list.add(80);

  console.log(list.size);


  // 也可以直接初始化
  let arr = [1,2,3,4,5];
  let list1 = new Set(arr);

  console.log(list1.size);
}

{
  // set 里不能有重复元素

  let list = new Set();

  list.add(7);
  list.add(8);
  list.add(8);  // 重复元素添加不成功

  console.log(list.size);

  // 利用此特性去重

  let arr = [1,1,2,2,3,3];

  let list1 = new Set(arr);

  console.log(list1);
}


{
  // 几个方法

  let method = ['add', 'delete', 'has', 'clear'];

  let list = new Set(method);

  list.add(777);

  list.delete('delete');

  console.log(list, list.has('list'));

  list.clear();
  console.log(list);


}



{
  let method = ['add', 'delete', 'has', 'clear'];

  let list = new Set(method);

  for(let key of list.keys()){
    console.log('key', key);
  }

  for(let val of list.values()){
    console.log('val', val);
  }

  for(let li of list){
    console.log('list', li);
  }

  for(let [k,v] of list.entries()){
    console.log('entries', k, v);
  }

  list.forEach(function(item){
    console.log(item);
  });
}


{
  // weakSet key只能是对象   且是弱引用 就是引用地址 而不是完全拷贝值   不能遍历
  let weak = new WeakSet();

  let key = {};

  weak.add(key, 132);

}


{
  // Map数据类型  键可以是任意类型
  let map = new Map();

  let arr = [123];

  map.set(arr, 789);  // key val

  console.log(map, map.get(arr));
}

{
  // map 第二种定义方式
  let map = new Map([['a', 123], ['b', 456]]);  // 以键值对的方式

  console.log(map);
  console.log(map.set('c', 789));
  console.log(map.delete('a'));
  console.log(map);
  map.clear();
  console.log(map);

  // Map  的遍历和 set 一样

}


{
  // 区别和  weakSet 一样
  let weakMap =new WeakMap();
}
