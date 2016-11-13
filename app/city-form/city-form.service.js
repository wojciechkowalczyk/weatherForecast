angular.module('cityForm')
    .service('cityFormService', ['$rootScope', 'weatherForecastService',  function ($rootScope, weatherForecastService) {

        var self = this;

        this.setCity = function (city) {
            self.city = city;
            weatherForecastService.getCity();
        };
    }]);
