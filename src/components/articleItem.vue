<template>
    <div class="cell">
        <h3>第一篇文章标题</h3>
        <p>十九大以来的五年，是极不寻常、极不平凡的五年。党中央统筹中华民族伟大复兴战略全局和世界百年未有之大变局，
            召开七次全会，分别就宪法修改，深化党和国家机构改革，坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，
            制定“十四五”规划和二〇三五年远景目标
        </p>
        <div class="bottom">
            
            <div class="author">
                <el-avatar :icon="UserFilled"  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                </el-avatar>
                <div class="name">admin</div>
            </div>
            <ul class="spans">
                <li>c++</li>
                <li>java</li>
                <li>python</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { UserFilled } from '@element-plus/icons-vue'

</script>


<style lang="less">
    .cell{
        padding: 12px;
        width: 100%;
		border:1px  solid rgb(47, 51, 54);
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
                    padding: 2px 6px;
                    background-color: #66b1ff;
                    border-radius: 20px;
                    margin:0 5px ;
                }
            }
        }
    }
</style>