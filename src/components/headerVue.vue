<template>
    <ul class="headList">
        <li>
            <div class="item logo">
                <div class="iconfont icon-logo">
                </div>
            </div>
        </li>
        <li>
	<!-- <router-link class="list-group-item" active-class="active" to="/login">登录</router-link> -->

            <router-link class="item" active-class="active" to="/article">
                <div class="iconfont icon-zhuye">
                </div>
                <div class="font">主页</div>
            </router-link>
        </li>
        <li>
            <router-link class="item" active-class="active" to="/category">
                <div class="iconfont icon-yingyong">
                </div>
                <div class="font">分类</div>
            </router-link>
        </li>
        <li>
            <div class="item">
                <div class="iconfont icon-24gf-tags2">
                </div>
                <div class="font">标签</div>
            </div>
        </li>
        <li>
            <div class="item">
                <div class="iconfont icon-shizhong">
                </div>
                <div class="font">时间归档</div>
            </div>
        </li>
        <li>
            <div class="item">
                <div class="iconfont icon-rizhi">
                </div>
                <div class="font">日志</div>
            </div>
        </li>
        <li>
            <div class="item">
                <div class="iconfont icon-liuyanban-05">
                </div>
                <div class="font">留言板</div>
            </div>
        </li>
    </ul>
</template>
<style lang="less" scoped>
.headList{
    width: 212px;
    padding: 0 12px;
    li{
        font-size: 18px;
        color: var(--main-font-color);

        .item{
            color: var(--main-font-color);
            display: flex;
            width: fit-content;
            align-items: center;
            padding: 12px;
            border-radius: 30px;
            &:hover{
                background-color: #1c1c1c;
            }
        }
        .item.logo .icon-logo::before{
            font-size: 37px;
        }
        .active{
            color:  #66b1ff;
        }
        .iconfont:before{
            font-size: 22px;
        }
        .font{
            margin: 0 20px 0 16px;
        }
    }
}

</style>

<script>
    export default {
        name:"headerVue",
        setup(){
            
        }
    }
</script>
