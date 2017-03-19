angular.module('stockMarketApp')
    .directive('stockWidget', [function () {
        return {
            templateUrl: 'stock.html',
            restrict: 'AE' //dessa forma eh possivel usar stock-widget como atributos de elemento existente qto como um novo elemento
        };
    }]);