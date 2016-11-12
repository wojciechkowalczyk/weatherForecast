angular.module('cityForm').
  component('cityForm', {
    templateUrl: 'city-form/city-form.template.html',
    controller: ['cityValue', 'forecastService', 
      function cityFormController(cityValue, forecastService) {
        var self = this;
        self.getForecast = function getForecast(city) {
            forecastService.cityValue = city;
            //angular.module('weatherForecast').value('cityValue', city);
            alert(forecastService.cityValue);
            forecastService.getForecast(forecastService.cityValue);
        };
      }
    ]
  });
  