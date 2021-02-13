import Mock from 'mockjs'

Mock.mock('/api/goodlist', 'get', {
  status: 200,
  message: '获取商品列表成功!',
  'data|5-10': [
    {
      // id: '@increment(1)',//自增的ID
      'id|+1': 0,
      name: '@cword(2,5)',//随机生成中文字符串
      price: '@natural(2,10)',
      count: '@natural(100,999)',//自然数
      img: '@dataImage(78x78)'//宽高的图片
    }
  ]
})

Mock.mock('/api/addgoods', 'post', function (option) {
  // option是请求相关的参数
  console.log(option);
  return Mock.mock({
    status: 200,
    message: '@cword(2,5)'
  })
})

// Mock.mock(/\/api\/getgoods/, 'get', {
//   message: '获取商品成功!',
//   status: 200,
//   data: {
//     id: 9,
//     name: '苹果',
//     price: 2,
//     count: 199,
//     img: '@dataImage(78x78)'
//   },
// })
Mock.mock(/\/api\/getgoods/, 'get', function (option) {

  // 将请求信息中url中的id分离出来
  // let id = option.url.split('/')[option.url.split('/').length - 1]
  // console.log(option);
  const res = /\/api\/getgoods\/(\d+)/.exec(option.url)
  // console.log(res);
  return Mock.mock({
    message: '获取商品成功!',
    status: 200,
    data: {
      id: +res[1],
      name: '@fruit()',
      price: 2,
      count: 199,
      img: '@dataImage(78x78)'
    },
  })
})