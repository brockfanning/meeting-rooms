# Meeting Rooms

A javascript tool to kickstart meeting invites with a particular room.

## Dependencies

This library requires the [download.js](https://github.com/rndme/download) library.

## Usage

```
<div id="meetingRoomsContainer"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/downloadjs/1.4.7/download.min.js"></script>
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
