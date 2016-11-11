angular.module('weatherForecast', [
    'forecast',
    'cityForm'
]);

angular.module('weatherForecast').
  component('forecast', {
    template: '<div>{{$ctrl.forecast}}</div>',
    controller: ['forecastService', 'cityValue',
      function forecastController(forecastService, cityValue) {
        var self = this;
        self.forecast = forecastService.getCityForecast(cityValue);
        self.getForecast = function getForecast() {
            self.forecast = forecastService.getCityForecast(cityValue);
        };
      }
    ]
  });
  
angular.module('weatherForecast').value('cityValue', 'wieliczka');
