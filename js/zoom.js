//This is the zoom and panning functionality
function zoom() {


	//Show or hide parish name labels depending on how zoomed in the map is
	if(d3.event.scale>3){

		$(".parishLabel").show();

	}

	else{
		$(".parishLabel").hide();
		parishLayer = false;
	}
	
	//Don't allow infinite panning
	var minXPan = -600 + mapPositionX;
	var maxXPan = 277 + mapPositionX;
	var minYPan = -635 + mapPositionY;
	var maxYPan = 200 + mapPositionY;	
	var parishLayer = false;

	svg.select("#outer")
		.attr("transform", function(){	
			//If map is within boundaries it follows the mouse
			if (d3.event.translate[0] > minXPan && d3.event.translate[0] < maxXPan && d3.event.translate[1] > minYPan && d3.event.translate[1] < maxYPan ){
				return "translate(" + d3.event.translate[0]+ "," + d3.event.translate[1] + ")scale(" + mapScale+ ")";
			}
			//Otherwise its position will be set to either the min or max
			else{
				var panX = d3.event.translate[0];
				var panY = d3.event.translate[1];
				
				if(d3.event.translate[0] <= minXPan ){
					panX = minXPan;}
				
				else if(d3.event.translate[0] >= maxXPan ){
					panX = maxXPan;}
				
				if(d3.event.translate[1] <= minYPan ){
					panY = minYPan}
				
				else if(d3.event.translate[1] >= maxYPan ){
					panY = maxYPan;}
				
				return "translate(" + panX+ "," + (panY) + ")scale(" + mapScale+ ")";
			}
		}
	);
}