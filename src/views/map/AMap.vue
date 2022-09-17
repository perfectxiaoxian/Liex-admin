<template>
	<div style="width: 100%; height: 100%">
		<div id="container"></div>
	</div>
</template>
<script setup lang="ts" name="AMap">
import AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted } from "vue";
import { shallowRef } from "@vue/reactivity";
import { ConfigUtils } from "@/utils/ConfigUtils";
//使用 shallowRef 进行非深度监听，因为在 Vue3 所使用的 Proxy 拦截操作会改变 JSAPI 原生对象，所以此处需要区别 Vue2 使用方式对地图对象行非深度监听，否则会出现问题，建议 JS API 相关对象采用非响应式的普通对象来存储
let map: any = shallowRef(null);
let AMap: any = null;
onMounted(() => {
	initMap();
});
const initMap = async () => {
	AMap = await AMapLoader.load({
		key: ConfigUtils.map.key, // 申请好的Web端开发者Key，首次调用 load 时必填
		version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
		plugins: [] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
	}).catch((e: any) => {
		console.log(e);
		return false;
	});
	if (!AMap) return;
	map = new AMap.Map("container", {
		viewMode: "3D",
		zoom: 4, //初始化地图级别
		center: [121.7980722, 31.34003] //初始化地图中心点位置
	});
	console.log(map);
};
</script>
<style scoped>
#container {
	width: 100%;
	height: 100%;
}
</style>
