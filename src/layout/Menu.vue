<template>
	<div id="menu" :style="{ width: isCollapse ? '65px' : '220px' }">
		<el-scrollbar>
			<el-menu
				:default-active="activeMenu"
				:collapse="isCollapse"
				:collapse-transition="false"
				:router="true"
				:unique-opened="true"
			>
				<SubItem :menuList="menuList"></SubItem>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script setup lang="ts" name="Menu">
import { computed, ref } from "vue";
import SubItem from "@/components/SubItem.vue";
import { ConfigUtils } from "@/utils/ConfigUtils";
import { useRoute } from "vue-router";
import { MenuStore } from "@/store/modules/menu";
const menuStore = MenuStore();

const route = useRoute();
const activeMenu = computed((): string => route.path);
const isCollapse = computed((): boolean => menuStore.isCollapse);
const menuList = computed((): Menu.MenuOptions[] => ConfigUtils.menu);

const screenWidth = ref<number>(0);
const screenHeight = ref<number>(0);
//监听窗口大小
const listeningWindow = () => {
	window.onresize = () => {
		return (() => {
			screenWidth.value = document.body.clientWidth;
			screenHeight.value = document.body.clientHeight;
			if (isCollapse.value === false && screenWidth.value < 1200) menuStore.setCollapse();
			if (isCollapse.value === true && screenWidth.value > 1200) menuStore.setCollapse();
		})();
	};
};
listeningWindow();
</script>

<style lang="scss"></style>
