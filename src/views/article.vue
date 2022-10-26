<template>
    <div class="main">
    
        <el-scrollbar height="580px">
            <articleItem>
            </articleItem>
            <articleItem>
            </articleItem>
            <articleItem>
            </articleItem>
            <articleItem>
            </articleItem>
            <articleItem>
            </articleItem>
        </el-scrollbar>
    </div>
</template>

<script>
    import articleItem from '@/components/articleItem.vue';
    export default{
        components:{
            articleItem
        }
    }
</script>

<style lang="less">
 
    .main{
		border:1px  solid rgb(47, 51, 54);
		width: 600px;
	}
</style>