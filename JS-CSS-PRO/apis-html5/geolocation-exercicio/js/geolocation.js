navigator.geolocation.getCurrentPosition(function (position) {

  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  console.log(latitude, longitude);


  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([longitude, latitude]),
      zoom: 17
    })
  });
});


var watchID = navigator.geolocation.watchPosition(
  function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    console.log(latitude, longitude);
  },

  function () {
    console.log('DEU ERRO!');
  },

  {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 3000
  }
);

console.log(watchID);





