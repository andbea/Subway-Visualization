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
	          	.style("top", (event.pageY-20) + "px")
	          	.style("left", (event.pageX+20) + "px");
      	})
      	.on("mouseout", function() { 
      		return tooltip
          		.style("visibility", "hidden");
        });
        //.on("onclick", populateInfo(stations[index]["id"]));
        

    addedStation.transition().duration(1000)
        .attr("r", stationCircleRadius);
}