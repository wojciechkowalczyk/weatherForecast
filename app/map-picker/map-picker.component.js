angular.module('mapPicker').
        component('mapPicker', {
            templateUrl: 'map-picker/map-picker.template.html',
            controller: ['$rootScope', '$scope',
                function mapPickerController($rootScope, $scope) {
                    var self = this;
                    
                    $scope.initialize = function() {
                        var map = new google.maps.Map(document.getElementById('map'), {
                           center: {lat: -34.397, lng: 150.644},
                           zoom: 8
                        });
                    };    
       
                    google.maps.event.addDomListener(window, 'load', $scope.initialize); 
                    
                    self.shareLatLon = function (lat, lon) {
                        $rootScope.$broadcast('LatLonChanged', {lat: lat, lon: lon});
                    };

                    $scope.$on('setLatLon', function (event, args) {
                        self.lat = args.lat;
                        self.lon = args.lon;
                    });
                }
            ]
        });
