{
  // 二进制
  console.log(0b1101111);

  // 8禁止
  console.log(0o765);
}


{
  // 是否是有界数值
  console.log('15', Number.isFinite(15));
  console.log('NaN', Number.isFinite(NaN));
  console.log('1/0', Number.isFinite(1/0));

  // 是否是非数字
  console.log('NaN', Number.isNaN(NaN));
}


{
  // 判断是否是整数
  console.log(Number.isInteger(25));
  console.log(Number.isInteger(25.0));
}

{
  // 判断数是否在有效的区间

  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);

  // 判断数是否在安全范围内
  console.log(Number.isSafeInteger(10));
}

{
  // 取整数部分

  console.log(Math.trunc(42.13));
}

{
  // 判断正数  负数 零
  console.log(Math.sign(-7)); // -1
  console.log(Math.sign(0));  // 0
  console.log(Math.sign(7));  // 1
  console.log(Math.sign('5'));  //1
  console.log(Math.sign('nnn'));  // NaN
}


{
  // 立方根
  console.log(Math.cbrt(-1));

  console.log(Math.cbrt(64));
}
