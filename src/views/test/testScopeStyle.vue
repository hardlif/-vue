<template>
    <div class="father">
        样式一
        <li>样式</li>
    </div>
    <son></son>
</template>
<script>
import son from './test3.vue';
export default {
    components:{
        son
    }
}
</script>
<style scoped>
    body{
        background-color: white;
    }
    .father{
        background-color: red;
    }
    .father li{
        background-color: aqua;
    }
    /* div{
        background-color: aqua;
    } */
</style>