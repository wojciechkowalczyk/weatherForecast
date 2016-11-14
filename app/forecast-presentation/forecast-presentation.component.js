angular.module('forecastPresentation').
        component('forecastPresentation', {
            templateUrl: 'forecast-presentation/forecast-presentation.template.html',
            controller: ['$scope',
                function forecastController($scope) {
                    var self = this;

                    self.presentForecast = function (forecast) {
                        self.forecast = forecast;
                    };

                    $scope.$on('presentForecast', function (event, args) {
                        self.presentForecast(args.forecast);
                    });
                }
            ]
        });
  