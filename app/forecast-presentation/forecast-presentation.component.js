angular.module('forecastPresentation').
        component('forecastPresentation', {
            templateUrl: 'forecast-presentation/forecast-presentation.template.html',
            controller: ['$scope', '$rootScope', 
                function forecastController($scope, $rootScope) {
                    var self = this;

                    self.presentForecast = function (forecast) {
                        self.forecast = forecast;
                        $rootScope.$broadcast('showDrawer', {city: angular.fromJson(forecast).city.name});
                    };
                    
                    $scope.$on('drawerShown', function (event, args) {
                        $rootScope.$broadcast('populateCharts', {forecast: self.forecast});
                    });

                    $scope.$on('presentForecast', function (event, args) {
                        self.presentForecast(args.forecast);
                    });
                }
            ]
        });
  