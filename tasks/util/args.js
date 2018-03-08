import yargs from 'yargs';


// 区分开发环境和线上环境的参数
const args = yargs

// 命令选项部分
  .option('production', {
    boolean:true, //  选项是bool类型
    default:false, // 默认值是false
    describe:'is production'
  })

// 是否监听文件修改
    .option('watch', {
      boolean:true,
      default:false,
      describe:'is auto alert'
    })

// 详细输出命令行执行的日志
    .option('verbose', {
      boolean:true,
      default:false,
      describe:'is recored log'
    })

// js映射
   .option('sourcemaps', {
     describe:'force to gennerate sourcemaps'
   })

 // 服务器端口设置
  .option('port', {
    string:true,
    default:8080,
    describe:'server port'
  })

// 把输入的命令行以字符串解析
  .argv

  export default args;
