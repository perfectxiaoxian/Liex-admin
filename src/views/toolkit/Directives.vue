<template>
	<div class="directives">
		<el-button type="primary" size="small" v-debounce="debounce">防抖指令 (1s后执行)</el-button>
		<el-button type="primary" size="small" v-throttle="throttle">节流指令 (1s后按钮再次激活)</el-button>
		<div style="width: 500px; height: 500px; position: relative; border: 1px solid red">
			<div v-dragBasics="drag" style="width: 100px; height: 100px; background-color: red"></div>
		</div>

		<div class="d-flex justify-between" style="width: 1000px; position: relative">
			<div v-groupDrag="groupDrag" style="width: 500px; height: 500px; border: 1px solid red">
				<div style="width: 100px; height: 100px; background-color: red"></div>
			</div>
			<div v-groupDrag="groupDrag" style="font-size: 10px; width: 400px; height: 500px; border: 1px solid red">
				<div style="width: 100px; height: 100px; background-color: green"></div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup name="Directives">
import { ElMessage } from "element-plus";

const debounce = () => {
	ElMessage.success("我是防抖指令");
};
const throttle = () => {
	ElMessage.success("我是节流指令");
};

const drag = () => {
	console.log("我被拖拽了");
};

const groupDrag = {
	key: "ceshi",
	action: () => {
		console.log(123);
	}
};
</script>
<style lang="sass"></style>
