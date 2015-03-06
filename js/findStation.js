 /* This function returns the index of the station with
the given id. */
function findStation(id) {
    for(var i = 0; i < stations.length; i++) {
        if(id == stations[i]["id"]) {
            return i;
        }
    }
}