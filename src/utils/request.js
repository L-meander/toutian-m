/*封装axios请求*/
import axios from 'axios'

const request = axios.create({
  baseURL: ' http://ttapi.research.itcast.cn/mp/' //基础地址
})

// 请求拦截器

// 响应拦截器

export default request

