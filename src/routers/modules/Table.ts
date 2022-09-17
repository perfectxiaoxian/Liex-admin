import { RouteRecordRaw } from "vue-router";

// 表单模块
const tableRouter: Array<RouteRecordRaw> = [
	{
		path: "/table",
		name: "table",
		redirect: "/superTable",
		meta: {
			keepAlive: false,
			requiresAuth: true,
			title: "超级表格",
			key: "table"
		},
		children: [
			{
				path: "/superTable",
				name: "superTable",
				component: () => import("@/views/table/Index.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "超级表格",
					key: "table"
				}
			}
		]
	}
];

export default tableRouter;
