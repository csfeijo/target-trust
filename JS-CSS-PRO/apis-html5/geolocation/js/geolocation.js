navigator.geolocation.getCurrentPosition(function (position) {

  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  console.log(latitude, longitude);
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

// https://maps.google.com/maps?q=-30.0253184,-51.1606784&hl=es

// do_something(position.coords.latitude, position.coords.longitude);
