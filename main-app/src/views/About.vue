<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{num}}</p>
    <button @click="checkParent">父应用修改id</button>
  </div>
</template>
<script>
import { initGlobalState } from 'qiankun'
// 初始化 state
const actions = initGlobalState({ id: 100 })
export default {
  name: 'About',
  components: {},
  data () {
    return {
      num: 0
    }
  },
  mounted () {
    actions.onGlobalStateChange((state) => {
      this.num = state.id
    }, true)
  },
  methods: {
    checkParent () {
      actions.setGlobalState({ id: 666 })
    }
  }
}
</script>
