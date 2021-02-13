import Mock from 'mockjs'

Mock.mock('/api/goodlist', 'get', {
  status: 200,
  message: '获取商品列表成功!',
  'data|5-10': [
    {
      id: '@increment(1)',
      name: '@cword(2,5)',
      price: '@natural(2,10)',
      count: '@natural(100,999)',
      img: '@dataImage(78x78)'
    }
  ]
})