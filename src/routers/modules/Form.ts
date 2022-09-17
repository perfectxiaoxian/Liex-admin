import { RouteRecordRaw } from "vue-router";

// 表单模块
const formRouter: Array<RouteRecordRaw> = [
	{
		path: "/form",
		name: "form",
		redirect: "/basicsForm",
		meta: {
			keepAlive: false,
			requiresAuth: true,
			title: "表单",
			key: "form"
		},
		children: [
			{
				path: "/basicsForm",
				name: "basicsForm",
				component: () => import("@/views/form/BasicsForm.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "基础表单",
					key: "basicsForm"
				}
			},
			{
				path: "/verifyForm",
				name: "verifyForm",
				component: () => import("@/views/form/VerifyForm.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "校验表单",
					key: "verifyForm"
				}
			}
		]
	}
];

export default formRouter;
