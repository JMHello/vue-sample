<template>
	<div>
		<router-link to="/detail/jm/1">
			<span>go to detail</span>
		</router-link>

		<router-link to="/template">
			<span>go to template</span>
		</router-link>

		<p>你好，你是？我是{{ name }}</p>
		<button @click="sayHello">click</button>
	</div>
</template>

<script>
import Select from "../components/Select";
export default {
	data() {
		return {
			name: "",
			index: 1,
			message: "你好哟",
			bookList: [
				{
					id: 1,
					name: "1"
				},
				{
					id: 2,
					name: "2"
				},
				{
					id: 3,
					name: "3"
				},
				{
					id: 4,
					name: "4"
				},
				{
					id: 5,
					name: "5"
				}
			]
		};
	},
	// beforeCreate() {
	// 	console.group("beforeCreate 创建前状态===============》");
	// 	console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
	// 	console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
	// 	console.log("%c%s", "color:red", "message: " + this.message);
	// },
	// created() {
	// 	console.group("created 创建完毕状态===============》");
	// 	console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
	// 	console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
	// 	console.log("%c%s", "color:red", "message: " + this.message);
	// },
	// beforeMount() {
	// 	console.group("beforeMount 挂载前状态===============》");
	// 	console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
	// 	console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
	// 	console.log("%c%s", "color:red", "message: " + this.message);
	// },
	// mounted() {
	// 	console.group("mounted 挂载结束状态===============》");
	// 	console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
	// 	console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
	// 	console.log("%c%s", "color:red", "message: " + this.message);
	// },
	// beforeUpdate() {
	// 	console.group("beforeUpdate 更新前状态===============》");
	// 	console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
	// 	console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
	// 	console.log("%c%s", "color:red", "message: " + this.message);
	// },
	// updated() {
	// 	console.group("updated 更新完成状态===============》");
	// 	console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
	// 	console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
	// 	console.log("%c%s", "color:red", "message: " + this.message);
	// },
	// beforeDestroy() {
	// 	console.group("beforeDestroy 销毁前状态===============》");
	// 	console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
	// 	console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
	// 	console.log("%c%s", "color:red", "message: " + this.message);
	// },
	// destroyed() {
	// 	console.group("destroyed 销毁完成状态===============》");
	// 	console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
	// 	console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
	// 	console.log("%c%s", "color:red", "message: " + this.message);
	// },
	methods: {
		sayHello() {
			this.name = "jmazm" + this.index++;
		}
	}
};
</script>

<style lang="scss">
* {
	font-size: 18rpx;
	width: 100rpx;
}
</style>

