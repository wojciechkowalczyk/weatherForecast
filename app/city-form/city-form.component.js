angular.module('cityForm').
  component('cityForm', {
    templateUrl: 'city-form/city-form.template.html',
    controller: ['cityFormService',  
      function cityFormController(cityFormService) {
        var self = this;
        self.setCity = function (city) {
            cityFormService.setCity(city);
        };
      }
    ]
  });
