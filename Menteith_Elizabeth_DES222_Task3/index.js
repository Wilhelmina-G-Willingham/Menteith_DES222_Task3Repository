const latitudeReadout = document.getElementById("latitudeReadout");
const longitudeReadout = document.getElementById("longitudeReadout");
const fetchButton = document.getElementById("fetchButton");

var latitude;
var longitude;
var zoomlevel = 17;


//initialising the map over London, as per leaflet API. Will change this to initialise over the user's current location instead using geolocation API
var map = L.map('map').setView([51.505, -0.09], zoomlevel);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//fetches coordinates in a distinct function (rather than being hardcoded into the button click, as in the week 4 tutorial), so that the user's location can be called on loading the page 
const FetchCoordinates = function(event)
{
    console.log('This Button Has Been Clicked');
    navigator.geolocation.getCurrentPosition(function(position)
    {
        //Logging the coords here before writing to the variables to make it easier to tell the source of any problems with the API implementation 
        console.log(`latitude = ${position.coords.latitude}, longitude = ${position.coords.longitude}`);

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        
        map.setView([position.coords.latitude, position.coords.longitude], zoomlevel);

        latitudeReadout.textContent = `latitude = ${latitude}`;
        longitudeReadout.textContent = `longitude = ${longitude}`;
    });
}

//event Handlers
fetchButton.addEventListener('click', function(event)
{
    FetchCoordinates();
    let marker = L.marker([latitude, longitude]).addTo(map);
})


window.onload = function()
{
    FetchCoordinates();
}
