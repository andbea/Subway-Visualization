//This is the zoom and panning functionality
function zoom() {


	//Show or hide parish name labels depending on how zoomed in the map is
	if(d3.event.scale>1.7){

		$(".parishLabel").fadeIn();

	}

	else{
		$(".parishLabel").fadeOut();
		parishLayer = false;
	}

	svg.select("#outer")
	.attr("transform", "translate(" + d3.event.translate[0] + "," + d3.event.translate[1] + ")scale(" + d3.event.scale + ")");
}