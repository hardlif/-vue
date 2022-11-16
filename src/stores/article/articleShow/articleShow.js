import { defineStore } from 'pinia'
import {getViewArticle} from "@/api/article"
import {md2html} from "@/utils/md2htmlUtils"

export const useArticleStore = defineStore('ariticleView',
      {
        state: ()=>({
            articleBody : ""
        }),
        getters : {},
        actions:{
        async getArticleBody(id) {
            // 发起一个post请求
            await getViewArticle(id).then(responce=>{
                this.articleBody = md2html(responce.data.articleBodyVo.content)

            })
            return this.articleBody;  
      }
        }
      }
  
)
