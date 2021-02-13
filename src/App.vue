<template>
  <div id="app">
    <h2>mockjs模拟数据</h2>
    <button @click='getGoods'>获取商品列表</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    components: {
    },
    mounted() {
      axios.interceptors.response.use(res => {
        return res.data
      }, err => {
        console.log(err);
      })
    },
    methods: {
      getGoods() {
        axios({
          url: '/api/goodlist'
        }).then(res => {
          console.log(res);
        })
      }
    },
  }
</script>

<style>

</style>