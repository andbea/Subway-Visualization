

function populateInfo(id){
	var index = getStationInfo(id);

	$('#title').html(stationInfoHolder[index]["Station"]);
	$('#inaug').html("<strong>Invigdes: </strong>" + stationInfoHolder[index]["Year"]);
	$('#art').html("<strong>Stationens konstverk: </strong>" + convertSymbols(stationInfoHolder[index]["Art"]);
	$('#history').html("<strong>Historiska fakta: </strong>" + convertSymbols(stationInfoHolder[index]["Art"]);


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