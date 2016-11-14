angular.module('app').
    component('app', {
        templateUrl: 'app.template.html',
        controller: ['$rootScope', '$scope', 
            function appController($rootScope, $scope) {

                var self = this;

                $scope.$on('cityChanged', function(event, args) {
                    $rootScope.$broadcast('getForecast', { city: args.city });
                });
            }
        ]
    });