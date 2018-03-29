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




{
  // map 和 数组 的横向对比  增删改查
  let map = new Map();
  let arr = [];

  // 增
  map.set('key', 123);
  arr.push({key:123});
  console.log('map-arr-add', map, arr);


  // 查
  let map_exsit = map.has('key');
  let arr_exist = arr.find(item=>item.key);
  console.log('map-arr-find', map_exsit, arr_exist);

  // 改
  map.set('key', 777);
  arr.forEach(item=>item.key ? item.key = 777 : '');
  console.log('map-arr-modify', map, arr);



  // 删
  map.delete('key');
  let index = arr.findIndex(item=>item.key);
  arr.splice(index);
  console.log('map-arr-del', map, arr);


}


{
  // set 和 array 的对比
  let set = new Set();
  let arr = [];

  // 增
  set.add({f:123});
  arr.push({f:123});

  console.log('set-arr-add', set, arr);
  // 查
  let set_exist = set.has('f');
  let arr_exist = arr.find(item=>item.f);
  console.log('set-arr-exist', set_exist, arr_exist);

  // 改
  set.forEach(item=>item.f ? item.f = 777 : '')
  arr.forEach(item=>item.f ? item.f = 777 : '')
  console.log('set-arr-modify', set, arr);

  // 删
  set.forEach(item=>item.f ? set.delete(item) : '');
  let index = arr.findIndex(item=>item.key);
  arr.splice(index);
  console.log('map-arr-del', set, arr);

}



{
  // map set obj 比较
  let item = {k:123};

  let set = new Set();
  let map = new Map();
  let obj = {};

  // 增

  set.add(item);
  map.set('k', 123);
  obj['k'] = 123;
  console.log('add', set, map, obj);

  // 查
  console.log({
    set_exist: set.has(item),
    map_exist: map.has('k'),
    obj_exist: 'k' in obj
  });

  // 改
  item.k = 777; // set 引用的是原数据本身
  map.set('k', 777);
  obj['k'] = 777;

  console.log('modify', set, map, obj);
  // 删
  set.delete(item);
  map.delete('k');
  delete obj['k'];
  console.log('del', set, map, obj);



  // 总结：开发中优先使用 map  如果考虑到数据的唯一性 考虑 set   尽量不考虑 数组 对象 存储数据
}
