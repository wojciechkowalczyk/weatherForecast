angular.module('cityForm').
  component('cityForm', {
    templateUrl: 'city-form/city-form.template.html',
    controller: ['cityValue', 'forecastService', 
      function cityFormController(cityValue, forecastService) {
        var self = this;
        self.getForecast = function getForecast(city) {
            cityValue = city;
            alert(cityValue);
            forecastService.getForecast(cityValue);
        };
      }
    ]
  });
  