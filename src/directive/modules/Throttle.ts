import { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
	__handleClick__: () => any;
	disabled: boolean;
}

/**
 * v-throttle
 * 防止按钮段时间内被多次点击
 * 思路：
 *      1.点击按钮时把按钮禁用，防止多次点击，1s之后按钮激活
 *      2.将对应的方法绑定到该指令上
 *
 * 使用方法：
 *      <button v-throttle="throttleClick"></button>
 */
const directive: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") throw "callback must be a function";
		let timer: NodeJS.Timeout | null = null;
		el.__handleClick__ = () => {
			if (timer) clearTimeout(timer);
			if (!el.disabled) {
				el.disabled = true;
				binding.value();
				timer = setTimeout(() => {
					el.disabled = false;
				}, 1000);
			}
		};
		el.addEventListener("click", el.__handleClick__);
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

export default directive;
