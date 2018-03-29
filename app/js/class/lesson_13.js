{
  // 传统的异步操作 回调函数

  let ajax = function(callback){
    console.log('执行');

    // 延迟一秒钟 执行回调函数
    setTimeout(function(){
      callback && callback.call();
    }, 1000);
  };

  ajax(function(){
    console.log('setTimeout');
  });
}


{
  // Promise
  let ajax =  function(){
    console.log('执行2');

    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve();
      }, 1000);
    });
  };

  ajax().then(function(){
    console.log('Promise');
  }, function(){});
}

{
  // 串行异步调用

  let ajax =  function(){
    console.log('执行3');

    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve();
      }, 1000);
    });
  };

  ajax()
  .then(function(){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve();
      }, 1000);
    });
  }, function(){})
  .then(function(){
    console.log('setTimeout3');
  });
}

{
  // 错误捕获
  let ajax = function(num){
    console.log('异常捕获');

    return new Promise(function(reslove, reject){
      if(num > 8){
        reslove();
      }else{
        throw new Error('错误');
      }
    })
  }

  ajax(70).then(function(){
    console.log('666');
  }).catch(function(eror){
      console.log(error);
  });

}

{
  // 应用场景  所有图片加载完再添加到页面

  function loadImg(src){
    return new Promise((resolve, reject) => {
      // 创建一个img标签
      let img = document.createElement('img');
      // src 属性赋值
      img.src = src;

      // 图片加载
      img.onload = function(){
        resolve(img);
      }

      // 加载失败
      img.onerror = function(error){
        reject(error);
      }
    });
  }

  function showImg(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img);
    });
  }

  // 把 多个 promise 实例当做一个 promise 当 所有的promise 状态改变 会触发新的 promise
  Promise.all([
  loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
  loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
  loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImg);

}



{
  // 有一个图片加载完就添加到页面
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImgs(img){
    let p=document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p)
  }

  // race  有一个promise 状态改变 外面的 promise 就改变
  Promise.race([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)

}
