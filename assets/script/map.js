
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 40.7834345,  
            lng: -73.9662495,
        }
    });
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length],
        });
      });
      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
}
const locations = [
    { lat: 40.748441, lng: -73.985664 },
    { lat: 40.688908, lng: -73.984822 },
    { lat: 40.712743, lng: -74.013379 },
    { lat: 40.706036, lng: -74.008826 },
    { lat: 40.782865, lng: -73.965355 },
    { lat: 40.754759, lng: -73.978946 },
    { lat: 40.686283, lng: -74.042951 },
    { lat: 40.829643, lng: -73.926175 },
    { lat: 40.850595, lng: -73.876998 },
    { lat: 40.861705, lng: -73.880690 },
    { lat: 40.757088, lng: -73.845821 },
    { lat: 40.740027, lng: -73.840695 },
    { lat: 40.750368, lng: -73.845612 },
    { lat: 40.575544, lng: -73.970702 },
    { lat: 40.660204, lng: -73.968956 },
    { lat: 40.706086, lng: -73.996864 },
    { lat: 40.606616, lng: -74.044660 },
    { lat: 40.625124, lng: -74.115370 },
    { lat: 40.785877, lng: -73.977283 },
    { lat: 40.781324, lng: -73.973988 },


  ];

  