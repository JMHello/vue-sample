<template>
	<div></div>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			index: 1,
			message: "你好哟"
		};
	},
	beforeCreate() {
		console.group("beforeCreate 创建前状态===============》");
		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
		console.log("%c%s", "color:red", "message: " + this.message);
	},
	created() {
		console.group("created 创建完毕状态===============》");
		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
		console.log("%c%s", "color:red", "message: " + this.message);
	},
	beforeMount() {
		console.group("beforeMount 挂载前状态===============》");
		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
		console.log("%c%s", "color:red", "message: " + this.message);
	},
	mounted() {
		console.group("mounted 挂载结束状态===============》");
		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
		console.log("%c%s", "color:red", "message: " + this.message);
	},
	beforeUpdate() {
		console.group("beforeUpdate 更新前状态===============》");
		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
		console.log("%c%s", "color:red", "message: " + this.message);
	},
	updated() {
		console.group("updated 更新完成状态===============》");
		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
		console.log("%c%s", "color:red", "message: " + this.message);
	},
	beforeDestroy() {
		console.group("beforeDestroy 销毁前状态===============》");
		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
		console.log("%c%s", "color:red", "message: " + this.message);
	},
	destroyed() {
		console.group("destroyed 销毁完成状态===============》");
		console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
		console.log("%c%s", "color:red", "message: " + this.message);
	}
};
</script>

<style>
</style>
