angular.module('modal').
        component('modal', {
            templateUrl: 'modal/modal.template.html',
            controller: ['$rootScope', '$scope',
                function modalController($rootScope, $scope) {
                    $scope.title = 'forecast';

                    $scope.showModal = function () {
                        $('#modal').modal('show').then(
                                $rootScope.$broadcast('modalShown', {})
                                );
                    };

                    $scope.$on('showModal', function (event, args) {
                        $scope.title = args.city + ' forecast';
                        $scope.showModal();
                    });
                }
            ],
            transclude: true
        });