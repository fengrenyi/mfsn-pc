$(function(){
	// 大图轮播
	$('.slide-box').flexslider({
		animation: "fade", // "fade" or "slide" 淡入淡出或者滑动
		slideshowSpeed: 555000,
		pauseOnAction: false,
		directionNav: false
	});

	// 关于我们轮播
	$('.floor-about .floor-con').flexslider({
		animation: "slide", // "fade" or "slide" 淡入淡出或者滑动
		manualControls: ".floor-about .slide-nav li",//自定义轮播导航
		slideshowSpeed: 5000,//定时播放
		animationSpeed:600,//切换时间
		pauseOnHover:true,
		pauseOnAction: false,
		directionNav: false
	});

	// 新闻资讯轮播
	$('.floor-news .floor-con').flexslider({
		animation: "slide", // "fade" or "slide" 淡入淡出或者滑动
		manualControls: ".floor-news .slide-nav li",//自定义轮播导航
		slideshowSpeed: 5000,//定时播放
		animationSpeed:600,//切换时间
		pauseOnHover:true,
		pauseOnAction: false,
		directionNav: false
	});


})