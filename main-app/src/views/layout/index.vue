<template>
  <div class="layout">
    <div class="nav">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#f9f9f9"
        text-color="green"
        active-text-color="red"
        style="height: 100%;"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <router-link to="/">首页</router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <router-link to="/">home</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <router-link to="/about">关于</router-link>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <router-link to="/vue-app01">vue-app01应用</router-link>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              <router-link to="/vue-app01/goods">商品列表</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">子应用3-2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <!-- 主应用的渲染区域，用于挂载主应用触发的组件 -->
      <router-view v-show="$route.name"></router-view>
      <!-- 子应用渲染的区域，用于挂载Vue或者React子应用节点 -->
      <div v-show="!$route.name" id="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'layout'
    }
  },
  mounted () {
    console.log(this.$route.name)
  },
  methods: {}
}
</script>

<style scoped lang="less">
.layout {
  height: 100%;
  display: flex;
  .nav {
    width: 250px;
    height: 100%;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
  }

  .content {
    width: calc(100% - 270px);
  }
}

</style>
