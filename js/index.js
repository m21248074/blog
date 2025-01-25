(function(){
	let bio=document.querySelector(".sidebar-profile-bio");
	bio.style.display="inline";
})();

let typedSettings={
	strings:
	[
		"Live a good life,<br>write some good code!",
		"The Programmers of Tomorrow<br>are The Wizards of The Future.",
		"願自己的努力終將會有回報。",
		"慾望以提升熱情，毅力以磨平高山。"
	],
	startDelay: 1000,
	typeSpeed: 100,
	loop: !0,
	backSpeed: 60,
	backDelay: 2000,
	showCursor: !0
}

let typed = new Typed(".sidebar-profile-bio",typedSettings);

L2Dwidget.init({
	model:
	{
		scale: 1,
		hHeadPos: 0.5,
		vHeadPos: 0.618,
		jsonPath: '/blog/snow_miku/model.json',
	},
	display: 
	{
		superSample: 1,
		width: 300,
		height: 300,
		position: 'right',
		hOffset: 0,
		vOffset: 0,
	},
	mobile:
	{
		show: true,
		scale: 1,
		motion: true,
	},
	react:
	{
		opacityDefault: 1,
		opacityOnHover: 1,
	},
});