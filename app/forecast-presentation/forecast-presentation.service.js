angular.module('forecastPresentation')
    .service('forecastPresentationService', ['$rootScope', function ($rootScope) {

        this.getCity = function () {
            $rootScope.$broadcast('getForecast', { any: {} });
        };
    }]);