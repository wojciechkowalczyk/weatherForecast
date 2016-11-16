angular.module('mapPicker').
        component('mapPicker', {
            templateUrl: 'map-picker/map-picker.template.html',
            controller: ['$rootScope', '$scope',
                function mapPickerController($rootScope, $scope) {
                    var self = this;
                    var marker = null;
                    var map;

                    $scope.initialize = function() {
                        var mapCanvas = document.getElementById("map");
                        var myCenter=new google.maps.LatLng(51.508742,-0.120850);
                        var mapOptions = {center: myCenter, zoom: 5};
                        map = new google.maps.Map(mapCanvas, mapOptions);
                        google.maps.event.addListener(map, 'click', function(event) {
                          lat = event.latLng.lat(); 
                          lon = event.latLng.lng();
                          self.placeMarker(event.latLng);
                          self.shareLatLon(lat, lon);
                        });
                    };
                    
                    self.placeMarker = function (location) {
                        if (marker !== null) {
                            marker.setPosition(location);
                        } else {
                            marker = new google.maps.Marker({
                              position: location,
                              map: map
                            });
                        }
                      /*var infowindow = new google.maps.InfoWindow({
                        content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
                      });
                      infowindow.open(map,marker);*/ 
                    }

                    self.placeLatLonMarker = function (lat, lon) {
                        markerLocation = new google.maps.LatLng(lat, lon);
                        placeMarker(markerLocation); 
                        map.setCenter(markerLocation);
                    }
                    
                    self.shareLatLon = function (lat, lon) {
                        $rootScope.$broadcast('LatLonChanged', {lat: lat, lon: lon});
                    };

                    $scope.$on('setLatLon', function (event, args) {
                        self.placeLatLonMarker(args.lat, args.lon);
                    });
                    
                    google.maps.event.addDomListener(window, 'load', $scope.initialize);
                }
            ]
        });
