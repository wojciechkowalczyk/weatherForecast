angular.module('modal').
        component('modal', {
            templateUrl: 'modal/modal.template.html',
            controller: ['$rootScope', '$scope',
                function modalController($rootScope, $scope) {
                    $scope.title = 'forecast';

                    $scope.openNav = function () {
                        document.getElementById("mySidenav").style.height = "100%";
                        open = true;
                    };

                    $scope.closeNav = function () {
                        document.getElementById("mySidenav").style.height = "0";
                        open = false;
                    };

                    document.getElementsByTagName("BODY")[0].onclick = function (e) {
                        if (open) {
                            $scope.closeNav();
                        }
                    };

                    $scope.showModal = function () {
                        $scope.openNav();
                        $rootScope.$broadcast('modalShown', {});
                    };

                    $scope.$on('showModal', function (event, args) {
                        $scope.title = args.city + ' forecast';
                        $scope.showModal();
                    });
                }
            ],
            transclude: true
        });
        