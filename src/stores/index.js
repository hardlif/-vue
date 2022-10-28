import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { removeToken } from '@/request/token';
import { getToken } from '@/request/token';

export const useIndexStore = defineStore('index', () => {

  let id = 0
  let account = ''
  let name = ''
  let avatar = ''
  let token = getToken()

  let count = 0
  
  function login(user) {
    return new Promise((resolve, reject) => {
      login(user.account, user.password).then(data => {
        if(data.success){
          // commit('SET_TOKEN', data.data)
          token = data.data;
          setToken(data.data)
          resolve()
        }else{
          reject(data.msg)
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
  function fedLogOut() {
    return new Promise(resolve => {
      token = ''
      account = ''
      name = ''
      avatar = ''
      id = ''
      removeToken()
      resolve()
    }).catch(error => {
      reject(error)
    })
  }
  
  // const doubleCount = computed(() => count.value * 2)
  

  return { id,account,name,avatar,token,login,fedLogOut,count}
})
