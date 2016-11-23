angular.module('mapPicker').
        component('mapPicker', {
            templateUrl: 'map-picker/map-picker.template.html',
            controller: ['$rootScope', '$scope',
                function mapPickerController($rootScope, $scope) {
                    var self = this;
                    self.marker = null;
                    self.map;

                    $scope.initialize = function () {
                        var mapCanvas = document.getElementById("map");
                        var center = new google.maps.LatLng(51.508742, -0.120850);
                        var mapOptions = {center: center, zoom: 5};
                        self.map = new google.maps.Map(mapCanvas, mapOptions);
                        google.maps.event.addListener(self.map, 'click', function (event) {
                            $scope.$apply(function () {
                                lat = event.latLng.lat();
                                lon = event.latLng.lng();
                                self.placeMarker(event.latLng);
                                self.shareLatLon(lat, lon);
                            });
                        });
                    };

                    self.placeMarker = function (location) {
                        if (self.marker !== null) {
                            self.marker.setPosition(location);
                        } else {
                            self.marker = new google.maps.Marker({
                                position: location,
                                map: self.map
                            });
                        }
                    };

                    self.placeLatLonMarker = function (lat, lon, center) {
                        markerLocation = new google.maps.LatLng(lat, lon);
                        self.placeMarker(markerLocation);
                        if (center) {
                            self.map.setCenter(markerLocation);
                        }
                    };

                    self.shareLatLon = function (lat, lon) {
                        $rootScope.$broadcast('latLonChanged', {lat: lat, lon: lon});
                    };

                    $scope.$on('setLatLon', function (event, args) {
                        self.placeLatLonMarker(args.lat, args.lon, args.center);
                    });

                    google.maps.event.addDomListener(window, 'load', $scope.initialize);
                }
            ]
        });
