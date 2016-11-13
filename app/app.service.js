angular.module('app')
    .service('appService', ['$rootScope', 'forecastPresentationService',  function ($rootScope, forecastPresentationService) {

        var self = this;

        this.getCity = function (city) {
            self.city = city;
            forecastPresentationService.getCity();
        };
    }]);