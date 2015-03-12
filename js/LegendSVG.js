function legendSVG(gradientArray){
  
  
  
var dataset = [
  { label: gradientArray[8], color: "#800026" },
  { label: gradientArray[7], color: "#bd0026" },
  { label: gradientArray[6], color: "#e31a1c" },
  { label: gradientArray[5], color: "#fc4e2a" },
  { label: gradientArray[4], color: "#fd8d3c" },
  { label: gradientArray[3], color: "#feb24c" },
  { label: gradientArray[2], color: "#fed976" },
  { label: gradientArray[1], color: "#ffeda0" },
  { label: gradientArray[0], color: "#ffffcc" }
];

var legendRectSize = 18;                                  
var legendSpacing = 4; 

var legendSvg = d3.select("#visual").append("svg")
  .attr("id","legendSvg")
  .attr("width", 110)
  .attr("height", 350)


//document.getElementById("legendSvg").style.pointerEvents = "none";


legendSvg.append("rect")
    .attr("width", 110)
    .attr("height", 350)
    .attr("fill", "white")
    .attr( "fill-opacity", 0.8 );

var legendGroup = legendSvg.append("g").attr("class", "legendGroup")
.attr("transform", "translate(" + 50 + "," + 100 + ")");


var legendTitle = legendGroup.append("g").attr("class", "legendTitle");

  legendTitle.append('text')  
  .attr('x', legendRectSize + legendSpacing)              
  .attr('y', legendRectSize - legendSpacing)
  .attr("transform", "translate(" + -59 + "," + -80 + ")")
  .text("personer/ha");





var legendCheckboxes = legendGroup.append("g").attr("class", "legendCheckboxes");




    var stockholmMap = legendCheckboxes.append("foreignObject")
      .attr("width", 20)
      .attr("height", 20)
      .attr("transform", "translate(" + -36+ "," + 190 + ")")
      .append("xhtml:body").style("background-color", "rgba(0,0,0,0)")
      .html("<form><input type=checkbox id=stockholmMap checked/></form>")
      .on("click", function(d, i){
           $("#geografisk").toggle(this.checked);
      });

  legendCheckboxes.append('text')                                     
  .attr("transform", "translate(" + -10+ "," + 205 + ")")                      
  .text("Sthlm"); 



    var parishMap=legendCheckboxes.append("foreignObject")
        .attr("width", 20)
        .attr("height", 20)
        .attr("transform", "translate(" + -36+ "," + 220 + ")")
        .append("xhtml:body").style("background-color", "rgba(0,0,0,0)")
        .html("<form><input type=checkbox id=parishMap checked/></form>")
        .on("click", function(d, i){
            $("#wireframeMap").toggle(this.checked);
        });

  legendCheckboxes.append('text')                                     
  .attr("transform", "translate(" + -10+ "," + 237 + ")")                      
  .text("Parishes"); 














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