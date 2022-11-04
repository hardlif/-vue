<template>
    <div class="main">
    
        <el-scrollbar height="580px">
            <articleItem 
            :authorName="item.authorName"
            :title="item.title"
            :summary="item.summary"
            :tags = "item.tags"
            v-for="item in articleList" :key="item.id"
            >
            </articleItem>
        </el-scrollbar>
    </div>
</template>

<script>
    import articleItem from '@/components/articleItem.vue';
    import { onMounted } from 'vue';
    import { storeToRefs } from 'pinia'
    import {useArticleStore} from '@/stores/article/article';
    export default{
        components:{
            articleItem
        },
        setup(){
            
            let articleStore = useArticleStore();
            let {articleList} = storeToRefs(articleStore);

            onMounted(()=>{
                articleStore.getArticleList();
                
            })
            
            return  {
                articleList
            }
        }
    }
</script>

<style lang="less">
 
    .main{
		// border:1px  solid rgb(47, 51, 54);
        margin-top: 20px;
		width: 700px;
	}
</style>