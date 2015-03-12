 /* This function looks for stations that need to be removed or added depending on the
interaction with the slider. */
function changeStations() {
    // This part adds stations that should be visible after the slider has been changed
    if(year_shown != year_entered && year_shown < year_entered) {
        for(var i = 0; i < stations.length; i++) {
            if(stations[i]["year"] > year_shown && stations[i]["year"] <= year_entered) {
                callbacksAdd.add(addStation(i));
            }
        }
    }
    // This part removes stations that should be visible after the slider has been changed
    else if(year_shown != year_entered && year_shown > year_entered) {
        for(var i = 0; i < stations.length; i++) {
            if(stations[i]["year"] <= year_shown && stations[i]["year"] > year_entered) {
                callbacksRemove.add(removeStation(i));
            }
        }
    }
}