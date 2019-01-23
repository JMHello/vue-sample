<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
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
	created() {
		// console.log(this.$router);
		// console.log(this.$route);
	}
};
</script>

