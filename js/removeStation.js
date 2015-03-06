 function removeStation(index) {
    id = "#" + stations[index]["id"] + "-circle";
    var removedStation = d3.select(id);
    removedStation.transition().duration(1000).
        attr("r", 0);
        
    removedStation.transition()
        .delay(1000)
        .remove();
}