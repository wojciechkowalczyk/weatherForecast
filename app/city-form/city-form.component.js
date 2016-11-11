angular.module('cityForm').
  component('cityForm', {
    templateUrl: 'city-form/city-form.template.html',
    controller: [function cityFormController() {
        
      }
    ]
  });
  
  angular.module('weatherForecast').value('cityValue', 'london');
  