// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.2672, -97.7431],
  [41.8781, -87.6298],
  [43.6532, -79.3832],
  [40.6413, -73.7781]
];

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: "satellite-streets-v11",
    id: "light-v10",
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Create a polyline using the line coordinates and make the line red.
// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: '5,5'
}).addTo(map);