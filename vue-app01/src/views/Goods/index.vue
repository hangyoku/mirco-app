<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: [
        {name: '苹果', id: 1},
        {name: '栗子', id: 2},
        {name: '香蕉', id: 3},
        {name: '榴莲', id: 4},
        {name: '橘子', id: 5}
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
