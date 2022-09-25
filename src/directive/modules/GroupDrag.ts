import { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
	__handleClick__: () => any;
	parentElement: HTMLElement;
}

const _elMap: Map<string, Array<{ el: HTMLElement; action: () => any }>> = new Map<
	string,
	Array<{ el: HTMLElement; action: () => any }>
>();

/**
 * v-groupDrag
 * 简单拖拽 可运用到两个列表之间通过拖拽移动对应的元素（数据）
 */
const directive: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		if (typeof binding.value !== "object") {
			throw "callback must be a object";
		}

		let d = binding.value;
		let elMap_ = _elMap.get(d.key);
		if (!elMap_) {
			elMap_ = [{ el: el, action: d.action }];
			_elMap.set(d.key, [{ el: el, action: d.action }]);
		} else {
			elMap_.push({ el: el, action: d.action });
			_elMap.set(d.key, elMap_);
		}
		// console.log(el.children);
		for (let i = 0; i < el.childElementCount; i++) {
			let elC: any = el.children[i];
			elC.onmousedown = (e: any) => {
				let disX = e.pageX - elC.offsetLeft;
				let disY = e.pageY - elC.offsetTop;
				let w = elC.offsetWidth;
				let h = elC.offsetHeight;
				elMap_ = _elMap.get(d.key);
				let x = e.pageX - disX;
				let y = e.pageY - disY;
				elC.style.left = x + "px";
				elC.style.top = y + "px";

				document.onmousemove = e => {
					elC.style.position = "absolute";
					let x = e.pageX - disX;
					let y = e.pageY - disY;
					for (let i of elMap_!) {
						let il = i.el.offsetLeft;
						let it = i.el.offsetTop;
						let iw = i.el.offsetWidth;
						let ih = i.el.offsetHeight;

						if (x < il + iw && y + h > it && x + w > il && y < it + ih) {
							i.el.style.backgroundColor = "rgba(0,0,0,.1)";
						} else {
							i.el.style.backgroundColor = "transparent";
						}
					}
					elC.style.left = x + "px";
					elC.style.top = y + "px";
				};

				document.onmouseup = e => {
					let x = e.pageX - disX;
					let y = e.pageY - disY;
					for (let i of elMap_!) {
						let il = i.el.offsetLeft;
						let it = i.el.offsetTop;
						let iw = i.el.offsetWidth;
						let ih = i.el.offsetHeight;
						if (x < il + iw && y + h > it && x + w > il && y < it + ih) {
							i.el.style.backgroundColor = "rgba(0,0,0,.1)";
							i.el.appendChild(elC);
						}
						i.el.style.backgroundColor = "transparent";
					}
					elC.style.position = "";
					elC.style.left = 0 + "px";
					elC.style.top = 0 + "px";
					document.onmousemove = document.onmouseup = null;
				};
			};
		}
		// el.childNodes.forEach((elC: any) => {});
	}
};
export default directive;
