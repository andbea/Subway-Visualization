

function populateInfo(id){
	var index = getStationInfo(id);
	//console.log(index);
    var images = stationInfoHolder[index]['Image'];
    console.log(images);
	$('#title').html(stationInfoHolder[index]["Station"]);
	$('#inaug').html("<strong>Invigdes: </strong>" + stationInfoHolder[index]["Year"]);
	$('#art').html("<strong>Stationens konstverk: </strong>" + convertSymbols(stationInfoHolder[index]["Art"]));
	$('#history').html("<strong>Historiska fakta: </strong>" + convertSymbols(stationInfoHolder[index]["Art"]));

	$('#img-holder').html('<div class="item active">
					      <img src="img/stations/' + images[0] + '" height="440"></div>');

	if(images.length<1){
		for (var i=1; i<images.length; i++){
		$('#img-holder').html('<div class="item">
					      <img src="img/stations/' + images[i] + '" height="440"></div>');
		// .html('<li><a href="#"><img src="img/stations/"' + images[i] + ' height="220" alt="" /></a></li>')
		}
	}
	
}

function getStationInfo(id){
	for (var i=0; i<stationInfoHolder.length; i++){
		if(id==stationInfoHolder[i]["id"]){
			return i;
		}
	}
}
	
function convertSymbols(string){
	var newString = string.replace('å', '&aring');
	var newString = string.replace('ä', '&auml');
	var newString = string.replace('ö', '&ouml');
	return newString;
}