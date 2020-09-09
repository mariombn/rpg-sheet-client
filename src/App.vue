<template>
	<div id="app" style="margin-bottom: 50px;">
		<Header />

		<router-view path="$router.key" />
	</div>
</template>

<script>
	import './assets/css/bootstrap.dark.min.css';
	//import './assets/css/app.css';

	import Header from './components/Header.vue';

	export default {
		name: 'App',
		data() {
			return {
				$auth: {},
				$message: {
					success: null,
					danger: null
				},
				messageTemp: {
					success: null,
					danger: null
				},
			}
		},
		components: {
			Header
		}
	}
</script>

<style scoped>
	.message-area {
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>