function getStationInfo(id){
	for (var i=0; i<stationInfoHolder.length; i++){
		if(id==stationInfoHolder[i]["id"]){
			return i;
		}
	}
}