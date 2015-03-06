 function addStation(index) {
    var addedStation = subway.enter().append("circle")
        .attr("r", 0)
        .attr("id", stations[index]["id"] + "-circle")
        .attr("cx", convertX(stations[index]["x"]))
        .attr("cy", convertY(stations[index]["y"]))
      	.on("mouseover", function() { 
      		return tooltip
          		.text(stations[index]["id"])
          		.style("visibility", "visible");
      	})
      	.on("mousemove", function() { 
      		var coordinates = d3.mouse(this);
      		return tooltip
	          	.text(stations[index]["id"])
	          	.attr("top", d3.select(this).attr("cy") + "px")
	          	.attr("left", d3.select(this).attr("cx") + "px");
      	})
      	.on("mouseout", function() { 
      		return tooltip
          		.style("visibility", "hidden");
        });
        //.on("onclick", populateInfo(stations[index]["id"]));
        

    addedStation.transition().duration(1000)
        .attr("r", stationCircleRadius);
}