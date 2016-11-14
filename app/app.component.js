angular.module('app').
    component('app', {
        templateUrl: 'app.template.html',
        controller: ['$rootScope', '$scope', 'forecastService', 
            function appController($rootScope, $scope, forecastService) {
                $scope.$on('cityChanged', function(event, args) {
                    $rootScope.$broadcast('presentForecast', 
                        { forecast: forecastService.getCityForecast(args.city) }
                    );
                });
                
                ;
            }
        ]
    });