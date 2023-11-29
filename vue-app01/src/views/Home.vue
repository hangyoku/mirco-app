<template>
  <div class="home">
    <h3>我是子应用home界面</h3>
    vue-app01 / home
    <p>父组件传递过来的值：{{id}}</p>
    <button @click="checkParent">点击操作父应用</button>
  </div>
</template>

<script>
import actions from '../qiankun/actions';
export default {
  name: 'Home',
  components: {},
  data() {
    return{
      id: 0
    }
  },
  mounted() {
    actions.onGlobalStateChange((state) => {
      console.log("vue-app01-state", state);
      this.id = state.id
    }, true);
  },
  methods: {
    checkParent(){
      actions.setGlobalState({ id: 1999 })
    }
  },
}
</script>
