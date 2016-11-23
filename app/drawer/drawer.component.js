angular.module('drawer').
        component('drawer', {
            templateUrl: 'drawer/drawer.template.html',
            controller: ['$rootScope', '$scope',
                function drawerController($rootScope, $scope) {
                    $scope.title = 'forecast';
                    $scope.opened = false;

                    $scope.openDrawer = function () {
                        document.getElementById("drawer").style.height = "100%";
                        $scope.opened = true;
                    };

                    $scope.closeDrawer = function () {
                        document.getElementById("drawer").style.height = "0";
                        $scope.opened = false;
                    };

                    document.getElementsByTagName("BODY")[0].onclick = function (e) {
                        if ($scope.opened) {
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
        