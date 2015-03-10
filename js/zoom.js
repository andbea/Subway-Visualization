//This is the zoom and panning functionality
function zoom() {
	if(d3.event.scale>3){

	$(".parishLabel").show();

	}

	else{
		$(".parishLabel").hide();
		parishLayer = false;
	}

	svg.select("#outer")
	.attr("transform", "translate(" + d3.event.translate[0] + "," + d3.event.translate[1] + ")scale(" + d3.event.scale + ")");
}