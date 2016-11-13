angular.module('forecastPresentation').
  component('forecastPresentation', {
    template:   '<div>{{$ctrl.forecast}}</div>',
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
  