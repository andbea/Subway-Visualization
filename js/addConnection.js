 function addConnection(index) {
    var from = findStation(connections[index]['from']),
        to = findStation(connections[index]['to']);

    var shiftedCoords = shiftLine(
		convertX(stations[to]["x"]),
        convertY(stations[to]["y"]),
        convertX(stations[from]["x"]),
		convertY(stations[from]["y"])
    );

    var addedLine = line.enter().append("line")
        .attr("id", stations[from]["id"] + "-" + stations[to]["id"] + "-line")
        .attr("x1", shiftedCoords[2])
        .attr("y1", shiftedCoords[3])
        .attr("x2", shiftedCoords[2])
        .attr("y2", shiftedCoords[3])
        .attr("stroke", connections[index]["line-color"]);

    addedLine.transition().duration(1000)
        .attr("x2", shiftedCoords[0])
        .attr("y2", shiftedCoords[1]);
}