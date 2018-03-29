import $ from 'jquery';
class Base{
  /**
   * [initPlayList 初始化奖金和玩法及说明  采用set数据格式，元素是唯一的]
   * @return {[type]} [description]
   */
  initPlayList(){
    this.play_list.set('r2',{
      bonus:6,
      tip:'从01～11中任选2个或多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em class="red">6</em>元',
      name:'任二'
    })
    .set('r3',{
      bonus:19,
      tip:'从01～11中任选3个或多个号码，选号与奖号任意三个号相同，即中奖<em class="red">19</em>元',
      name:'任三'
    })
    .set('r4',{
      bonus:78,
      tip:'从01～11中任选4个或多个号码，所选号码与开奖号码任意四个号码相同，即中奖<em class="red">78</em>元',
      name:'任四'
    })
    .set('r5',{
      bonus:540,
      tip:'从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
      name:'任五'
    })
    .set('r6',{
      bonus:90,
      tip:'从01～11中任选6个或多个号码，所选号码与开奖号码五个号码相同，即中奖<em class="red">90</em>元',
      name:'任六'
    })
    .set('r7',{
      bonus:26,
      tip:'从01～11中任选7个或多个号码，选号与奖号五个号相同，即中奖<em class="red">26</em>元',
      name:'任七'
    })
    .set('r8',{
      bonus:9,
      tip:'从01～11中任选8个或多个号码，选号与奖号五个号相同，即中奖<em class="red">9</em>元',
      name:'任八'
    })
  }
  /**
   * [initNumber 初始化号码]
   * @return {[type]} [description]
   */
  initNumber(){
    for(let i = 1; i < 12; i++){
      // 字符串扩展操作 在前面补0
      this.number.add((''+i).padStart(2,'0'))
    }
  }

  /**
   * [setOmit 设置遗漏数据]
   * @param {[type]} omit [description]
   */
  setOmit(omit){
    // 保存当前对象的引用
    let self = this;
    // 清空旧数据
    self.omit.clear();
    // map 数据遍历
    for(let [index,item] of omit.entries()){
      self.omit.set(index,item)
    }

    // 调用jquery 方法 实现页面显示操作
    $(self.omit_el).each(function(index,item){
      $(item).text(self.omit.get(index))
    });
  }

  /**
   * [setOpenCode 设置开奖]
   * @param {[type]} code [description]
   */
  setOpenCode(code){
    // 保存当前应用引用
    let self = this;
    // 清除旧数据
    self.open_code.clear();
    // 开奖号码采用set数据格式  因为不能重复
    for(let item of code.values()){
      self.open_code.add(item);
    }
    // 更新开奖号码
    self.updateOpenCode && self.updateOpenCode.call(self,code);
  }

  /**
   * [toggleCodeActive 号码选中取消]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  toggleCodeActive(e){
    // 当前对象引用
    let self = this;
    // 调用jquery 方法
    let $cur=$(e.currentTarget);
    // 页面当前号码选中取消
    $cur.toggleClass('btn-boll-active');
    //
    self.getCount();
  }

  /**
   * [changePlayNav 切换玩法]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  changePlayNav(e){
    // 当前类引用
    let self = this;
    // 当前页面操作对象 jquery 方法   e.currentTarget:注册了事件监听的对象   e.target  注册了事件监听的对象的子对象
    let $cur=$(e.currentTarget);
    // jquery 操作
    $cur.addClass('active').siblings().removeClass('active');
    // 玩法
    self.cur_play=$cur.attr('desc').toLocaleLowerCase();

    // jquery 实现页面操作
    $('#zx_sm span').html(self.play_list.get(self.cur_play).tip);
    $('.boll-list .btn-boll').removeClass('btn-boll-active');
    self.getCount();
  }

  /**
   * [assistHandle 操作区]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  assistHandle(e){
    // 该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）
    e.preventDefault();
    // 当前对象的引用
    let self = this;
    // 注册了事件监听的对象
    let $cur = $(e.currentTarget);
    // 对象的索引
    let index = $cur.index();
    // 先清空所有的class
    $('.boll-list .btn-boll').removeClass('btn-boll-active');
    // 第一个
    if(index === 0){
      $('.boll-list .btn-boll').addClass('btn-boll-active');
    }
    // 第二个
    if(index === 1){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent-5>0){
          $(t).addClass('btn-boll-active')
        }
      })
    }
    // 第三个
    if(index === 2){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent-6<0){
          $(t).addClass('btn-boll-active')
        }
      })
    }
    // 第四个
    if(index === 3){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent%2==1){
          $(t).addClass('btn-boll-active')
        }
      })
    }
    // 第五个
    if(index === 4){
      $('.boll-list .btn-boll').each(function(i,t){
        if(t.textContent%2==0){
          $(t).addClass('btn-boll-active')
        }
      })
    }
    // 重新计算注数
    self.getCount();
  }

  /**
   * [getName 获取当前彩票名称]
   * @return {[type]} [description]
   */
  getName(){
    return this.name
  }

