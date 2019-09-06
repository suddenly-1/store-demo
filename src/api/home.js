import axios from 'axios'

//  获取banner
export const getHomeSlide = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: 1000
  }).then(res => {
    res = res.data
    if (res) {
      if (res.code === 0 && res.slider) {
        return res.slider
      }
    }
    throw new Error('获取错误！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
    return [{'picUrl': require('assets/img/404.png')}]
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        // console.log(data)
        resolve(data)
      }, 1000)
    })
  })
}

export const getHomeApi = () => {
  return axios.get('/api/banner.json', {
    timeout: 10000
  }).then(res => {
    if (res) {
      // console.log(res)
      return res.data.slides
    }
    throw new Error('获取错误！')
  }).catch(err => {
    if (err) {
      console.log(err)
      return [{picUrl: require('assets/img/404.png')}]
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      }, 1000)
    })
  })
}
