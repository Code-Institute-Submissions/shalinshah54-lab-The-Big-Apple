
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {  lat: 40.7834345, lng: -73.9662495 },
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const attractions = [
  ["Empire State Building", 40.748441, -73.985664, 4],
  ["Time Square", 40.758896, -73.985130, 5],
  ["One World Trade", 40.712743, -74.013379, 3],
  ["Wall Street", 40.706036, -74.008826, 2],
  ["Central Park", 40.782865, -73.965355, 1],
  ["Grand Central Terminals", 40.754759,-73.978946, 1],
  ["Statue of Liberty", 40.686283, -74.042951, 1],
  ["Yankee Stadium", 40.829643, -73.926175, 1],
  ["Bronx Zoo", 40.850595, -73.876998, 3],
  ["Bronx Botanical Garden", 40.861705, -73.880690, 4],
  ["Citi Field", 40.757088, -73.845821, 1],
  ["Corona Park", 40.740027, -73.840695, 1],
  ["Tennis US open", 40.750368, -73.845612, 1],
  ["Conney Island", 40.575544, -73.970702, 1],
  ["Prospect Park", 40.660204, -73.968956, 1],
  ["Brooklyn Bridge", 40.706086, -73.996864, 1],
  ["Verrazano Bridge", 40.606616, -74.044660, 1],
  ["Staten Island Zoo", 40.625124, -74.115370, 1],
  ["Children Museum", 40.785877, -73.977283, 1],
  ["Museum of Nature and History", 40.781324, -73.973988, 1],
];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < attractions.length; i++) {
    const attraction = attractions[i];

    new google.maps.Marker({
      position: { lat: attraction[1], lng: attraction[2] },
      map,
      icon: image,
      shape: shape,
      title: attraction[0],
      zIndex: attraction[3],
    });
  }
}

