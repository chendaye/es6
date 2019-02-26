// Proxy

{
  let obj = {
    'time':'2017',
    'name':'chendaye666',
  };

  let monitor = new Proxy(obj, {
    // 要代理的任务

    // 代理对象属性的读取
      get(target, key){
        return target[key].replace('123', '2107');
      },

      // 代理对象属性设置
      set(target, key, value){
        if(key === 'name'){
          return target[key] = value;
        }else{
          return target[key];
        }
      },

      // 代理 key in object
      has(target, key){
        if(key === 'name'){
          return target[key];
        }else{
          return false;
        }fun
      },

      // 代理删除操作
      deleteProperty(target, key){
        if(key.indexOf('_') > -1){
          // 以下划线开头的属性就删除
          delete target[key];
        }else{
          return target[key];
        }
      },

      // 代理  Object.keys  Object.getOwnPropertySymbols  Object.getOwnPropertyNames
      ownKeys(target){
        return Object.keys(target).filter(item => item != 'name');
      }
  });

  console.log('monitor', monitor.time);

  monitor.name = 'gmail';
  monitor.time = '7777';

  console.log(monitor);


  console.log('has', 'name' in monitor, 'time' in monitor);

  // 非下划线开头的属性不能删除成功
  delete monitor.name;
  console.log('del', monitor);

  // 过滤掉 属性名为name的
  console.log(Object.keys(monitor));

}

// Reflect 和 Proxy 方法一样 只是Reflect 不用实例化



{
  // 使用场景
  function validator(target, validator){

    // 返回一个代理对象  对传入对象的 属性设置进行代理
    return new Proxy(target, {
      // 验证对象
      _validator:validator,

      set(target, key, value, proxy){
        // 被代理对象的属性是否存在
        if(target.hasOwnProperty(key)){

          // 获取验证对象的验证方法
          let vali = this._validator[key];

          // 验证要设置的值
          if(!!vali(value)){
            // 验证通过用 Reflect 来设置被代理对象的属性值
            return Reflect.set(target, key, value, proxy);
          }else{
            // 验证失败抛出异常
            throw Error(`不能设置${value}到${key}`);
          }
        }else{
          // 属性不存在抛出异常
          throw Error(`不存在属性 ${key}`)
        }
      }
    });
  }



  // 验证规则
  const personValidate = {
    name(val){
      return typeof val === 'string';
    },

    age(val){
      return typeof val === 'number' && val > 18;
    }
  };



  // 测试类
  class person{
    constructor(name, age){
      this.name = name;
      this.age = age;

      // 注意构造函数返回的是一个代理 proxy 对象  该对象代理了 person
      return validator(this, personValidate);
    }
  };


  const chendaye = new person('chendaye666', 18);

  console.log(chendaye);

  chendaye.name = 'chendaye666';
}
