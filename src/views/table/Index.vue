<template>
	<div>
		<el-form :inline="true" :model="formData">
			<el-form-item label="Approved by">
				<el-input v-model="formData.user" placeholder="Approved by" />
			</el-form-item>
			<el-form-item label="Activity zone">
				<el-select v-model="formData.region" placeholder="Activity zone">
					<el-option label="Zone one" value="shanghai" />
					<el-option label="Zone two" value="beijing" />
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" :icon="Search" size="small" @click="onSubmit">查询</el-button>
				<el-button size="small" :icon="Delete" @click="onReset">重置</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="Date" width="180" />
			<el-table-column prop="name" label="Name" width="180" />
			<el-table-column prop="address" label="Address" />
		</el-table>
	</div>
</template>

<script setup lang="ts" name="Table">
import { Search, Delete } from "@element-plus/icons-vue";
let tableData: any[] = [];
let formData: any = {};

const onSubmit = () => {
	console.log();
};
const onReset = () => {
	console.log();
};
</script>

<style lang="sass"></style>
