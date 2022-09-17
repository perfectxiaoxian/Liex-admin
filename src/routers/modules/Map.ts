import { RouteRecordRaw } from "vue-router";

const mapRoute: Array<RouteRecordRaw> = [
	{
		path: "/map",
		name: "map",
		children: [
			{
				path: "/aMap",
				name: "aMap",
				component: () => import("@/views/map/AMap.vue"),
				meta: {
					title: "高德地图"
				}
			}
		]
	}
];
export default mapRoute;
