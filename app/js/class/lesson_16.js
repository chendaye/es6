{
  // 修饰器
  let readonly = function(target, name, descriptor){
    descriptor.writable = false;  // 不可写

    return descriptor;
  };

  class Test{
    // 修饰器  添加只读属性
    //@readonly
    time(){
      return '6666';
    }
  }

  let test = new Test();

  console.log(test.time());

  test.time = function(){
    return 777;
  };

  console.log(test.time());
}


{
  let myname = function(target, name, descriptor){
    target.myname = 'chendaye666';
  };

  @myname
  class test{

  }

  console.log(test.myname);
}


{
  // 第三方 修饰器 js库   core-decorators  -> npm install core-decorators
}

{
  // 案例 日志
  let log=(type)=>{
    return function(target,name,descriptor){
      let src_method=descriptor.value;
      descriptor.value=(...arg)=>{
        src_method.apply(target,arg);
        console.info(`log ${type}`);
      }
    }
  }

  class AD{
    @log('show')
    show(){
      console.info('ad is show')
    }
    @log('click')
    click(){
      console.info('ad is click');
    }
  }

  let ad=new AD();
  ad.show();
  ad.click();
}
