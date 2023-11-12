import { app } from "/scripts/app.js";

const id = "ComfyUI_Assistant";

app.registerExtension({
	name: "ComfyUI_Assistant",

	async setup() {

		const menu = document.querySelector(".comfy-menu");

		// 创建分隔线元素
		const separator = document.createElement("div");
		separator.style.margin = "20px 0";
		separator.style.width = "100%";
		separator.style.height = "2px"; // 设置分隔线高度
		separator.style.backgroundColor = "white"; // 设置分隔线颜色
		menu.append(separator);

		// 创建ComfyUI_Assistant按钮
		const ComfyUI_Assistant = document.createElement("button");
		ComfyUI_Assistant.textContent = "ComfyUI Assistant";
		ComfyUI_Assistant.onclick = () => { 
			window.open("https://chat.openai.com/g/g-B3qi2zKGB-comfyui-assistant", "ComfyUI Assistant"); 
		};

		// 将按钮添加到菜单
		menu.append(ComfyUI_Assistant);
	}
});
