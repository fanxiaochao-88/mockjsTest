import { Random } from 'mockjs'

// 创建自定义mock函数
Random.extend({
  'fruit': function () {
    const arr = ['苹果', '榴莲', '橘子', '火龙果', '芒果', '葡萄', '哈密瓜']
    return this.pick(arr)
  }
})