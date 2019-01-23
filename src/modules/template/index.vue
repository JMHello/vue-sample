<template>
	<div>
		<h1>Template页面</h1>
		<p>{{ name }} - {{time}}</p>
		<button @click="handleOnClick">设置名称</button>
	</div>
</template>

<script>
import {
	stateMapper,
	gettersMapper,
	mutationsMapper,
	actionsMapper
} from "./mapper.js";

// 按需引入
const { name } = { ...stateMapper };
const { setName } = { ...mutationsMapper };
const { time } = { ...gettersMapper };
const { getInfo } = { ...actionsMapper };

export default {
	data() {
		return {};
	},
	computed: {
		// 引入全部state
		// ...stateMapper
		name,
		time
	},
	methods: {
		// 引入全部mutation
		// ...mutationsMapper,
		setName,
		getInfo,
		handleOnClick() {
			this.setName({
				name: "hhhh"
			});
			this.getInfo();
		}
	}
};
</script>
