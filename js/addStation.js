 function addStation(index) {
    var addedStation = subway.enter().append("circle")
        .attr("r", 0)
        .attr("id", stations[index]["id"] + "-circle")
        .attr("cx", convertX(stations[index]["x"]))
        .attr("cy", convertY(stations[index]["y"]));
        

    addedStation.transition().duration(1000)
        .attr("r", stationCircleRadius);
}