function addText(p,name){
		var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
		var b = p.getBBox();
		t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2) + ")");
		t.textContent = name;
		t.setAttribute("font-size", "14");
		t.setAttribute("fill", "red");
		p.parentNode.insertBefore(t, p.nextSibling);
};