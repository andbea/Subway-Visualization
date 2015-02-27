 function removeStation(index) {
                var id = "#" + stations[index]["id"] + "-line";
                var removedLine = d3.select(id);
                removedLine.transition().duration(1000)
                    .attr("x2", removedLine.attr("x1"))
                    .attr("y2", removedLine.attr("y1"));

                removedLine.transition().delay(1000).remove();

                id = "#" + stations[index]["id"] + "-circle";
                var removedStation = d3.select(id);
                removedStation.transition().duration(1000).
                    attr("r", 0);
                removedStation.transition().delay(1000).remove();
            }