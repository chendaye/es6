{
  // es5
  let regex = new RegExp('xyz', 'i');

  let regex2 = new RegExp(/xyz/i);

  console.log(regex.test('xyzdsf'), regex2.test('sdfsdf'));

  // es6 新增

  let regex3 = new RegExp(/xyz/ig, 'i');  // 第二个参数 i 会覆盖 ig

  console.log(regex3.flags);
}


{
  let s = 'aaa_aa_a';
  let a = /a+/g;
  let b = /a+/y;

  // g 修饰符 从上一次匹配 之后的所有剩余字符串中匹配
  // y 修饰符 从上一次匹配 之后紧跟的第一个字符串开始匹配
  console.log(1, a.exec(s), b.exec(s));
  console.log(s);
  console.log(2, a.exec(s), b.exec(s));
  console.log(3, a.exec(s), b.exec(s));

  // 是否开启了y修饰符
  console.log(a.sticky, b.sticky);
}

{
  let a = /^\uD83D/;
  let b = /^\uD83D/u;

  //  \uD83D\uDC2A 被当做两个字符
  console.log(a.test('\uD83D\uDC2A'));
  // \uD83D\uDC2A 在 unicode 下面被当做一个字符
  console.log(b.test('\uD83D\uDC2A'));

  //{61} 表示 unicode下面的 a   没有加 u 修饰符 js 不识别 {61}
  console.log(/\u{61}/.test('a'));
  // 加 u 修饰符 js 识别 {61}
  console.log(/\u{61}/u.test('a'));


  // 双字节字符  𠮷
  console.log('\u{20BB7}');

  let str = '𠮷';
  // 一般情况下 '.' 可以匹配任何字符（单字节）
  // 当字符串包含双字节字符时  要加上 u 修饰符 才能pp双字节字符
  console.log('u', /^.$/.test(str));  //false
  console.log('u-2', /^.$/u.test(str));  //true


  console.log('u-3', /^𠮷{2}/.test('𠮷𠮷'));  //false
  console.log('u-6', /^𠮷{2}/u.test('𠮷𠮷'));  //true
}
