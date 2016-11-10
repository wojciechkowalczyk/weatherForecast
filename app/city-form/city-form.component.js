angular.module('cityForm').
  component('cityForm', {
    templateUrl: 'city-form/city-form.template.html',
    controller: ['forecastService',
      function formController(forecastService) {
        var self = this;
        self.forecast = forecastService.getCityForecast('warsaw');
      }
    ]
  });
  