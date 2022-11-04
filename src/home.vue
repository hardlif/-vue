<template>
	
	<div class="all">

		<headerVue class="header"></headerVue>
		<router-view></router-view>
	
	</div>
</template>

<script>
	import {onMounted,reactive,ref} from 'vue';
	// import loginVue from './views/login.vue';
	// import registerVue from './views/register.vue';
	import headerVue from '@/components/headerVue.vue';
	import {useIndexStore} from "@/stores/index"
	export default {
		name: 'App',
		components : {headerVue},
		setup(){
			let stores = useIndexStore();
			let usera = reactive( {
				name :"zhangsassn",
				age : 18
			})
			onMounted(()=>{
				
			})

			//返回一个对象（常用）
			return {
				headerVue,
				usera,
				stores
			}
		}
	}
</script>

<style lang="less">
	.all{
		display: flex;
		
	}
	
</style>