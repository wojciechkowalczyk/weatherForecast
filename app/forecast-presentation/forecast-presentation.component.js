angular.module('forecastPresentation').
  component('forecastPresentation', {
    templateUrl: 'forecast-presentation/forecast-presentation.template.html',
        controller: ['cityFormService', 'forecastService', '$scope',
      function forecastController(cityFormService, forecastService, $scope) {
        var self = this;
        
        self.getForecast = function () {
            self.forecast = forecastService.getCityForecast(cityFormService.city);
        };
        
        $scope.$on('getForecast', function(event, args) {

            var anyThing = args.any;
            
            self.getForecast();
        });
      }
    ]
  });
  