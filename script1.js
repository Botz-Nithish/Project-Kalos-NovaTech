function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
    });

    const locations = [
        { lat: 30.7333, lng: 76.7794 }, // Chandigarh
        // Add more store coordinates here
    ];

    locations.forEach((location) => {
        new google.maps.Marker({
            position: location,
            map: map,
        });
    });
}
