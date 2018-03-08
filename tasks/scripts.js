
// js相关的脚本


// 项目要依赖的包
// 整个es6项目是基于gulp自动构建的
import gulp from 'gulp';
// gulp语句做if判断的包
import gulpif from 'gulp-if';
// gulp中处理文件拼接的
import concat from 'gulp-concat';
// 打包工具
import webpack from 'webpack';
// 打包是基于文件流的
import gulpWebpack from 'webpack-stream';
// 文件重命名做标志的
import named from 'vinyl-named';
// 热更新 修改之后自动更新
import livereload from 'gulp-livereload';
// 处理文件信息流的包
import plumber from 'gulp-plumber';
// 文件重命名的包
import rename from 'gulp-rename';
// 压缩js css的包
import uglify from 'gulp-uglify';
// 命令行输出的包
import {log,colors} from 'gulp-util';
// 对命令行参数进行解析的包（已经自定义好）
import args from './util/args';






// 安装 包 sudo npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs

gulp.task('scripts',()=>{
    // 打开index.js
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      // 错误处理
      errorHandle:function(){

      }
    }))
     // 重命名
    .pipe(named())
    // 编译js
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    // 编译好的文件写入指定的路径
    .pipe(gulp.dest('server/public/js'))
    // 编译好的文件 重命名
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
     // 压缩
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
     //  编译好的  压缩的  重命名的文件 存到指定位置
    .pipe(gulp.dest('server/public/js'))
    // 热更新
    .pipe(gulpif(args.watch,livereload()))
})
