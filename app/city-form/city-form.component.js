angular.module('cityForm').
  component('cityForm', {
    template: '<div>{{$ctrl.forecast}}</div>',
    controller: ['forecastService',
      function formController(forecastService) {
        var self = this;
        self.forecast = forecastService.getCityForecast('warsaw');
      }
    ]
  });
  