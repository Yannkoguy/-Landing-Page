

var map = L.map('map').setView([5.329566, -4.024747], 12);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var geoJSONlayer = L.geoJSON(map1).addTo(map)