import { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
	__handleClick__: () => any;
	parentElement: HTMLElement;
}
/**
 * v-drag
 * 简单拖拽 可运用到两个列表之间通过拖拽移动对应的元素（数据）
 */
const directive: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		el.style.position = "absolute";
		if (typeof binding.value !== "function") {
			throw "callback must be a function";
		}
		el.onmousedown = e => {
			/**
			 * offsetLeft 该元素距离父级元素左边框的距离 单位px
			 * offsetTop 该元素距离父级元素上边框的距离 单位px
			 * pageX 鼠标距离左边框的距离 单位px
			 * pageY 鼠标距离有边框的距离 单位px
			 *
			 * disX 鼠标与所被点击元素的左边框的距离 单位px
			 * disY 鼠标与所被点击元素的上边框的距离 单位px
			 */
			let disX = e.pageX - el.offsetLeft;
			let disY = e.pageY - el.offsetTop;

			document.onmousemove = e => {
				let x = e.pageX - disX;
				let y = e.pageY - disY;

				//做碰壁处理
				let maxX = el.parentElement.offsetWidth - el.offsetWidth;
				let maxY = el.parentElement.offsetWidth - el.offsetHeight;
				if (x < 0) x = 0;
				else if (x > maxX) x = maxX;
				if (y < 0) y = 0;
				else if (y > maxY) y = maxY;

				el.style.left = x + "px";
				el.style.top = y + "px";
			};
			document.onmouseup = () => {
				document.onmousemove = document.onmouseup = null;
			};
		};
	}
};

export default directive;
