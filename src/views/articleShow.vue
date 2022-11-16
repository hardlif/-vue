<template>
    <div class="page">
        
        <el-scrollbar max-height="100vh" 
            class="slider"
            ref="scrollbarRef">
            <div class="directory" v-html="directory">

            </div>
        </el-scrollbar>
        <el-scrollbar max-height="100vh" 
        v-loading="onloading" 
        element-loading-text="Loading..."
        element-loading-background="#363b40"
        class="articleShow"
        @scroll="scrollEvent">
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
import { nextTick, onMounted,onBeforeMount, ref, watch, reactive } from "vue"
// highlightjs
// import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/core';
//引入创建目录结构的函数
import toToc from "@/utils/toToc"

  export default {
    props:['id'],
    setup(props){
                    let articleBodyData = useArticleStore()
                    let content = ref("")
                    let directory = ref("")
                    let onloading = ref(true)
                    let heightArray = reactive([])
                    let directoryNode = []
                    let before = ''
                    let directoryHight = 0
                    const scrollbarRef = ref(null)
                  
                    //生成目录函数
                    function createDirectory(){
                        console.log("===========toc==============");
                        // let titles = document.querySelectorAll("h1,h2,h3")
                        // titles.forEach(element => {
                        //     directory.push(element.outerHTML)
                        // });

                        // directory.forEach((item, index) => {
                        //     let _toc = `<div name='toc-title' id='${index}'>${item} </div>`
                        //     content.value = content.value.replace(item, _toc)
                        //     })
                        
                        let data = content.value.match(new RegExp("<[hH][1-6].*?>.*?<\/[hH][1-6]>","g"))
                        data.forEach((item, index) => {
                            let _toc = `<div name='toc-title' id='${index}'>${item} </div>`
                            content.value = content.value.replace(item, _toc)
                            })
                        directory.value = toToc(data)
                        console.log("===========toc==============");
                    }
                    
                    function bindDirectoryHight(){
                        let nodeList = document.querySelectorAll("h1,h2,h3,h4,h5,h6")
                        directoryNode = document.querySelectorAll(".slider  li")
                        before = directoryNode[0]
                        before.className = "active"
                        directoryHight = document.querySelector(".directory").offsetHeight
                        nodeList.forEach(element => {
                            heightArray.push(element.offsetTop)
                        });
                    }
                    function scrollEvent(data) {
                        
                            useDirectory(data)
                       
                    }
                    function useDirectory(data){
                            let index = findIndex(0,directoryNode.length,data.scrollTop+200) - 1;
                        index = index < 0 ? 0 : index;
                        // console.log("对应的索引为",index);
                        // console.log("对应的节点为",directoryNode[index]);
                        before.className = ""
                        directoryNode[index].className = "active"
                        if (directoryNode[index].offsetTop >= 267 ) {
                            if (directoryHight 
                        - directoryNode[index].offsetTop - directoryNode[index].offsetHeight
                        > 320) {
                            scrollbarRef.value.setScrollTop(directoryNode[index].offsetTop-267)
                                
                            } else {
                            scrollbarRef.value.setScrollTop(directoryHight-document.body.offsetHeight+20)
                            }
                        }
                        before = directoryNode[index]
                        
                        
                    }

                    function findIndex(left,right,scrollTop){
                            if(right - left == 0)
                             return left;
                            if (scrollTop<=heightArray[Math.floor(left+(right-left)/2)]) 
                               return findIndex(left,Math.floor(left+(right-left)/2),scrollTop);
                            else 
                                return findIndex(Math.floor(left+(right-left)/2)+1,right,scrollTop);
                    }
                    onBeforeMount(()=>{
                    })
                    onMounted(async()=>{
                        console.log("挂载成功");
                        console.log("获取的参数为",props.id);
                        console.log(articleBodyData);
                        content.value = await articleBodyData.getArticleBody(props.id)
                        createDirectory();
                        nextTick(()=> {
                        bindDirectoryHight();
                        hljs.highlightAll();
                        onloading.value = false
                            })

                    })
                    watch(content,(a)=>{
                        // nextTick()
                    })
                    return{
                        content,
                        onloading,
                        directory,
                        useDirectory,
                        heightArray,
                        scrollbarRef,
                        scrollEvent
                    }
    }
  }
</script>

<style lang="less" scoped>

    :deep(.slider){
        width: 19%;
        background-color: #2e3033;
        .directory{
            ul{
                padding: 0;
            }
            li{
                padding: 3px 0;
                &:hover{
                    background-color: #3d3c44;
                }
             
                &[data-level="2"]{
                    color: red;
                    padding-left: 20px;
                }
                &[data-level="3"]{
                    color: red;
                    padding-left: 30px;
                }
                &[data-level="4"]{
                    color: red;
                    padding-left: 40px;
                }
                &[data-level="5"]{
                    color: red;
                    padding-left: 50px;
                }
                &[data-level="6"]{
                    color: red;
                    padding-left: 60px;
                }
                &.active{
                    a{
                        color: white;
                        font-weight: bolder;
                    }
                }
            }
            a{
                color: #b8bfc6;
                word-wrap:break-word;
                font-size: 12px;
                &:hover{
                    color: white;
                    border-bottom: 1px white solid;
                }
                
            }

        }
    }
    .page{
        display: flex;
        width: 100%;
        height: 100vh;
        background-color: #363b40;
    
    }
 

    :deep(.articleShow){
        flex: 1;
        // padding: 0 11%;
        h1,h2,h3,h4,h5,h6{ 
        color: #dedede;
        }

        //设置图标颜色
        .el-loading-spinner .path{
        stroke: #dedede;
        }

        //设置文字颜色
        .el-loading-spinner .el-loading-text{
        color: #dedede;
        }
        //设置关键字颜色
        code{
            background-color: #33383d;
            padding: 0 4px;
            border-radius: 3px;
            font-family: monospace;
        }
        p{
            color: #b8bfc6;
        }
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

}

    //高亮代码块
    /* 语法高亮 */




</style>