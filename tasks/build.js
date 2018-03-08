// 整个es6项目是基于gulp自动构建的
import gulp from 'gulp';

// 脚本的顺序
import gulpSequence from 'gulp-sequence';

//  先清空文件夹  再导入模板文件  再启动浏览器  最后启动 server
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']));
