angular.module('cityForm')
    .service('cityFormService', ['$rootScope', 'appService',  function ($rootScope, appService) {

        var self = this;

        this.setCity = function (city) {
            self.city = city;
            appService.getCity();
        };
    }]);
