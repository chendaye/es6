{
  // 创建一个类
  class Parent{
    constructor(name = 'chendaye666'){
      this.name = name;
    }
  }

  let par = new Parent();

  console.log(par);

}


{

  class Parent{
    constructor(name = 'chendaye666'){
      this.name = name;
    }
  }
  // 继承
 class Child extends Parent {

 }

 console.log(new Child());

}


{
  // 继承传递参数
  class Parent{
    constructor(name = 'chendaye666'){
      this.name = name;
    }
  }
  // 继承
 class Child extends Parent {
   constructor(name = 'child'){
     super(name);

     this.type = 'child'; // 新增加的属性一定在super 之后  如果有 super
   }
 }

 console.log(new Child());

}


{
  // getter seter
  class Parent{
    constructor(name = 'chendaye666'){
      this.name = name;
    }

    get newname(){
      return 'ccc'+this.name;
    }

    set newname(val){
      this.name = val;
    }
  }

  let cla = new Parent();

  console.log(cla.newname);

  cla.newname = 'gmail';

  console.log(cla.newname);
}

{
  // 静态方法
  class Parent{
    constructor(name = 'chendaye666'){
      this.name = name;
    }

    static fun(){
      console.log('fun');
    }
  }

  Parent.fun();


  // 静态属性  直接在外面定义
  Parent.type = 'type';

  console.log(Parent.type);
}
