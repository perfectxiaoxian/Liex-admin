import NProgress from "@/config/nprogress";
import router from "@/routers/Router";
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	NProgress.start();
	next();
});
router.afterEach(() => {
	NProgress.done();
});

export default router;
