/**
 * Create a select tool for kickstarting meeting invites with a reserved room.
 * 
 * @param Array rooms
 *   An array of objects, each containing a "name" and "mailto" property.
 *
 *   Example:
 *     [
 *       {"name": "My Room Name", "mailto": "my-room-email@my-company.org"},
 *       {"name": "Another Room", "mailto": "another-email@my-company.org"}
 *     ]
 *
 * @param String container
 *   The id of an HTML element in which to put this tool.
 *
 *   Example:
 *     my-container-div-id
 */
var meetingRooms = function(rooms, container) {

    // Create the select list.
    var containerElement = document.getElementById(container);
    var selectList = document.createElement("select");
    containerElement.appendChild(selectList);
    var stub = document.createElement("option");
    stub.value = "";
    stub.text = "Select a room";
    selectList.appendChild(stub);
    for (var i in rooms) {
        var option = document.createElement("option");
        option.value = rooms[i].mailto;
        option.text = rooms[i].name;
        selectList.appendChild(option);
    }
    // Create the button.
    var button = document.createElement("button");
    var label = document.createTextNode("Create meeting");
    button.appendChild(label);
    containerElement.appendChild(button);

    // Assign the behavior.
    button.addEventListener("click", function() {
        var selected = selectList.selectedIndex;
        if (selected) {
            var name = selectList.options[selected].text;
            var mailto = selectList.options[selected].value;
            var invite = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nATTENDEE;CN=\"" + name + "\";CUTYPE=RESOURCE;ROLE=NON-PARTICIPANT;RSVP=TRUE:mailto:" + mailto + "\nLOCATION:" + name + "\nEND:VEVENT\nEND:VCALENDAR";

            var uri = "data:text/calendar;charset=utf8," + escape(invite);
            var filename = "create-meeting.ics";
            var mimetype = "text/calendar";
            download(uri, filename, mimetype);
        }
    });
}
