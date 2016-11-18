angular.module('app').
        component('app', {
            templateUrl: 'app/app.template.html',
            controller: ['$rootScope', '$scope', 'forecastService',
                function appController($rootScope, $scope, forecastService) {
                    var self = this;
                    $scope.$on('cityChanged', function (event, args) {
                        forecastService.getCityForecast(args.city).then(
                                function (response) {
                                    self.forecast = response;
                                    self.forecastArray = angular.fromJson(self.forecast);

                                    $rootScope.$broadcast('presentForecast',
                                            {forecast: self.forecast}
                                    );

                                    $rootScope.$broadcast('setCity', {city: self.forecastArray.city.name});
                                    $rootScope.$broadcast('setLatLon', {lat: self.forecastArray.city.coord.lat, lon: self.forecastArray.city.coord.lon});
                                });
                    });

                    $scope.$on('latLonChanged', function (event, args) {
                        forecastService.getLatLonForecast(args.lat, args.lon).then(
                                function (response) {
                                    self.forecast = response;
                                    self.forecastArray = angular.fromJson(self.forecast);

                                    $rootScope.$broadcast('presentForecast',
                                            {forecast: self.forecast}
                                    );

                                    $rootScope.$broadcast('setCity', {city: self.forecastArray.city.name});
                                    $rootScope.$broadcast('setLatLon', {lat: self.forecastArray.city.coord.lat, lon: self.forecastArray.city.coord.lon});
                                });
                    });
                }
            ]
        });