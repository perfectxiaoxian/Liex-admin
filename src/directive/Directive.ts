import { App } from "vue";
import debounce from "./modules/Debounce";
import throttle from "./modules/Throttle";
import dragBasics from "./modules/DragBasics";
import groupDrag from "./modules/GroupDrag";
const directivesList: any = {
	debounce,
	throttle,
	dragBasics,
	groupDrag
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
