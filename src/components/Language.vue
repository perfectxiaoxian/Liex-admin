<template>
	<span
		:class="[isZh ? 'liex-icon-fuhao-zhongwen' : 'liex-icon-fuhao-yingwen', 'cursor-pointer']"
		@click.stop="setLanguage_"
	></span>
</template>

<script lang="ts" setup name="Language">
import { GlobalStore } from "@/store";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const globalStore = GlobalStore();
const isZh = computed(() => globalStore.isZh);
const setLanguage_ = () => {
	globalStore.setLanguage();
	i18n.locale.value = isZh.value ? "zh" : "en";
};
</script>
<style scoped>
span {
	font-size: 1.4rem;
}
</style>
