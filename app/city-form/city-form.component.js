angular.module('cityForm').
        component('cityForm', {
            templateUrl: 'city-form/city-form.template.html',
            controller: ['$rootScope', '$scope',
                function cityFormController($rootScope, $scope) {
                    var self = this;
                    self.shareCity = function (city) {
                        $rootScope.$broadcast('cityChanged', {city: city});
                    };

                    $scope.$on('setCity', function (event, args) {
                        //alert('setcity ' + args.city);
                        self.city = args.city;
                        //$('#city').val(args.city);
                    });
                }
            ]
        });
