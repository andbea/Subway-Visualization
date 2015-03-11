var dataset = [
	{ label: 9, color: "#800026" },
	{ label: 8, color: "#bd0026" },
	{ label: 7, color: "#e31a1c" },
	{ label: 6, color: "#fc4e2a" },
	{ label: 5, color: "#fd8d3c" },
	{ label: 4, color: "#feb24c" },
	{ label: 3, color: "#fed976" },
	{ label: 2, color: "#ffeda0" },
	{ label: 1, color: "#ffffcc" }
];

var legendRectSize = 18;                                  
var legendSpacing = 4; 

var legendSvg = d3.select("#visual").append("svg")
	.attr("id","legendSvg")
	.attr("width", 130)
	.attr("height", 210)
	var legendGroup = legendSvg.append("g").attr("class", "legendGroup")
	.attr("transform", "translate(" + 50 + "," + 60 + ")");


svg.append("rect")
    .attr("width", 130)
    .attr("height", 210)
    .attr("fill", "white")
    .attr( "fill-opacity", 0.8 );

var legend = legendGroup.selectAll(".legendRect")                     
  .data(dataset)                                   
  .enter()                                               
  .append('g')                                            
  .attr('class', '.legendRect')                              
  .attr('transform', function(d, i) {               
    var height = legendRectSize + legendSpacing;          
    var offset =  50;     // NEW
    var horz = -2 * legendRectSize;                       
    var vert = i * height - offset;                       
    return 'translate(' + horz + ',' + vert + ')';        
  });                                                    

legend.append('rect')                                    
  .attr('width', legendRectSize)                          
  .attr('height', legendRectSize)                        
  .style('fill', function(d) { return d.color; })                                  
  .style('stroke', 'black');                               
  
  legend.append('text')                                     
  .attr('x', legendRectSize + legendSpacing)              
  .attr('y', legendRectSize - legendSpacing)         
  .text(function(d) { return d.label; });  
