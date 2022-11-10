import axios from 'axios'
import {useIndexStore} from '@/stores/index'
import {getToken} from '@/request/token'

const service = axios.create({
  // baseURL: process.env.BASE_API,
  baseURL: "http://localhost:9999",
  timeout: 100000
})

//request拦截器
service.interceptors.request.use(config => {
  let store = useIndexStore();

  if (store.token) {
    config.headers['Oauth-Token'] = getToken()
    // config.headers['Authorization'] = getToken()
  }
  return config
}, error => {

  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    let store = useIndexStore();

    //全局统一处理 Session超时
    if (response.headers['session_time_out'] == 'timeout') {
      // store.dispatch('fedLogOut')
      store.fedLogOut();
    }

    const res = response.data;

    //0 为成功状态
    if (res.code !== 200) {

      //90001 Session超时
      if (res.code === 90001) {
        return Promise.reject('error');
      }

      //20001 用户未登录
      if (res.code === 90002) {

        this.$message({
          type: 'warning',
          showClose: true,
          message: '未登录或登录超时，请重新登录哦'
        })

        return Promise.reject('error');
      }

      //70001 权限认证错误
      if (res.code === 70001) {
        this.$message({
          type: 'warning',
          showClose: true,
          message: '你没有权限访问哦'
        })
        return Promise.reject('error');
      }

      return Promise.reject(res.msg);
    } else {
      return response.data;
    }
  },
  error => {
    this.$message({
      type: 'warning',
      showClose: true,
      message: '连接超时'
    })
    return Promise.reject('error')
  })

export default service
