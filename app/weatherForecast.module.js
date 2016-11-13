angular.module('weatherForecast', [
    'forecast',
    'cityForm'
]);

angular.module('weatherForecast').
  component('forecast', {
    template:   '<div>{{$ctrl.forecast}}</div>',
        controller: ['forecastService', '$scope',
      function forecastController(forecastService, $scope) {
        var self = this;
        
        self.getForecast = function () {
            self.forecast = forecastService.getCityForecast(forecastService.cityValue);
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

        this.getForecast = function getForecast(city) {
            $rootScope.$broadcast('getForecast', { any: {} });
        };
    }]);
