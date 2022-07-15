angular
    .module('altairApp')
    .controller('top_menuCtrl', [
        '$rootScope',
        '$scope',
        '$timeout',
        function ($rootScope,$scope,$timeout) {

            $rootScope.topBarActive = true;
            $rootScope.topMenuActive = true;

            $scope.$on('$destroy', function() {
                $rootScope.topBarActive = false;
                $rootScope.topMenuActive = false;
            });
            
        }
    ]);