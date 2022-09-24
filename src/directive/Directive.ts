import { App } from "vue";
import debounce from "./modules/Debounce";
const directivesList: any = {
	debounce
};

const directives = {
	install: (app: App<Element>) => {
		Object.keys(directivesList).forEach(key => {
			//注册自定义指令
			app.directive(key, directivesList[key]);
		});
	}
};

export default directives;
