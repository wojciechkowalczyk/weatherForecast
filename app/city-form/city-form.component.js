angular.module('cityForm').
    component('cityForm', {
        templateUrl: 'city-form/city-form.template.html',
        controller: ['$rootScope',
            function cityFormController($rootScope) {
                var self = this;
                self.setCity = function (city) {
                    $rootScope.$broadcast('cityChanged', {city: city});
                };
            }
        ]
    });
