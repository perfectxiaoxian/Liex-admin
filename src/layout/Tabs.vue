<template>
	<el-tabs v-model="tabValue" class="demo-tabs" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
		<el-tab-pane
			v-for="item in editableTabs"
			:key="item.name"
			:label="item.title"
			:name="item.name"
			:path="item.name"
			:closable="item.close"
		>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup lang="ts" name="Tabs">
import { TabsStore } from "@/store/modules/tabs";
import { TabsPaneContext } from "element-plus";
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const tabStore = TabsStore();
// const tabValue = computed(() => tabStore.tabsMenuValue);
// const editableTabs = computed(() => tabStore.tabsMenuList);
const tabValue = computed({
	get: () => {
		return tabStore.tabValue;
	},
	set: val => {
		tabStore.setTabsMenuValue(val);
	}
});
const editableTabs = computed(() => tabStore.tabList);
const route = useRoute();
const router = useRouter();

watch(
	() => route.path,
	() => {
		let params = {
			title: route.meta.title as string,
			path: route.path,
			name: route.name,
			close: true
		};
		tabStore.addTabs(params);
	},
	{
		immediate: true
	}
);

const tabClick = (value: TabsPaneContext) => {
	const name = value.props.name as string;
	router.push({ name });
};

const tabRemove = (name: string) => {
	tabStore.removeTabs(name);
};
</script>

<style lang="scss" scoped></style>
