<template>

	<div class="all">

		<headerVue class="header"></headerVue>
		<router-view></router-view>
	
	</div>
	<!-- <loginVue></loginVue>
	<registerVue></registerVue> -->
</template>

<script>

	import {reactive, ref} from 'vue'
    import axios from 'axios'
	import {
		Check,
		Delete,
		Edit,
		Message,
		Search,
		Star,
		Share
		} from '@element-plus/icons-vue'
	// import loginVue from './views/login.vue';
	// import registerVue from './views/register.vue';
	import headerVue from '@/components/headerVue.vue';
	export default {
		name: 'App',
		// 子组件
		// components:{
		// 	loginVue,
		// 	registerVue
		// },
		components : {headerVue},
		setup(){
			//数据
			let name = ref('张三')
			let age = ref(18)
			let job = reactive({
				type:'前端工程师',
				salary:'30K'
			});
			let value = ref('');
			
			//方法
			function changeInfo(){
				// name.value = '李四'
				// age.value = 48
				console.log(job.value);
				// job.value.type = 'UI设计师'
				// job.value.salary = '60K'
				console.log(name,age)
			};

            function sendAjax(){
				console.log("发送了请求");

               // 发起一个post请求
				axios({
					method: 'post',
					url: 'http://localhost:9999/article',
					data: {
					page: 1,
					pageSize: 6
					}
				}).then(responce=>{
					console.log(responce);
				})
            };

			//返回一个对象（常用）
			return {
				name,
				age,
				job,
				changeInfo,
				sendAjax,
				value,
				Check,
				Delete,
				Edit,
				Message,
				Search,
				Star,
				Share,
				headerVue
			}
		}
	}
</script>

<style lang="less">
	.all{
		display: flex;
		
	}
	
</style>