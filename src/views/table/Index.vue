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
			<el-table-column prop="name" label="用户名" width="180" />
			<el-table-column prop="email" label="邮箱" width="180" />
			<el-table-column prop="industry" label="行业" />
			<el-table-column prop="company" label="公司" />
			<el-table-column prop="department" label="部门" />
			<el-table-column prop="" label="年龄" />
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
