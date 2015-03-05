 function removeConnection(index) {
    var id = "#" + connections[index]['from'] + "-" + connections[index]['to'] + "-line";
    var removedLine = d3.select(id);

    removedLine.transition().duration(1000)
        .attr("x2", removedLine.attr("x1"))
        .attr("y2", removedLine.attr("y1"));

    removedLine.transition()
        .delay(1000)
        .remove();
}