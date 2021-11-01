
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 40.7834345,  
            lng: -73.9662495,    // initiating map
        }
    });

  const iconBase =
    "http://maps.google.com/mapfiles/kml/shapes/";
  const icons = {
    attraction: {
      icon: iconBase + "camera.png",
    },
    financial: {
      icon: iconBase + "dollar.png",
    },
    parks: {
      icon: iconBase + "picnic.png",
    },
    trains: {
      icon: iconBase + "subway.png"
    },
    sports: {
      icon: iconBase + "play.png",  
    },
    island: {
      icon: iconBase + "water.png",  
    },
    arts: {
      icon: iconBase + "arts.png",  
    },
  };
  const features = [
    {
      placeName: "Empire State Building",
      position: new google.maps.LatLng(40.748441, -73.985664),
      type: "attraction", //Empire State
    },
    {
      placeName: "Time Square",
      position: new google.maps.LatLng(40.758896, -73.985130),
      type: "attraction", // Time Square
    },
    {
      position: new google.maps.LatLng(40.712743, -74.013379),
      type: "attraction", // One World  Trade
    },
    {
      position: new google.maps.LatLng(40.706036, -74.008826),
      type: "financial", // Wall Street
    },
    {
      position: new google.maps.LatLng(40.782865, -73.965355),
      type: "parks", // Central Park
    },
    {
      position: new google.maps.LatLng(40.754759,-73.978946),
      type: "trains", // Grand Central Terminals
    },
    {
      position: new google.maps.LatLng(40.686283, -74.042951),
      type: "attraction",// Statue of Liberty
    },
    {
      position: new google.maps.LatLng(40.829643, -73.926175),
      type: "sports", //Yankee Stadium
    },
    {
      position: new google.maps.LatLng( 40.850595, -73.876998),
      type: "attraction", // Bronx Zoo
    },
    {
      position: new google.maps.LatLng(40.861705, -73.880690),
      type: "parks", // Bronx Botanical Garden
    },
    {
      position: new google.maps.LatLng(40.757088, -73.845821),
      type: "sports",// Citi Field
    },
    {
      position: new google.maps.LatLng(40.740027, -73.840695),
      type: "parks", // Corona Park
    },
    {
      position: new google.maps.LatLng(40.750368, -73.845612),
      type: "sports",// Tennis US open
    },
    {
      position: new google.maps.LatLng(40.575544, -73.970702),
      type: "island", // Conney Island
    },
    {
      position: new google.maps.LatLng(40.660204, -73.968956),
      type: "parks",// Prospect Park
    },
    {
      position: new google.maps.LatLng(40.706086, -73.996864),
      type: "attraction",//Brooklyn Bridge
    },
    {
      position: new google.maps.LatLng(40.606616, -74.044660),
      type: "attraction",// Verrazano Bridge
    },
    {
      position: new google.maps.LatLng(40.625124, -74.115370),
      type: "attraction", // Staten Island Zoo
    },
    {
      position: new google.maps.LatLng(40.785877, -73.977283),
      type: "arts",// Children Museum
    },
    {
      position: new google.maps.LatLng(40.781324, -73.973988),
      type: "arts",// Museum of Nature and History
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const markers = features.map((features, i) => {
        return new google.maps.Marker({
          position: features,
          label: labels[i % labels.length],
        });                                  // adding the cluster markers
      });
      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", 
      });

// const locations = [
//     { lat: 40.748441, lng: -73.985664 },//Empire State Building
//     { lat: 40.688908, lng: -73.984822 },//Times Square
//     { lat: 40.712743, lng: -74.013379 },//World One Tower
//     { lat: 40.706036, lng: -74.008826 },//Wall Street
//     { lat: 40.782865, lng: -73.965355 },//Central Park
//     { lat: 40.754759, lng: -73.978946 },//Grand Central Terminals
//     { lat: 40.686283, lng: -74.042951 },//Statue of Liberty
//     { lat: 40.829643, lng: -73.926175 },//Yankee Stadium
//     { lat: 40.850595, lng: -73.876998 },//Bronx Zoo
//     { lat: 40.861705, lng: -73.880690 },//Bronx Botanical Garden
//     { lat: 40.757088, lng: -73.845821 },//Citi Field
//     { lat: 40.740027, lng: -73.840695 },//Corona Park
//     { lat: 40.750368, lng: -73.845612 },//Tennis US open 
//     { lat: 40.575544, lng: -73.970702 },//Conney Island
//     { lat: 40.660204, lng: -73.968956 },//Prspect Park
//     { lat: 40.706086, lng: -73.996864 },//Brooklyn Bridge
//     { lat: 40.606616, lng: -74.044660 },//Verrazano Bridge
//     { lat: 40.625124, lng: -74.115370 },//Staten Island Zoo
//     { lat: 40.785877, lng: -73.977283 },//Children Museum
//     { lat: 40.781324, lng: -73.973988 },//Museum of Nature and History
//   ];

