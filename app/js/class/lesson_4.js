// 有些函数 需要兼容es7 要安装 babel-polyfill

{
  console.log('\u8861');

  console.log('\u20BB7');  //  \u20BB7 超过了 0xFFF    不能正常识别 会被当做 两个字节

  console.log('\u{20BB7}');
}


{
  let sy = '𠮷';

  // es5
  console.log('es5-letngth', sy.length);console.log(sy.charCodeAt(1));  //被看做两个字节  长度 2
  // 取字符
  console.log(sy.charAt(0));
  console.log(sy.charAt(1));
  //取字符编码
  console.log(sy.charCodeAt(0)); //乱码
  console.log(sy.charCodeAt(1));  //乱码

  // es6
  let syy = '𠮷x';
  console.log('length', syy.length); // 长度 3

  console.log(syy.codePointAt(0));  //第一个字符
  console.log(syy.codePointAt(0).toString(16));  // 第一个字符转化为 16 进制  20bb7
  console.log(syy.codePointAt(1));
  console.log(syy.codePointAt(2));


}

{
  // es5  不能识别
  console.log(String.fromCharCode('0x0bb7'));
  // es6  可以识别
  console.log(String.fromCodePoint('0x20bb7'));
}

{
  let str = '\u{20bb7}abc';

  // es5
  for(let i = 1; i <= str.length; i ++){
    console.log('es5', str[i]);
  }

  // es6
  for(let code of str){
    console.log('es6', code);
  }
}
