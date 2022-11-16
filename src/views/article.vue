<template>
    <div class="main">
    
        <el-scrollbar height="580px">
            <articleItem 
            :authorName="item.authorName"
            :title="item.title"
            :summary="item.summary"
            :tags = "item.tags"
            :data-id="item.id"
            v-for="item in articleList" :key="item.id"
            @click="toArticle(item.id)"
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
    // import router from '@/router/index';
    import {useRouter} from 'vue-router';

    export default{
        components:{
            articleItem
        },
        setup(){
            let router = useRouter()
            let articleStore = useArticleStore();
            let {articleList} = storeToRefs(articleStore);
            function toArticle(id) {
                router.push({path:`/article/${id}`}) // -> /user/eduardo
                // console.log(router)
            } 
            onMounted(()=>{
                articleStore.getArticleList();
                
            })
            
            return  {
                articleList,
                toArticle
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