/**
 * 用于存放我们各个微应用的数组。
 * 以后有多少个微应用，这个数组中就会存放多少个对象
 */
// const apps = [
//   /**
//    * name: 微应用名称 - 具有唯一性
//    * entry: 微应用入口 - 通过该地址加载微应用，保证微应用地址和端口正确
//    * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
//    * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
//    */
//   {
//     name: 'vue-app01',
//     entry: '//localhost:8081',
//     container: '#container',
//     activeRule: '/app01'
//   }
// ]
const env = process.env.NODE_ENV
const microApps = [
  {
    name: 'vue-app01',
    entry: env === 'development' ? 'http://localhost:8889/child/vue-app01/' : '/child/vue-app01/', // 与主应用部署目录部署一致，且在child目录中
    container: '#container',
    activeRule: '/vue-app01'
  }
  // ,
  // {
  //   name: 'micro-react', // 应用名 项目名最好也是这个
  //   entry: '//localhost:20000', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）内部用的fetch
  //   activeRule: '/react', // 激活的路径
  //   container: '#micro-react', // 容器名
  //   props: {} // 父子应用通信
  // }
]

export default microApps