  /**
   * [addCode 添加号码]
   */
  addCode(){
    // 当前对象引用
    let self = this;
    // 元素集合
    let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g);
    // 长度
    let active = $active ? $active.length : 0;
    // 计算注数
    let count=self.computeCount(active,self.cur_play);

    // 添加号码到页面
    if(count){
      self.addCodeItem($active.join(' '),self.cur_play,self.play_list.get(self.cur_play).name,count);
    }
  }

  /**
   * [addCodeItem 添加单次号码]
   * @param {[type]} code     [description]
   * @param {[type]} type     [description]
   * @param {[type]} typeName [description]
   * @param {[type]} count    [description]
   */
  addCodeItem(code,type,typeName,count){
    // 当前对象的引用
    let self = this;
    // 字符串模板
    const tpl=`
    <li codes="${type}|${code}" bonus="${count*2}" count="${count}">
		 <div class="code">
			 <b>${typeName}${count>1?'复式':'单式'}</b>
			 <b class="em">${code}</b>
			 [${count}注,<em class="code-list-money">${count*2}</em>元]
		 </div>
	 </li>
    `;

    // 替换页面内容
    $(self.cart_el).append(tpl);
    self.getTotal();
  }

  /**
   * [getCount 计算注数]
   * @return {[type]} [description]
   */
  getCount(){
    // 当前对象的 引用
    let self = this;
    // 集合长度
    let active = $('.boll-list .btn-boll-active').length;
    // 注数
    let count = self.computeCount(active,self.cur_play);
    // 范围
    let range = self.computeBonus(active,self.cur_play);
    // 金额
    let money = count * 2;
    // 最小值
    let win1 = range[0] - money;
    // 最大值
    let win2 = range[1] - money;
    let tpl;
    // 亏损
    let c1 = (win1 < 0 && win2 < 0) ? Math.abs(win1) : win1;
    let c2 = (win1 < 0 && win2 < 0) ? Math.abs(win2) : win2;
    // 字符串模板
    if(count === 0){
      tpl=`您选了 <b class="red">${count}</b> 注，共 <b class="red">${count * 2}</b> 元`
    }else if(range[0] === range[1]){
      tpl=`您选了 <b>${count}</b> 注，共 <b>${count*2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 元，
			您将${win1>=0?'盈利':'亏损'}
			<strong class="${win1>=0?'red':'green'}">${Math.abs(win1)} </strong> 元</em>`
    }else{
      tpl=`您选了 <b>${count}</b> 注，共 <b>${count*2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 至 <strong class="red">${range[1]}</strong> 元，
			您将${(win1 < 0 && win2 < 0) ? '亏损' : '盈利'}
			<strong class="${win1>=0?'red':'green'}">${c1} </strong>
			至 <strong class="${win2>=0?'red':'green'}"> ${c2} </strong>
			元</em>`
    }
    // 替换页面内容
    $('.sel_info').html(tpl);

  }

  /**
   * [getTotal 计算所有金额]
   * @return {[type]} [description]
   */
  getTotal(){
    let count=0;
    // 购物车加和
    $('.codelist li').each(function(index,item){
      count += $(item).attr('count')*1;
    })
    $('#count').text(count);
    $('#money').text(count * 2);
  }

  /**
   * [getRandom 生成随机数]
   * @param  {[type]} num [description]
   * @return {[type]}     [description]
   */
  getRandom(num){
    let arr=[],index;
    // 集合编程数组
    let number=Array.from(this.number);
    // 无限循环
    while(num--){
      index=Number.parseInt(Math.random() * number.length);

      arr.push(number[index]);
      number.splice(index,1);
    }
    return arr.join(' ')
  }

  /**
   * [getRandomCode 添加随机号码]
   * @param  {[type]}  [description]
   * @return {[type]}   [description]
   */
  getRandomCode(e){
    e.preventDefault();
    // 绑定监听事件的对象
    let num = e.currentTarget.getAttribute('count');
    // 玩法集合
    let play = this.cur_play.match(/\d+/g)[0];
    // 对象引用
    let self = this;

    if(num==='0'){
      $(self.cart_el).html('')
    }else{
      for(let i=0;i<num;i++){
        self.addCodeItem(self.getRandom(play),self.cur_play,self.play_list.get(self.cur_play).name,1);
      }
    }
  }

}

export default Base
