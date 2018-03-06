// app中原始文件发生改变时 自动编译到server中

// 整个es6项目是基于gulp自动构建的
import gulp from 'gulp';
// gulp语句做if判断的包
import gulpif from 'gulp-if';
// util
import gutil from 'gulp-util';
// 对命令行参数进行解析的包（已经自定义好）
import args from './util/args';


// 创建任务
gulp.task('browser', (cb)=>{
  if(!args.watch) return cb();

  gulp.watch('app/**/*.js', ['scripts']); // 第一个参数是要监听的文件  第二个是要执行的任务  app里面的js发生改变 自动自行 scripts脚本
  gulp.watch('app/**/*.ejs', ['pages']);
  gulp.watch('app/**/*.css', ['csss']);
})
