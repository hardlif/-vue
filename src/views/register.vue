<template>
    <h1>我是注册界面</h1>
    <h2>{{pageName}}</h2>
</template>
<script>
import { ref } from 'vue';
//将markdown转为html页面
import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';
export default{
    name:"register",
    setup(){
        let pageName = ref("registerPage");

        return {pageName,html};

    }
}
</script>