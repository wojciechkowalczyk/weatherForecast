angular.module('weatherForecast', [
    'forecast', 
]);

angular.module('weatherForecast').
  component('forecast', {
    template: '<div>{{$ctrl.forecast}}</div>',
    controller: ['forecastService',
      function forecastController(forecastService) {
        var self = this;
        self.forecast = forecastService.getCityForecast('warsaw');
      }
    ]
  });