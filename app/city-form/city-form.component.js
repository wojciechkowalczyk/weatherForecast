angular.module('cityForm').
  component('cityForm', {
    templateUrl: 'city-form/city-form.template.html',
    controller: ['forecastService', 'weatherForecastService',  
      function cityFormController(forecastService, weatherForecastService) {
        var self = this;
        self.getForecast = function getForecast(city) {
            forecastService.cityValue = city;
            weatherForecastService.getForecast(forecastService.cityValue);
        };
      }
    ]
  });
  