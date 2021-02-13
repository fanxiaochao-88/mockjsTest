<template>
  <div id="app">
    <h2>mockjs模拟数据</h2>
    <button @click='getGoods'>获取商品列表</button>
    <button @click='addGoods'>添加商品</button>
    <button @click='getGoodsById(1)'>根据Id获取商品</button>
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
      getGoodsById(id) {
        axios({
          url: '/api/getgoods/' + id
        }).then(res => {
          console.log(res);
        })
      },
      getGoods() {
        axios({
          url: '/api/goodlist'
        }).then(res => {
          console.log(res);
        })
      },
      addGoods() {
        axios({
          url: '/api/addgoods',
          method: 'post',
          data: {
            name: '菠萝',
            price: 8,
            count: 550,
            img: ''
          }
        }).then(res => {
          console.log(res);
        })
      }
    },
  }
</script>

<style>

</style>