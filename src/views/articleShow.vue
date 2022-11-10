<template>
    <div class="page">
        
        <div class="slider">

        </div>
        <el-scrollbar max-height="100vh" class="articleShow">
            <div class="custom" v-html="content">
              
            </div>
            <!-- <div class="hljs-container">
                <highlightjs language="java" autodetect code="
                int main(){
                    system.out.println('hhadfsafh');
                    return 0;
                }
                " />
            </div> -->
        </el-scrollbar>
    </div>
</template>

<script>
import {useArticleStore} from "@/stores/article/articleShow/articleShow"
import { nextTick, onMounted,onBeforeMount, ref, watch } from "vue"
// highlightjs
// import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/core';


  export default {
    setup(){
                    let articleBodyData = useArticleStore()
                    let content = ref("")
                    
                    onBeforeMount(async()=>{

                    })
                    onMounted(async()=>{
                        console.log("挂载成功");
                        content.value = await articleBodyData.getArticleBody()
                        nextTick(()=> {
                        console.log("===========code=============");
                        console.log(document.querySelectorAll("pre code"));
                        console.log("===========code=============");
                        hljs.highlightAll();
                            })

                    })
                    watch(content,(a)=>{
                        // nextTick()
                      
                    })
                    return{
                        content
                    }
    },
    mounted(){
        // console.log(this.$hljs);
        // this.content = this.$hljs.highlightAuto(this.conntent).value;
        
    }
  }
</script>

<style lang="less">

    .slider{
        width: 19%;
        background-color: #2e3033;
    }
    .page{
        display: flex;
        width: 100%;
        height: 100vh;
        background-color: #363b40;
    }
    h1,h2,h3,h4,h5,h6{ 
        color: #dedede;
    }
    // h1{
    //     margin: 14px 0;
    // }
    // h2{
    //     margin: 14px 0;
    // }
    p{
        color: #b8bfc6;
       
    }
    .articleShow{
        flex: 1;
        // padding: 0 11%;
        .custom{
            width: 100%;
            padding: 0 11%;
        }
        a{
            color: #abb2bf;
            text-decoration: revert;
        }
        ol li{
            list-style:auto;
            &::marker{
                color: #b8bfc6;
            }
        }

        ul li{
            // list-style:auto;
            color: #b8bfc6;
            list-style: unset;
            &::marker{
                color: #b8bfc6;
            }
        }
        //对于>括号形式操作
    blockquote {
        border-left: 3px solid #616161;
        font-size: 13px;
        margin-left: 0;
        padding-left: 20px;
        color: #9da2a6;
    }
       
    }

    //高亮代码块
    /* 语法高亮 */

.hljs-container {
    margin: 10px 0;
    border-radius: 8px;
    position: relative;
    display: block;
    width: 100%;
    padding: 30px 5px 2px;
    overflow-x: hidden;
    line-height: 20px;
    text-align: left;
    background: #151718;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 40%);
    code{
    background-color: #151718;
    color: #abb2bf;
    font-size: 14px;
    font-family: Source Code Pro,DejaVu Sans Mono,Ubuntu Mono,Anonymous Pro,Droid Sans Mono,Menlo,Monaco,Consolas,Inconsolata,Courier,monospace,PingFang SC,Microsoft YaHei,sans-serif;
}
    pre{
        padding: 0;
        margin: 0;
    }
   
}
 

/** 3个点 */
.hljs-container::before {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 12px;
    height: 12px;
    overflow: visible;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    white-space: nowrap;
    text-indent: 75px;
    background-color: #fc625d;
    border-radius: 16px;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    content: attr(codetype);
}

/** 滚动条 */
.hljs {
    overflow-x: auto;
}

.hljs::-webkit-scrollbar{
    width: 12px !important;
    height: 12px !important;
}

.hljs::-webkit-scrollbar-thumb{
    height: 30px !important;
    background: #d1d8e6;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 19px;
    opacity: 0.8;
}
.hljs::-webkit-scrollbar-thumb:hover{
    background: #a5b3cf;
    background-clip: content-box;
    border: 2px solid transparent;
}

.hljs::-webkit-scrollbar-track-piece{
    width: 30px;
    height: 30px;
    background: #333;
}

::-webkit-scrollbar-button {
    display: none;
}


</style>