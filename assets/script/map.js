function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 40.7834345, lng: -73.9662495 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 40.748441, lng: -73.985664 }, "Empire State Building"],
    [{ lat: 40.758896, lng: -73.985130 }, "Time Square"],
    [{ lat: 40.712743, lng: -74.013379 }, "One World Observatory"],
    [{ lat: 40.706036, lng: -74.008826 }, "Wall Street"],
    [{ lat: 40.782865, lng: -73.965355 }, "Central Park"],
    [{ lat: 40.754759, lng: -73.978946 }, "Grand Central Terminals"],
    [{ lat: 40.686283, lng: -74.042951 }, "Statue Of Liberty"],
    [{ lat: 40.829643, lng: -73.926175 }, "Yankee Stadium"],
    [{ lat: 40.850595, lng: -73.876998 }, "Bronx Zoo"],
    [{ lat: 40.861705, lng: -73.880690 }, "Bronx Botanical Garden"],
    [{ lat: 40.757088, lng: -73.845821 }, "Citi Field"],
    [{ lat: 40.740027, lng: -73.840695 }, "Corona Park"],
    [{ lat: 40.750368, lng: -73.845612 }, "Flushing Tennis Center"],
    [{ lat: 40.660204, lng: -73.968956 }, "Prospect Park"],
    [{ lat: 40.706086, lng: -73.996864 }, "Brooklyn Bridge"],
    [{ lat: 40.606616, lng: -74.044660 }, "Verrazzano-Bridge"],
    [{ lat: 40.625124, lng: -74.115370 }, "Staten Island Zoo"],
    [{ lat: 40.785877, lng: -73.977283 }, "Childrens Museum Manhattan"],
    [{ lat: 40.781324, lng: -73.973988 }, "American Museum of National History"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}