function initMap() {
  var centerLatLng = new google.maps.LatLng(59.938863, 30.323086);
  var centerMap = new google.maps.LatLng(59.938839, 30.318961);
  var mapOptions = {
    center: centerMap,
    zoom: 17
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: centerLatLng,
    map: map,
    title: "ул. Большая Конюшенная, д. 19/8",
    icon: "./img/map-pin.png"
  });
}
google.maps.event.addDomListener(window, "load", initMap);
