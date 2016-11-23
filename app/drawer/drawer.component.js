angular.module('drawer').
        component('drawer', {
            templateUrl: 'drawer/drawer.template.html',
            controller: ['$rootScope', '$scope',
                function drawerController($rootScope, $scope) {
                    $scope.title = 'forecast';

                    $scope.openDrawer = function () {
                        document.getElementById("drawer").style.height = "100%";
                        open = true;
                    };

                    $scope.closeDrawer = function () {
                        document.getElementById("drawer").style.height = "0";
                        open = false;
                    };

                    document.getElementsByTagName("BODY")[0].onclick = function (e) {
                        if (open) {
                            $scope.closeDrawer();
                        }
                    };

                    $scope.showDrawer = function () {
                        $scope.openDrawer();
                        $rootScope.$broadcast('drawerShown', {});
                    };

                    $scope.$on('showDrawer', function (event, args) {
                        $scope.title = args.city + ' forecast';
                        $scope.showDrawer();
                    });
                }
            ],
            transclude: true
        });
        