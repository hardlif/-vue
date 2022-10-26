<template>
    <h1>我是注册界面</h1>
    <h2>{{pageName}}</h2>
</template>
<script>
import { ref } from 'vue';

export default{
    name:"register",
    setup(){
        let pageName = ref("registerPage");
        return {pageName};
    }
}
</script>