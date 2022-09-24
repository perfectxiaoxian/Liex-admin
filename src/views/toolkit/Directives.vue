<template>
	<div class="directives">
		<el-button type="primary" size="small" v-debounce="debounce">防抖指令 (1s后执行)</el-button>
		<el-button type="primary" size="small" v-debounce="throttle">节流指令 (1s后按钮再次激活)</el-button>
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
</script>
<style lang="sass"></style>
