//add text element to each parish on the map. Add parish name label to each. Size of label depends on size of parish
function addText(p,name,hektar){

		//console.log(hektar);
		var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
		var b = p.getBBox();
		t.setAttribute("transform", "translate(" + (b.x + b.width/2.5) + " " + (b.y + b.height/2) + ")");
		t.setAttribute("class", "parishLabel");
		t.textContent = name;

		if (hektar <= 100){
			t.setAttribute("font-size", "3");

		}
		 else if(hektar > 100 && hektar <= 250){

			t.setAttribute("font-size", "4");

		} else if(hektar > 250 && hektar <=400){
			t.setAttribute("font-size", "5");

		}
		 else if(hektar > 400 && hektar <= 950){
		 	t.setAttribute("font-size", "10");

		}
		else if(hektar > 950 && hektar <= 1100){
			t.setAttribute("font-size", "13");
		}
		else{
			t.setAttribute("font-size", "15");
		}
		
		t.setAttribute("fill", "black");
		p.parentNode.insertBefore(t, p.nextSibling);
};