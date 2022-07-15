angular
    .module('altairApp')
    .controller('breadcrumbsCtrl', [
        '$scope',
        '$rootScope',
        function ($scope,$rootScope) {

            $rootScope.topBarActive = true;

            $scope.$on('$destroy', function() {
                $rootScope.topBarActive = false;
            });
            
        }
    ]);