<template>
  <router-view></router-view>
</template>

<script>
import { initGlobalState } from 'qiankun'
// 初始化 state
const actions = initGlobalState({ id: 100 })
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev)
})
export default {
  name: 'App',
  mounted () {
  }
}
</script>

<style lang="less">

</style>
