// JavaScript Document
(function($){
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:24, //每行的高度
		rowQuantity:1 //每行多少个
	};
	
	var opts = $.extend({}, defaults, options),intId = [];

	function marquee(obj, step){

		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, opts["rowQuantity"]).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		
		var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this),
			ulH = _this.find("ul").height(),
			_thisH = _this.height();

		this.each(function(i){
			intId[i] = setInterval(function(){
				if(ulH<=_thisH){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.find("li").hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(ulH<=_thisH){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			 });
		
		});

	}

})(jQuery);