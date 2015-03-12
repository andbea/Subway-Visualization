/* Created 2015-03-05 by Anders Bea
This function looks for connections that need to be removed or added depending on the
interaction with the slider. */

function changeConnections() {

    // This part adds connections that should be visible after the slider has been changed
    if(year_shown != year_entered && year_shown < year_entered) {
        for(var i = 0; i < connections.length; i++) {
            if(connections[i]["year"] > year_shown && connections[i]["year"] <= year_entered) {
                callbacksAdd.add(addConnection(i));
            }
        }
        for(var i = 0; i < disusedConnections.length; i++) {
            if(disusedConnections[i]["year"] > year_shown && disusedConnections[i]["year"] <= year_entered) {
                callbacksRemove.add(removeConnection(getDisusedId(i)));
            }
        }
        year_shown = year_entered;
    }

    // This part removes connections that should be visible after the slider has been changed
    else if(year_shown != year_entered && year_shown > year_entered) {
        for(var i = 0; i < connections.length; i++) {
            if(connections[i]["year"] <= year_shown && connections[i]["year"] > year_entered) {
                callbacksRemove.add(removeConnection(i));
            }
        }
        for(var i = 0; i < disusedConnections.length; i++) {
            if(disusedConnections[i]["year"] <= year_shown && disusedConnections[i]["year"] > year_entered) {
                callbacksAdd.add(addConnection(getDisusedId(i)));
            }
        }
        year_shown = year_entered;
    }
}