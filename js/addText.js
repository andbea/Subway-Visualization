function addText(p,name,hektar){

		//console.log(hektar);
		var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
		var b = p.getBBox();
		t.setAttribute("transform", "translate(" + (b.x + b.width/2.5) + " " + (b.y + b.height/2) + ")");
		t.setAttribute("class", "parishLabel");
		t.textContent = name;

		if (hektar <= 100){
			console.log("below 250");
			t.setAttribute("font-size", "3");

		}
		 else if(hektar > 100 && hektar <= 250){
		 	console.log("below 250");
		 	console.log(name);
			t.setAttribute("font-size", "4");

		} else if(hektar > 250 && hektar <=400){

			console.log("below 400");
		 	console.log(name);
			t.setAttribute("font-size", "5");

		}
		 else if(hektar > 400 && hektar <= 950){
		 	console.log("below 900");
		 	console.log(name);
		 	t.setAttribute("font-size", "10");

		}
		else if(hektar > 950 && hektar <= 1100){
			console.log("below 1100");
		 	console.log(name);
			t.setAttribute("font-size", "13");
		}
		else{

		console.log("else");
		console.log(name);
		t.setAttribute("font-size", "15");
		}
		
		t.setAttribute("fill", "black");
		p.parentNode.insertBefore(t, p.nextSibling);
};