angular.module('modal').
        component('modal', {
            templateUrl: 'modal/modal.template.html',
            controller: ['$rootScope', '$scope',
                function modalController($rootScope, $scope) {
                    $scope.title = 'forecast';

                    function openNav() {
                        document.getElementById("mySidenav").style.height = "100%";
                        open = true;
                    }

                    function closeNav() {
                        document.getElementById("mySidenav").style.height = "0";
                        open = false;
                    }

                    document.getElementsByTagName("BODY")[0].onclick = function (e) {
                        if (open) {
                            closeNav();
                        }
                    };

                    $scope.showModal = function () {
                        openNav();
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
        