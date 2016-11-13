angular.module('weatherForecast', [
    'forecast',
    'cityForm'
]);

angular.module('weatherForecast').
  component('forecast', {
    template:   '<div>{{$ctrl.forecast}}</div>',
        controller: ['cityFormService', 'forecastService', '$scope',
      function forecastController(cityFormService, forecastService, $scope) {
        var self = this;
        
        self.getForecast = function () {
            self.forecast = forecastService.getCityForecast(cityFormService.city);
        };
        
        $scope.$on('getForecast', function(event, args) {

            var anyThing = args.any;
            
            self.getForecast();
        });
      }
    ]
  });
  
angular.module('weatherForecast')
    .service('weatherForecastService', ['$rootScope', function ($rootScope) {

        this.getCity = function () {
            $rootScope.$broadcast('getForecast', { any: {} });
        };
    }]);
