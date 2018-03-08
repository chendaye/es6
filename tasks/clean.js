// 清空文件的脚本

// 整个es6项目是基于gulp自动构建的
import gulp from 'gulp';
// 删除操作的包
import del from 'del'
// 对命令行参数进行解析的包（已经自定义好）
import args from './util/args';


gulp.task('clean', ()=>{
  // 清空指定的目录
  return del(['server/public', 'server/views']);
})
