angular.module('stockMarketApp')
    .directive('stockWidget', [function () {
        return {
            templateUrl: 'stock.html',
            restrict: 'A',
            scope: {
                stockData: '=',//o valor do attr dever� ser tratado como JSON
                stockTitle: '@',//o valor do attr dever� ser tratado como String
                whenSelect: '&'//o valor do attr � uma fun��o de algum controlador cuja a ref vai estar disponivel a direita
            },
            link: function($scope, $element, $attr) {
                $scope.getChange = function(stock) {
                    return Math.ceil((
                        (stock.price - stock.previous) / stock.previous) * 100);
                };

                $scope.onSelect = function() {
                    $scope.whenSelect({
                        stockName: $scope.stockData.name,
                        stockPrice: $scope.stockData.price,
                        stockPrevious: $scope.stockData.previous
                    })
                }
            }
        };
    }]);