<template>
	<el-switch
		v-model="themeConfig.isDark"
		@change="onAddDarkChange"
		inline-prompt
		active-color="#0a0a0a"
		inactive-color="#dcdfe6"
		:active-icon="Sunny"
		:inactive-icon="Moon"
	/>
</template>

<script setup lang="ts" name="SwitchDark">
import { computed, onMounted } from "vue";
import { GlobalStore } from "@/store";
import { Sunny, Moon } from "@element-plus/icons-vue";
const globalStore = GlobalStore();

const themeConfig = computed(() => globalStore.themeConfig);

onMounted(() => {
	switchTheme();
});

const switchTheme = () => {
	const body = document.documentElement as HTMLElement;
	if (themeConfig.value.isDark) body.setAttribute("class", "dark");
	else body.setAttribute("class", "");
};

const onAddDarkChange = (value: boolean) => {
	globalStore.setThemeConfig({
		...themeConfig.value,
		isDark: value
	});
	switchTheme();
};
</script>
