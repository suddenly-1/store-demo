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

const shuffle = (arr) => {
  const arrLength = arr.length
  let i = arrLength
  let rndNum
  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]]
    }
  }
  return arr
}

export const getHomeApi = () => {
  return axios.get('/api/banner.json', {
    timeout: 10000
  }).then(res => {
    if (res) {
      // console.log(res)
      let soldes = res.data.slides
      const solde = [soldes[Math.floor(Math.random() * soldes.length)]]
      soldes = shuffle(soldes.filter(() => Math.random() >= 0.5))
      // return res.data.slides
      if (soldes.length === 0) {
        return solde
      }
      return soldes
    }
    throw new Error('获取错误！')
  }).catch(err => {
    if (err) {
      console.log(err)
      return [{picUrl: require('assets/img/404.png')}]
    }
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        // console.log(data)
        resolve(data)
      }, 1000)
    })
  })
}

//  获取navbar
export const getHomeNavbar = () => {
  return axios.get('/api/navbar.json', {
    timeout: 10000
  }).then(res => {
    if (res) {
      res = res.data
      if (res.coke === 0 && res.navbars) {
        return res.navbars
      }
    }
    throw new Error('获取错误！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(data)
        resolve(data)
      }, 1000)
    })
  })
}

// 热门推荐recommend
