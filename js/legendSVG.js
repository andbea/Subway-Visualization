function legendSVG(myData, gradientArray, gradientDensityArray, gradientPeopleChangeArray){  
 
 
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
  .attr("width", 120)
  .attr("height", 350)



//document.getElementById("legendSvg").style.pointerEvents = "none";


legendSvg.append("rect")

    .attr("width", 120)

    .attr("height", 350)

    .attr("fill", "white")
    .attr( "fill-opacity", 0.8 );

var legendGroup = legendSvg.append("g").attr("class", "legendGroup")
.attr("transform", "translate(" + 50 + "," + 100 + ")");


var legendTitle = legendGroup.append("g").attr("class", "legendTitle");

  legendTitle.append('text')  
  .attr("class", "legendHeader")
  .attr('x', legendRectSize + legendSpacing)              
  .attr('y', legendRectSize - legendSpacing)
  .attr("transform", "translate(" + -59 + "," + -80 + ")")
  .text("personer/ha");

var legendCheckboxes = legendGroup.append("g").attr("class", "legendCheckboxes");

    var stockholmMap = legendCheckboxes.append("foreignObject")

      .attr("width", 20)
      .attr("height", 20)
      .attr("transform", "translate(" + -36+ "," + 160 + ")")
      .append("xhtml:body").style("background-color", "rgba(0,0,0,0)")
      .html("<form><input type=checkbox id=stockholmMap checked/></form>")
      .on("click", function(d, i){
		
           $("#geoMap").toggle(this.checked);
		   $("#geoMapContours").toggle(this.checked);
      });
	  
	  	legendCheckboxes.append('text')                                     
  .attr("transform", "translate(" + -10+ "," + 175 + ")")                      
  .text("Sthlm");  

    var parishMap=legendCheckboxes.append("foreignObject")
        .attr("width", 20)
        .attr("height", 20)
        .attr("transform", "translate(" + -36+ "," + 190 + ")")
        .append("xhtml:body").style("background-color", "rgba(0,0,0,0)")
        .html("<form><input type=checkbox id=parishMap checked toggle='false' /></form>")
        .on("click", function(d, i){
			
			if($("#parishMap").attr("toggle") == "true"){			
				
				$("#wireframeMap").toggle(this.checked);
				$("#parishMap").attr("toggle", 'false');	
			}
			else{
				
				var colorscale = d3.scale.linear()
					.domain([gradientPeopleChangeArray[0], gradientPeopleChangeArray[1], gradientPeopleChangeArray[2], gradientPeopleChangeArray[3], 0, gradientPeopleChangeArray[5], gradientPeopleChangeArray[6], gradientPeopleChangeArray[7], gradientPeopleChangeArray[8]])
					.range(["#2166ac", "#4393c3", "#92c5de", "#d1e5f0", "#f7f7f7", "#fddbc7", "#f4a582", "#d6604d", "#b2182b"]);
							
				changeLegend(1, gradientPeopleChangeArray, ["#2166ac", "#4393c3", "#92c5de", "#d1e5f0", "#f7f7f7", "#fddbc7", "#f4a582", "#d6604d", "#b2182b"]);	
				fillMap(myData, 1, colorscale,parseInt($("#slider-1").val())-1950);
				
				if($("#densityMap").is(':checked')){			
					
					$("#densityMap").prop('checked',false);
					$("#densityMap").attr("toggle","false");					
										
				}else{
					
					$("#wireframeMap").toggle("checked");
					
				}
				
				
				$("#parishMap").attr("toggle", 'true');	
				
			}
            
        });
	$("#parishMap").prop('checked', false);
  legendCheckboxes.append('text')                                     
  .attr("transform", "translate(" + -10+ "," + 205 + ")")                      
  .html(convertSymbols("Befolkning")); 
  
  var parishMode2 =legendCheckboxes.append("foreignObject")

        .attr("width", 20)
        .attr("height", 20)
        .attr("transform", "translate(" + -36+ "," + 220 + ")")
        .append("xhtml:body").style("background-color", "rgba(0,0,0,0)")
        .html("<form><input type=checkbox id=densityMap checked toggle='true' /></form>")
        .on("click", function(d, i){
					
			if($("#densityMap").attr("toggle") == "true"){
				
				$("#wireframeMap").toggle(this.checked);
				$("#densityMap").attr("toggle","false");
			}
			else{
				
				
				var colorscale = d3.scale.linear()
					.domain([gradientDensityArray[0], gradientDensityArray[1], gradientDensityArray[2], gradientDensityArray[3], gradientDensityArray[4], gradientDensityArray[5], gradientDensityArray[6], gradientDensityArray[7], gradientDensityArray[8]])
					.range(["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"]);
				changeLegend(0, gradientDensityArray, ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"]);						
				fillMap(myData, 0, colorscale, parseInt($("#slider-1").val())-1950);				
				
				if($("#parishMap").is(':checked')){							
										
					$("#parishMap").prop('checked', false);
					$("#parishMap").attr("toggle", "false");
										
				}else{
					
					$("#wireframeMap").toggle("checked");
					
				}
				$("#densityMap").attr("toggle","true");
				
			}
        });

  legendCheckboxes.append('text')                                     
  .attr("transform", "translate(" + -10+ "," + 235 + ")")                      
  .html(convertSymbols("Täthet"));
  
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
  .attr("class", "legendColorRect")
  .attr('width', legendRectSize)                          
  .attr('height', legendRectSize)                        
  .style('fill', function(d) { return d.color; })                                  
  .style('stroke', 'black');                               
  
  legend.append('text')    
  .attr("class", "legendTextRect")
  .attr('x', legendRectSize + legendSpacing)              
  .attr('y', legendRectSize - legendSpacing)         
  .text(function(d) { return d.label; });    
  
}