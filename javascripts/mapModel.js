function MapModel(){
}

MapModel.prototype = {

  getLocation: function () {
    var position;

    function success(p) {
      position = p;
      doSomethingWithPosition();
    }

    function error (msg) {
      console.log(msg);
    }

    navigator.geolocation.getCurrentPosition(success, error);

    function doSomethingWithPosition(){
       var longitude = position.coords.longitude;
       var latitude = position.coords.latitude;
       console.log("lng: " + longitude + "," + "lat: " + latitude);
       nextMethodInLine(longitude, latitude);
    }

    function nextMethodInLine(longitude, latitude){
       console.log("this is the next method in the chain and here are the coordinates again just to prove it" + longitude + ", " + latitude);
    }
  }
}

