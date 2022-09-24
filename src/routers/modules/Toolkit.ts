import { RouteRecordRaw } from "vue-router";

const ToolkitRouter: Array<RouteRecordRaw> = [
	{
		path: "/toolkit",
		name: "toolkit",
		redirect: "directives",
		meta: {
			keepAlive: false,
			requiresAuth: true,
			title: "工具",
			key: "toolkit"
		},
		children: [
			{
				path: "/directives",
				name: "directives",
				component: () => import("@/views/toolkit/Directives.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "自定义指令",
					key: "directives"
				}
			}
		]
	}
];
export default ToolkitRouter;
