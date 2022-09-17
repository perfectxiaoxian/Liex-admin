import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/Layout.vue";

// * 导入所有router
const metaRouters: Record<string, any> = import.meta.glob("./modules/*.ts", { eager: true });

export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "home",
		redirect: "/home",
		component: Layout,
		meta: {
			keepAlive: true,
			requiresAuth: false,
			title: "首页",
			key: "home"
		},
		children: [
			{
				path: "/home",
				name: "home",
				component: () => import("@/views/home/Index.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: false,
					title: "首页",
					key: "home"
				}
			},
			...routerArray
		]
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/Index.vue"),
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	}
];

// menuStore.setMenuList();
const router = createRouter({
	history: createWebHashHistory(),
	routes,
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 })
});
export default router;
