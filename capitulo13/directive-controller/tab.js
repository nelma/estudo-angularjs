angular.module('stockMarketApp')
    .directive('tab', [function() {
        //objeto de definicao.
        return {
            restrict: 'E',
            transclude: true,
            template: '<div ng-show="selected" ng-transclude></div>',
            require: '^tabs',//a diretiva tabs deve estar presente em um do elementos-pai(nao necessariamente no pai imediato)
            scope: true,
            link: function($scope, $element, $attr, tabCtrl) {
                tabCtrl.registerTab($attr.title, $scope);
            }
        };
    }]);
