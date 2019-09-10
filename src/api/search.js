import axios from 'axios'
import jsonp from 'assets/js/jsonp'

//  获取热门搜索
export const getSearchHot = () => {
  return axios.get('http://www.imooc.com/api/search/hot', {
    timeout: 10000
  }).then(res => {
    if (res) {
      return res.data.hotKeyWord
    }
    throw new Error('获取错误！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      }, 200)
    })
  })
}
//  获取搜索结果
export const getResult = keyword => {
  const url = 'https://suggest.taobao.com/sug'
  const params = {
    q: keyword,
    code: 'utf-8',
    area: 'c2c',
    nick: '',
    sid: null
  }
  const jsonpOptions = {
    param: 'callback',
    timeout: 10000
  }
  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.result) {
      return res.result
    }
    throw new Error('获取错误！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 200)
    })
  })
}
