function changeLegend(mode,myArray, colorArray){
	
	var dataset = [
	  { label: myArray[8], color: colorArray[8] },
	  { label: myArray[7], color: colorArray[7] },
	  { label: myArray[6], color: colorArray[6] },
	  { label: myArray[5], color: colorArray[5] },
	  { label: myArray[4], color: colorArray[4] },
	  { label: myArray[3], color: colorArray[3] },
	  { label: myArray[2], color: colorArray[2] },
	  { label: myArray[1], color: colorArray[1] },
	  { label: myArray[0], color: colorArray[0] }
	];
	var legend = d3.selectAll(".legendColorRect")
	.data(dataset)
	.style("fill", function(d) { return d.color; });
	
	var textElements = d3.selectAll(".legendTextRect")
	.data(dataset)
	.text(function(d) { return (d.label).toString(); });
		
	if(mode == 0){
		 d3.select(".legendHeader").html("personer/ha");
	}
	else if(mode == 1){
			
		d3.select(".legendHeader").html(convertSymbols("bef-förändring"));
	
	}
	
	
	
	

}