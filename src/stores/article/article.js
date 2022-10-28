import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import {getArticles} from "@/api/article"

// export const useArticleStore = defineStore('article', () => {
//   let articleList = reactive([])  
//   function getArticleList() {
//     // 发起一个post请求
//      getArticles({},{
//       page : 1,
//       pageSize : 6
//      }).then(responce=>{
//         console.log("==========在stores中验证=================");
//         console.log(responce);
//         articleList = responce.data;
//         console.log(articleList);
//         console.log("==========在stores中验证=================");

//      })
//   }

//   return { articleList,getArticleList }
// })

export const useArticleStore = defineStore('article',
      {
        state: ()=>({
            articleList : []
        }),
        getters : {},
        actions:{
        getArticleList() {
            // 发起一个post请求
            getArticles({},{
              page : 1,
              pageSize : 6
            }).then(responce=>{
                console.log("==========在stores中验证=================");
                this.articleList = responce.data
                console.log(this.articleList);
                console.log("==========在stores中验证=================");

            })
      }
        }
      }
  
)
