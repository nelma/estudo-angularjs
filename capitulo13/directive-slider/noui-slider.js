angular.module('sliderApp')
    .directive('noUiSlider', [function() {
        return {
            restrict: 'E',
            require: 'ngModel', //Requer que essa diretiva seja usada no mesmo elemento que estiver a diretiva noUiSlider
            link: function($scope, $element, $attr, ngModelCtrl) {
                $element.noUiSlider({
                    //Pode ser que ainda n�o tenhamos o valor inicial em ngModelCtrl
                    start: 0,
                    range: {
                        //$attr, por default, disponibiliza valores em forma de string
                        //noUiSlider espera numeros, portando � preciso fazer convers�o
                        min: Number($attr.rangeMin),
                        max: Number($attr.rangeMax)
                    }
                });

                //Qdo os dados sao alterados no AngularJS
                //Notifica a directiva de terceiros sobre a mudanca
                ngModelCtrl.$render = function() {
                    $element.val(ngModelCtrl.$viewValue);
                };

                //Qdo os dados s�o alterados fora do AngularJS
                $element.on('set', function(args) {
                    //Tamb�m diz ao AngularJS que ele deve atualizar a UI
                    //Isso por ser tratar de UI de terceiros
                    $scope.$apply(function() {
                        //Define o dado no AngularJS
                        ngModelCtrl.$setViewValue($element.val());
                    });
                });
            }
        };
    }]);