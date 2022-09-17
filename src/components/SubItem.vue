<template>
	<template v-for="subItem in menuList" :key="subItem.path">
		<el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
			<template #title>
				<el-icon v-if="subItem.icon">
					<component :is="subItem.icon"></component>
				</el-icon>
				<span>{{ subItem.title }}</span>
			</template>
			<SubItem :menuList="subItem.children" />
		</el-sub-menu>
		<el-menu-item v-else :index="subItem.path">
			<el-icon v-if="subItem.icon">
				<component :is="subItem.icon"></component>
			</el-icon>
			<template v-if="subItem.isLink" #title>
				<a class="href" :href="subItem.isLink" target="_blank">{{ subItem.title }}</a>
			</template>
			<template v-else #title>
				<span>{{ subItem.title }}</span>
			</template>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts" name="SubItem">
defineProps<{ menuList: Menu.MenuOptions[] }>();
</script>

<style scoped lang="scss"></style>
