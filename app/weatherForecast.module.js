angular.module('weatherForecast', [
    'forecast',
    'cityForm'
]);

angular.module('weatherForecast').
  component('forecast', {
    template:   '<div>'+
                    '<input ng-click="$ctrl.getForecast()" type="submit" value="get forecast">'+
                '</div>' + 
                '<div>{{$ctrl.forecast}}</div>',
        controller: ['forecastService', 'cityValue',
      function forecastController(forecastService, cityValue) {
        var self = this;
        //self.forecast = forecastService.getCityForecast(cityValue);
        self.getForecast = function () {
            self.forecast = forecastService.getCityForecast(forecastService.cityValue);
        };
      }
    ]
  });
  
angular.module('weatherForecast').value('cityValue', 'wieliczka');
