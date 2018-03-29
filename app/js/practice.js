// 兼容模块
import 'babel-polyfill';

import Base from './practice/base.js';
import Timer from './practice/timer.js';
import Calculate from './practice/calculate.js';
import Interface from './practice/interface.js';

// 导入 jquery 库
import $ from 'jquery'



/**
 * [es6 只提供了单继承； 自己实现多重继承  copy 类的属性]
 * @param  {[type]} target [目标对象  要被设置属性]
 * @param  {[type]} source [资源对象  从它获取属性]
 * @return {[type]}        [description]
 */
const copyProperties = function(target, source){
  // 利用反射 获取 source 的属性
  for(let key of Reflect.ownKeys(source)){

    if(key !== 'constructor' && key !== 'prototype' && key !== 'name'){
      // ES7 有一个提案，提出了Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象
      let desc = Object.getOwnPropertyDescriptor(source, key);

      //Object的defineProperty和defineProperties这两个方法在js中的重要性十分重要，主要功能就是用来定义或修改这些内部属性,
      //与之相对应的getOwnPropertyDescriptor和getOwnPropertyDescriptors就是获取这行内部属性的描述。

      // 给对象 target 定义 描述为 desc 的属性 key
      Object.defineProperty(target, key, desc);
    }

  }
}


/**
 * [description]
 *作者：doris
链接：https://www.zhihu.com/question/34183746/answer/58155878
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

初学javascript的时候也跟题主一样搞不清楚，自己好好总结了一下：首先，要明确几个点：
1.在JS里，万物皆对象。方法（Function）是对象，方法的原型(Function.prototype)是对象。因此，它们都会具有对象共有的特点。
即：对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。
2.方法(Function)方法这个特殊的对象，除了和其他对象一样有上述_proto_属性之外，还有自己特有的属性——原型属性（prototype），这个属性是一个指针，
指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，
指回原构造函数。好啦，知道了这两个基本点，我们来看看上面这副图。1.构造函数Foo()构造函数的原型属性Foo.prototype指向了原型对象，在原型对象里有共有的方法，
所有构造函数声明的实例（这里是f1，f2）都可以共享这个方法。
2.原型对象Foo.prototypeFoo.prototype保存着实例共享的方法，有一个指针constructor指回构造函数。3.实例f1和f2是Foo这个对象的两个实例，
这两个对象也有属性__proto__，指向构造函数的原型对象，这样子就可以像上面1所说的访问原型对象的所有方法啦。
 *
 * @param  {[type]} minins [description]
 * @return {[type]}        [返回一个 复制了多个类的属性的类  其他类只要单继承了它  就相当于多继承了]
 */
const mix = function(...minins){
  // 定义一个空类
  class Mix{}

  for(let mix of minins){
    // 把类 mix的属性 复制给 Mix ，就是 copy一样的 ，给 Mix设置一样的属性
    copyProperties(Mix, mix);
    // 原型对象的拷贝
    copyProperties(Mix.prototype, min.prototype);
  }

  return Mix;
}


class Practice extends mix(Base, Calculate, Timer, Interface) {
  /**
   * [constructor description]
   * @param {String} [name='syy']    [玩法名称]
   * @param {String} [cnname='11选5'] [玩法中文名称]
   * @param {String} [issue='**']    [期号]
   * @param {String} [state='**']    [状态]
   */
  constructor(name = 'syy', cnname = '11选5', issue = '**', state = '**'){
    // 继承时 super 要放在最前面
    super();

    this.name = name;
    this.cnname = cnname;
    this.issue = issue;
    this.state = state;
    // 当前选择器
    this.el = '';
    // 遗漏
    this.omit = new Map();
    // 开奖号码 不重复
    this.open_code = new Set();
    // 开奖记录
    this.open_code_list = new Set();
    // 玩法类型
    this.play_list = new Map();
    // 选号
    this.number = new Set();

    // 期号选择器
    this.issue_el = '#curr_issue';
    // 倒计时选择器
    this.countdown_el = '#countdown';
    // 状态的选择器
    this.state_el = '.state_el';
    // 购物车选择器
    this.cart_el = '.codelist';
    // 遗漏的选择器
    this.omit_el = '';
    // 默认玩法
    this.cur_play = 'r5';

    this.initPlayList();
    this.initNumber();
    this.updateState();
    this.initEvent();

  }

  /**
   * [updateState 状态更新]
   * @return {[type]} [description]
   */
  updateState(){
    // 当前对象引用
    let self = this;

    this.getStatus().then(function(res){
      // 更新期号
      self.issue = res.issue;

      // 更新结束时间
      self.end_time = res.end_time;

      // 更新状态
      self.state = res.state;

      // 更新页面开奖号码
      $(self.issue_el).text(res.issue);

      self.countdown(res, end_time, function(time){
        // 更新倒计时时间
        $(self.countdown_el).html(time);
      }, function(){
        setTimeout(function(){
          // 更新状态
          self.updateState();

          self.getOmit(self.issue).then(function(res){
            // todo:  遗漏号码
          });

          self.getOpenCode(self.issue).then(function(res){
            // todo : 开奖号码
          });

        }, 500);
      });
    });

  }

  /**
   * [initEvent 初始化事件]
   * @return {[type]} [description]
   */
  initEvent(){
    // 保存当前对象
    let self = this;
    // 玩法
    $('#plays').on('click', 'li', self.changePlayNav.bind(self));

    // 号码
    $('.boll-list').on('click', '.btn-boll', self.toggleCodeActive.bind(this));

    // 选中号码
    $('#confirm_sel_code').on('click', self.addCode.bind(self));

    // 定时奇偶
    $('.dxjo').on('click', 'li', self.assistHandle.bind(self));

    // 随机号码
    $('qkmethod').on('click', '.btn-middle', self.getRandomCode.bind(self));
  }
}

// 导出
export default Practice;
