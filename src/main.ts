import { createApp } from "vue";

import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./routers/Index";
// element icons
import * as Icons from "@element-plus/icons-vue";
// iconfont css
import "@/assets/iconfont/iconfont.css";
// i18n
import I18n from "@/language/index";

//tool directives
import directives from "@/directive/Directive";

/* css */
// element css
import "element-plus/dist/index.css";
// element dark
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/layout.scss";
import "@/styles/common.scss";
import "@/styles/element.scss";
import "@/styles/element-dark.scss";

import pinia from "@/store/Index";

const app = createApp(App);

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(router).use(I18n).use(pinia).use(ElementPlus).use(directives).mount("#app");
