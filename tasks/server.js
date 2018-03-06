// server相关的脚本

// 整个es6项目是基于gulp自动构建的
import gulp from 'gulp';
// gulp语句做if判断的包
import gulpif from 'gulp-if';
// 启动服务器的一个包
import liveserver from 'gulp-live-server';
// 对命令行参数进行解析的包（已经自定义好）
import args from './util/args';



// 创建任务

gulp.task('server', (cb)=>{
  // 不是处于监听状态 直接返回调
  if(!args.watch) return cb();

  var server =  liveserver.new(['--harmony', 'server/bin/www']);
  // 启动服务器
  server.start();

  // 监听 并 热更新
  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file){
    // 服务器动作
    server.notify.apply(server, [file]);

    // 需要重启服务器的文件
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function(){
      server.start.bind(server)();
    })
  })
})
