 function addStation(index) {
    var addedStation = subway.enter().append("circle")
        .attr("r", 0)
        .attr("id", stations[index]["id"] + "-circle")
        .attr("cx", convertX(stations[index]["x"]))
        .attr("cy", convertY(stations[index]["y"]))
      	.on("mouseover", function() { 
          var id = this.id.replace("-circle", "");
          var stationInfo = stationInfoHolder[getStationInfo(id)];
          var title = convertSymbols(stationInfo["Station"]);
          this.setAttribute("r", stationCircleRadius_Highlighted);
      		return tooltip
          		.html(title)
          		.style("visibility", "visible");
      	})
      	.on("mousemove", function() { 
          var id = this.id.replace("-circle", "");
          var stationInfo = stationInfoHolder[getStationInfo(id)];
          var title = convertSymbols(stationInfo["Station"]);
      		var coordinates = d3.mouse(this);
      		return tooltip
	          	.html(title)
	          	.style("top", (event.pageY-20) + "px")
	          	.style("left", (event.pageX+20) + "px");
      	})
      	.on("mouseout", function() { 
          this.setAttribute("r", stationCircleRadius);
      		return tooltip
          		.style("visibility", "hidden");
        })
        .on("click", function() {
          return populateInfo(this.id.replace("-circle", ""));
        });

    addedStation.transition().duration(1000)
      .attr("r", stationCircleRadius_Highlighted)
      .transition().delay(1000)
      .attr("r", stationCircleRadius);
}