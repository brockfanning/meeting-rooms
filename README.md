# Meeting Rooms

A javascript tool to kickstart meeting invites with a particular room.

## Usage

```
<div id="meetingRoomsContainer"></div>

<script src="meeting-rooms.js"></script>

<script>
  // List rooms in an array of objects with "name" and "mailto" properties.
  var rooms = [
    {"name": "My Room Name", "mailto": "my-room@my-agency.gov"},
    {"name": "Another Room", "mailto": "another@my-agency.gov"}
  ];

  // Provide the ID of the container element in the page's markup.
  var container = "meetingRoomsContainer";

  // Invoke the function.
  meetingRooms(rooms, container);

</script>
```
