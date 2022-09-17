import config from "@/config/config.json";

class ConfigUtils_ {
	private config_: IConfig;
	constructor() {
		this.config_ = config;
	}

	get HOME_URL(): string {
		return this.config_.HOME_URL;
	}

	get TABS_BLACK_LIST(): string[] {
		return this.config_.TABS_BLACK_LIST;
	}

	get menu(): Menu.MenuOptions[] {
		return this.config_.menu;
	}

	get map(): { key: string } {
		return this.config_.map;
	}
}

export const ConfigUtils = new ConfigUtils_();

interface IConfig {
	HOME_URL: string;
	TABS_BLACK_LIST: string[];
	menu: Menu.MenuOptions[];
	map: { key: string };
}
