function updateColors(year){
	
	var colorscale = d3.scale.linear()
		.domain([0, 70000])
		.range(["white", "green"]);
	
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
	
};

d3.tsv("data/rawdata.tsv", function(error, data) {
	
	var n = 0;
		
	console.log(++data[n].Farsta);
	
	//data.forEach(function(d) {
		
		$("#Kungsholm").children("polygon").attr("fill", function(d,i){ return colorscale(++data[n].Kungsholm);});
		$("#St-Göran").children("polygon").attr("fill", function(d, i) { return colorscale(i); });
		$("#Maria_Magdalena").children("polygon").attr("fill", function(d, i) { return colorscale(i); });
		
		n++;
	//});
});

