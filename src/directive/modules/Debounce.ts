import { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
	__handleClick__: () => any;
}

/**
 *  v-debounce
 *  防抖指令
 *  参数: function类型
 */

const directive: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") throw "callback must be a function";

		let timer: NodeJS.Timeout | null = null;

		el.__handleClick__ = () => {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				binding.value();
			}, 1000);
		};
		el.addEventListener("click", el.__handleClick__);
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

export default directive;
