<template>
  <div>
    <h1>我是登录界面</h1>
    <h2>{{pageName}}</h2>
</div>
</template>
<script>
import { ref } from 'vue';

export default{
    name:"login",
    setup(){
        let pageName = ref("loginPage");
        return {pageName};
    }
}
</script>