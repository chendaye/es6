// css相关的脚本

// 整个es6项目是基于gulp自动构建的
import gulp from 'gulp';
// gulp语句做if判断的包
import gulpif from 'gulp-if';
// 热更新 修改之后自动更新
import liereload from 'gulp-livereload';
// 对命令行参数进行解析的包（已经自定义好）
import args from './util/args';


// 创建任务

gulp.task('css', ()=>{
  return gulp.src('app/**/*.css')
  .pipe(gulp.dest('server/public'))
  .pipe(gulpif(args.watch, livereload()))
})
