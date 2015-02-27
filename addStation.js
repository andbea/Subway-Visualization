 function addStation(index) {
                var stationBefore = findStation(stations[index]["before"]);

                var shiftedCoords = shiftLine(
					convertX(stations[index]["x"]),
                    convertY(stations[index]["y"]),
                   convertX(stations[stationBefore]["x"]),
					convertY(stations[stationBefore]["y"]));
				  

                var addedLine = line.enter().append("line")
                    .attr("id", stations[index]["id"] + "-line")
                    .attr("x1", shiftedCoords[2])
                    .attr("y1", shiftedCoords[3])
                    .attr("x2", shiftedCoords[2])
                    .attr("y2", shiftedCoords[3])
                    .attr("stroke", stations[index]["line-color"]);

                addedLine.transition().duration(1000)
                    .attr("x2", shiftedCoords[0])
                    .attr("y2", shiftedCoords[1]);

                var addedStation = subway.enter().append("circle")
                    .attr("r", 0)
                    .attr("id", stations[index]["id"] + "-circle")
                    .attr("cx", convertX(stations[index]["x"]))
                    .attr("cy", convertY(stations[index]["y"]));
                    

                addedStation.transition().duration(1000)
                    .attr("r", 6);
            }