<template>
  <div>
    <el-button type="primary" @click="login"> 登 陆 </el-button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {
    login () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>

</style>
