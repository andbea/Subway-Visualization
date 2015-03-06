/* Created on 2015-03-06 by Anders Bea
These functions handle the play and pause buttons. */

var interval,
	intervalActive = 0,
	delay = 1000,
	lastValue = 1949;

function playAndPause() {

	// Stop when reaching end of slider.
	if(parseInt($("#slider-1").val()) >= parseInt($("#slider-1").attr("max"))){
		$("#playPauseButton").attr("class", "glyphicon glyphicon-play");
		clearInterval(interval);
		intervalActive = 0;
	}
	// Interval isn't active, so start playing.
	else if(intervalActive == 0){
		interval = setInterval(function(){
			// Start playing.
			if(lastValue == parseInt($("#slider-1").val()) - 1 || lastValue == parseInt($("#slider-1").val())) {
				lastValue = parseInt($("#slider-1").val());
				$("#slider-1").val(parseInt($("#slider-1").val()) + 1);
				$("#slider-1").slider("refresh");
				$("#playPauseButton").attr("class", "glyphicon glyphicon-pause");
				intervalActive = 1;
			}
			// If someone slides the slider, autopause.
			else {
				$("#playPauseButton").attr("class", "glyphicon glyphicon-play");
				lastValue = parseInt($("#slider-1").val());
				clearInterval(interval);
				intervalActive = 0;
			}
		}, delay);
	}
	// Interval is active, pause
	else {
		lastValue = parseInt($("#slider-1").val());
		clearInterval(interval);
		$("#playPauseButton").attr("class", "glyphicon glyphicon-play");
		intervalActive = 0;
	}
}
