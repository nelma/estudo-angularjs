angular.module('stockMarketApp')
    .directive('simpleStockRepeat', [function() {
        return {
            restrict: 'A',
            /**
             * Captura e substitui todos os elementos
             * em vez de fazer isso somente com seu conteudo
             */
            transclude: 'element',
            /**
             * Um transclude é passado com quinto
             * argumento da funcao link
             */
            link: function ($scope, $element, $attrs, ctrl, $transclude) {
                var myArray = $scope.$eval($attrs.simpleStockRepeat);

                var container = angular.element(
                    '<div class="container"></div>'
                );

                for(var i = 0; i < myArray.length; i++) {
                    /**
                     * Cria uma instancia do elemento com um novo escopo filho
                     * usando a funcao de ligacao do clone
                     */
                    var instance = $transclude($scope.$new(),
                        function (clonedElement, newScope) {
                            //Expoe as variaveis personalizadas da instancia
                            newScope.currentIndex = i;
                            newScope.stock = myArray[i];
                        });
                    //Adiciona em nosso container
                    container.append(instance);
                }

                /**
                 * Com transclude: 'element', o elemento é substituido
                 * por um comentario. Adiciona nosso conteudo gerado apos
                 * o comentario
                 */
                $element.after(container);
            }
        }
    }])