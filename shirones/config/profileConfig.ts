import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "@/utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "https://avatars.githubusercontent.com/u/40737039?v=4", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Cavey (凱維)",
	bio: "Just a lifelong learner who loves technology.",
	links: [
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/1142708660",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/m21248074",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/m21248074/",
		},
	],
});
