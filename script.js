// Existing script.js content
function changeImage(element) {
    document.getElementById('mainImage').src = element.src;
    document.getElementById('mainImage').alt = element.alt;
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission action
    alert('Thank you for your interest! We will contact you soon.');
    e.target.reset(); // Reset the form after submission
});

// Add the MapBox API token and initialize the map
mapboxgl.accessToken = 'pk.eyJ1Ijoid3N0am9obiIsImEiOiJjbHJwdzVwbzgwYTc2MmpvZGtyNHR5aHpwIn0.KfM68Jx5nGbR19LMNxP3yA'; // Replace with your MapBox access token

var map = new mapboxgl.Map({
    container: 'map', // HTML container id
    style: 'mapbox://styles/mapbox/dark-v10', // Map style
    center: [-70.9894, 42.6683], // Coordinates [lng, lat] of the location
    zoom: 10 // Zoom level
});

// Add a marker to the map
var marker = new mapboxgl.Marker()
    .setLngLat([-70.9894, 42.6683]) // Coordinates [lng, lat] of the marker
    .addTo(map);

document.getElementById('recenter-map').addEventListener('click', function() {
    map.flyTo({
        center: [-70.9894, 42.6683],
        zoom: 10,
        essential: true
    });
});

