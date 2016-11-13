angular.module('weatherForecast')
    .service('weatherForecastService', ['$rootScope', 'forecastPresentationService',  function ($rootScope, forecastPresentationService) {

        var self = this;

        this.getCity = function (city) {
            self.city = city;
            forecastPresentationService.getCity();
        };
    }]);