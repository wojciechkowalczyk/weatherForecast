angular.module('mapPicker')
    .service('mapPickerService', ['$rootScope', 'appService',  function ($rootScope, appService) {

        var self = this;

        this.setLatLon = function (lat, lon) {
            self.lat = lat;
            self.lon = lon;
            appService.getLatLon();
        };
        
        this.getLatLon = function () {
            $rootScope.$broadcast('getLatLon', { any: {} });
        };
    }]);
