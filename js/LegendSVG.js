function legendSVG(gradientArray){
	
	
	
var dataset = [
	{ label: gradientArray[8] + " personer/ha", color: "#bd0026" },
	{ label: gradientArray[7] + " personer/ha", color: "#800026" },
	{ label: gradientArray[6] + " personer/ha", color: "#e31a1c" },
	{ label: gradientArray[5] + " personer/ha", color: "#fc4e2a" },
	{ label: gradientArray[4] + " personer/ha", color: "#fd8d3c" },
	{ label: gradientArray[3] + " personer/ha", color: "#feb24c" },
	{ label: gradientArray[2] + " personer/ha", color: "#fed976" },
	{ label: gradientArray[1] + " personer/ha", color: "#ffeda0" },
	{ label: gradientArray[0] + " personer/ha", color: "#ffffcc" }
];

var legendRectSize = 18;                                  
var legendSpacing = 4; 

var legendSvg = d3.select("#visual").append("svg")
	.attr("id","legendSvg")
	.attr("width", 130)
	.attr("height", 210)


	document.getElementById("legendSvg").style.pointerEvents = "none";


legendSvg.append("rect")
    .attr("width", 130)
    .attr("height", 210)
    .attr("fill", "white")
    .attr( "fill-opacity", 0.8 );

var legendGroup = legendSvg.append("g").attr("class", "legendGroup")
.attr("transform", "translate(" + 50 + "," + 60 + ")");

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
  
}