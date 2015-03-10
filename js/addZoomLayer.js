function addZoomLayer(){
		//get each parish polygon/path/poly-line in the svg and send it to addText
		var elements = document.getElementById("wireframeMap").childNodes;

		for(i = 0; i < elements.length ; i++){
			
			if(elements[i].tagName == "g"){
				var nodes = elements[i].childNodes;
				for(j = 0; j < nodes.length ; j++){
					if(nodes[j].tagName == 'polygon'|| nodes[j].tagName == 'path' || nodes[j].tagName == 'polyline'){
						//console.log(elements[i].getAttribute("name"));
						addText(nodes[j], elements[i].getAttribute("name"), elements[i].getAttribute("hektar"));
						break;
					}
				}
			}
			
		}
};