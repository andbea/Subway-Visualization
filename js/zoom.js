//This is the zoom and panning functionality
function zoom() {
zoomlayerInfo(d3.event.scale);

svg.select("#outer")
.attr("transform", "translate(" + d3.event.translate[0] + "," + d3.event.translate[1] + ")scale(" + d3.event.scale + ")");
}