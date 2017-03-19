angular.module('stockMarketApp')
    .directive('stockWidget', [function () {
        return {
            templateUrl: 'stock.html',
            restrict: 'A', //so como atributo de elem existente
            scope: {
                stockData: '='//o valor do attr deve ser tratado como JSON
            },
            link: function($scope, $element, $attr) {
                $scope.getChange = function(stock) {
                    return Math.ceil((
                        (stock.price - stock.previous) / stock.previous) * 100);
                }
            }
        };
    }]);