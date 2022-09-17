import { defineStore } from "pinia";
import { TabPaneProps } from "element-plus";
import { TabsState } from "../interface/Index";
import piniaPersistConfig from "@/config/piniaPersist";
import { HOME_URL, TABS_BLACK_LIST } from "@/config/config";
import router from "@/routers/Index";

export const TabsStore = defineStore({
	id: "TabState",
	state: (): TabsState => ({
		tabValue: HOME_URL,
		tabList: [{ title: "首页", name: HOME_URL, path: HOME_URL, icon: "home-filled", close: false }]
	}),
	getters: {},
	actions: {
		// Add Tabs
		async addTabs(tabItem: Menu.MenuOptions) {
			// not add tabs black list
			if (TABS_BLACK_LIST.includes(tabItem.name)) return;

			const tabInfo: Menu.MenuOptions = {
				title: tabItem.title,
				path: tabItem.path,
				close: tabItem.close,
				name: tabItem.name
			};
			if (this.tabList.every(item => item.name !== tabItem.name)) {
				this.tabList.push(tabInfo);
			}
			this.setTabsMenuValue(tabItem.name);
			router.push({ name: tabItem.name });
		},
		// Remove Tabs
		async removeTabs(tabName: string) {
			let tabsMenuValue = this.tabValue;
			const tabsMenuList = this.tabList;
			if (tabsMenuValue === tabName) {
				tabsMenuList.forEach((item, index) => {
					if (item.name !== tabName) return;
					const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1];
					if (!nextTab) return;
					tabsMenuValue = nextTab.name;
					router.push(nextTab.name);
				});
			}
			this.tabValue = tabsMenuValue;
			this.tabList = tabsMenuList.filter(item => item.name !== tabName);
		},
		// Change Tabs
		async changeTabs(tabItem: TabPaneProps) {
			this.tabList.forEach(item => {
				if (item.title === tabItem.label) router.push(item.path);
			});
		},
		// Set TabsMenuValue
		async setTabsMenuValue(tabsMenuValue: string) {
			this.tabValue = tabsMenuValue;
		},
		// Set TabsMenuList
		async setTabsMenuList(tabsMenuList: Menu.MenuOptions[]) {
			this.tabList = tabsMenuList;
		},
		// Close MultipleTab
		async closeMultipleTab(tabsMenuValue?: string) {
			this.tabList = this.tabList.filter(item => {
				return item.name === tabsMenuValue || item.name === HOME_URL;
			});
		},
		// Go Home
		async goHome() {
			router.push(HOME_URL);
			this.tabValue = HOME_URL;
		}
	},
	persist: piniaPersistConfig("TabsState")
});
