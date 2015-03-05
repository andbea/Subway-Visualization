function zoomlayerInfo(scale){

	if(scale>3 && parishLayer==false){
		var elements = document.getElementById("wireframeMap").childNodes;

		for(i = 0; i < elements.length ; i++){
			
			if(elements[i].tagName == "g"){
				var nodes = elements[i].childNodes;
				for(j = 0; j < nodes.length ; j++){
					if(nodes[j].tagName == 'polygon'|| nodes[j].tagName == 'path' || nodes[j].tagName == 'polyline'){
						//console.log(elements[i].getAttribute("name"));
						addText(nodes[j], elements[i].getAttribute("name"));
						break;
					}
				}
			}
			
		}
	parishLayer = true;

	}
	



};