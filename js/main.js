var fadeStart=0
	,fadeUntil=300
	,fading = $('.fading');

$(window).bind('scroll', function(){
	var offset = $(document).scrollTop(),opacity=0;
	if( offset<=fadeStart ){
		opacity=1;
	}else if( offset<=fadeUntil ){
		opacity=1-offset/fadeUntil;
	}
	fading.css('opacity',opacity);
});