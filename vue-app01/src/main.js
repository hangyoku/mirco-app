import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from "./router"
import actions from "./qiankun/actions"

Vue.config.productionTip = false
Vue.use(VueRouter);

if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let instance = null;
let router = null;

/**
 * 渲染函数
 * 两种情况：主应用生命周期钩子中运行 / 微应用单独启动时运行
 */
function render() {
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  console.log("window.__POWERED_BY_QIANKUN__", window.__POWERED_BY_QIANKUN__)
  router = new VueRouter({
    /**
     * 运行在主应用中时，添加路由命名空间 /vue-app01
     * window.__POWERED_BY_QIANKUN__ 在微应用环境下运行时，base需要设置为主应用中配置activeRule属性一致
     */
    base: window.__POWERED_BY_QIANKUN__ ? '/vue-app01' : '/child/vue-app01/',
    mode: "history",
    routes,
  });

  // 挂载应用
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 	     bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("VueApp bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("VueApp mount", props);
  actions.setActions(props)
  // props.setGlobalState({id:1999});
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("VueApp unmount");
  instance.$destroy();
  instance = null;
  router = null;
}

