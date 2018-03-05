import yargs from 'yargs';


// 区分开发环境和线上环境的参数
const args = yargs;

// 命令选项部分
  .option('production', {
    boolean:true, //  选项是bool类型
    default:false, // 默认值是false
    describe:'是否是生产环境'
  })
