import { defineStore } from 'pinia'
import {getViewArticle} from "@/api/article"
import {md2html} from "@/utils/md2htmlUtils"

export const useArticleStore = defineStore('article',
      {
        state: ()=>({
            articleBody : ""
        }),
        getters : {},
        actions:{
        async getArticleBody() {
            // 发起一个post请求
            await getViewArticle(1111).then(responce=>{
                console.log("==========在stores中验证=================");
                this.articleBody = md2html(responce.data.articleBodyVo.content)
                console.log("==========在stores中验证=================");

            })
            return this.articleBody;  
      }
        }
      }
  
)
