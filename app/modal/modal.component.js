angular.module('modal').
        component('modal', {
            templateUrl: 'modal/modal.template.html',
            controller: ['$rootScope', '$scope',
                function modalController($rootScope, $scope) {
                    $scope.title = 'forecast';
                    $scope.$on('showModal', function (event, args) {
                        $scope.title = args.city + ' forecast';
                        $('#modal').modal('show');
                    });
                }
            ], 
            transclude: true
        });