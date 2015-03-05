function addText(p,name,hektar){

		console.log(hektar);
		var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
		var b = p.getBBox();
		t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2) + ")");
		t.textContent = name;

		/*if (hektar < 100){
			t.setAttribute("font-size", "14");

		}
		 else if(hektar <250){
			t.setAttribute("font-size", "5");

		} else if(hektar>400){

		}
		 else if(hektar>250){

		}
		else if hektar>{
			t.setAttribute("font-size", "5");
		}
		*/
		t.setAttribute("font-size", "14");
		
		t.setAttribute("fill", "red");
		p.parentNode.insertBefore(t, p.nextSibling);
};