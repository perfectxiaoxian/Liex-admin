<template>
	<div id="header" class="d-flex justify-evenly align-item-center">
		<div class="header-l d-flex align-item-center">
			<CollapseIcon></CollapseIcon>
			<Breadcrumb></Breadcrumb>
		</div>
		<div class="header-r flex-1 d-flex justify-end align-item-center">
			<Language></Language>
			<SwitchDark></SwitchDark>
		</div>
	</div>
</template>

<script setup lang="ts" nam`e="Header">
import SwitchDark from "@/components/SwitchDark.vue";
import Language from "@/components/Language.vue";
import CollapseIcon from "@/components/CollapseIcon.vue";
import Breadcrumb from "./Breadcrumb.vue";
</script>

<style lang="scss" scoped></style>
