angular.module('app').
        component('app', {
            templateUrl: 'app/app.template.html',
            controller: ['$rootScope', '$scope', 'forecastService',
                function appController($rootScope, $scope, forecastService) {
                    var self = this;
                    $scope.$on('cityChanged', function (event, args) {
                        self.forecast = forecastService.getCityForecast(args.city);
                        self.forecastArray = jQuery.parseJSON(self.forecast);
                        
                        $rootScope.$broadcast('presentForecast',
                                {forecast: self.forecast}
                        );

                        $rootScope.$broadcast('setCity', {city: self.forecastArray.city.name});
                        $rootScope.$broadcast('setLatLon', {lat: self.forecastArray.city.coord.lat, lon: self.forecastArray.city.coord.lon});
                    });
                    
                    $scope.$on('latLonChanged', function (event, args) {
                        self.forecast = forecastService.getLatLonForecast(args.lat, args.lon);
                        self.forecastArray = jQuery.parseJSON(self.forecast);
                        
                        $rootScope.$broadcast('presentForecast',
                                {forecast: self.forecast}
                        );

                        $rootScope.$broadcast('setCity', {city: self.forecastArray.city.name});
                        $rootScope.$broadcast('setLatLon', {lat: self.forecastArray.city.coord.lat, lon: self.forecastArray.city.coord.lon});
                    });
                }
            ]
        });