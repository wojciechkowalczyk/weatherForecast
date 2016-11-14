angular.module('forecastPresentation').
  component('forecastPresentation', {
    templateUrl: 'forecast-presentation/forecast-presentation.template.html',
    controller: ['forecastService', '$scope',
      function forecastController(forecastService, $scope) {
        var self = this;
        
        self.getForecast = function (city) {
            self.forecast = forecastService.getCityForecast(city);
        };
        
        $scope.$on('getForecast', function(event, args) {
            self.getForecast(args.city);
        });
      }
    ]
  });
  