<template>
    <div class="cell">
        <h3>{{title}}</h3>
        <p>{{summary}}
        </p>
        <div class="bottom">
            
            <div class="author">
                <el-avatar :icon="UserFilled"  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                </el-avatar>
                <div class="name">{{authorName}}</div>
            </div>
            <ul class="spans">
                <li v-for="item in tags" :key="item.id">{{item.tagName}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {UserFilled } from '@element-plus/icons-vue'
export default {
    props:["authorName","title","summary","tags"],
        setup(){

            return {
                UserFilled
            }
        }
    }

</script>


<style lang="less">
    .cell{
        padding: 12px;
        width: 95%;
		border:1px  solid rgb(47, 51, 54);
        border-radius: 10px;
        margin-bottom: 20px;
        color: var(--main-font-color);
        h3{
            font-size: 16px;
            margin-bottom: 8px;
        }
        p{
            font-size: 14px;
        }
        .bottom{
            display: flex;
            align-items: center;
            padding: 10px 0 0;
            justify-content: space-between;
            .author{
                display: flex;
                align-items: center;
                .name{
                    margin-left: 13px;
                    font-weight: bolder;
                }
            }
            ul{
                display: flex;
                font-size: 14px;
                li{
                    padding: 2px 8px;
                    background-color: #66b1ff;
                    border-radius: 20px;
                    margin:0 5px ;
                }
            }
        }
    }
</style>