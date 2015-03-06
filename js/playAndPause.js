/* Created on 2015-03-06 by Anders Bea
These functions handle the play and pause buttons. */

var interval,
	intervalActive = 0,
	delay = 1000;

function play() {
	if(parseInt($("#slider-1").val()) >= parseInt($("#slider-1").attr("max"))){
		pause();
	}
	else if(intervalActive == 0){
		interval = setInterval(function(){
			$("#slider-1").val(parseInt($("#slider-1").val()) + 1);
			$("#slider-1").slider("refresh");
		}, delay);
		intervalActive = 1;
	}
}

function pause() {
	clearInterval(interval);
	intervalActive = 0;
}