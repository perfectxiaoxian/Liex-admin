<template>
	<div id="layout">
		<el-container>
			<el-aside id="menus">
				<Menu></Menu>
			</el-aside>
			<el-container id="content">
				<el-header>
					<Header></Header>
				</el-header>
				<el-main id="layout-main" class="d-flex flex-column">
					<div id="layout-tabs">
						<Tabs></Tabs>
					</div>
					<div id="layout-window" class="flex-1">
						<div id="layout-view">
							<router-view v-slot="{ Component, route }">
								<transition appear name="fade-transform" mode="out-in">
									<keep-alive>
										<component :is="Component" :key="route.path"></component>
									</keep-alive>
								</transition>
							</router-view>
						</div>
					</div>
				</el-main>
				<el-footer id="layout-footer">
					<Footer></Footer>
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts" name="Layout">
import Header from "./Header.vue";
import Menu from "./Menu.vue";
import Footer from "./Footer.vue";
import Tabs from "./Tabs.vue";
// import cacheRouter from "@/routers/cacheRouter";
</script>

<style lass="sass">
#content {
	flex: 1;
}
</style>
