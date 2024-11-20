const latitudeReadout = document.getElementById("latitudeReadout");
const longitudeReadout = document.getElementById("longitudeReadout");
const fetchButton = document.getElementById("fetchButton");

var latitude;
var longitude;

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const FetchCoordinates = function(event)
{
    console.log('This Button Has Been Clicked');
    navigator.geolocation.getCurrentPosition(function(position)
    {
        console.log(`latitude = ${position.coords.latitude}, longitude = ${position.coords.longitude}`);

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        
        map.setView([position.coords.latitude, position.coords.longitude], 13);

        latitudeReadout.textContent = `latitude = ${latitude}`;
        longitudeReadout.textContent = `longitude = ${longitude}`;
    });
}

//event Handlers
fetchButton.addEventListener('click', FetchCoordinates)