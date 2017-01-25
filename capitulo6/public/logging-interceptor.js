angular.module('notesApp', [])
    .controller('MainCtrl', ['$http', function ($http) {
        var self = this;
        self.items = [];
        self.newTodo = {};
        var fetchTodos = function() {
            return $http.get('/api/note').then(function(response) {
                self.items = response.data;
            }, function(erroResponse) {
                console.log('Error while fetching notes');
            });
        };

        fetchTodos();

        self.add = function() {
            $http.post('/api/note', self.newTodo)
                .then(fetchTodos)
                .then(function(response) {
                    self.newTodo = {};
                });
        };
    }]).factory('MyLoggingInterceptor', ['$q', function($q) {
        return {
            request: function(config) {
                console.log('Request made with ', config);
                return config;
                //Se houver erro, nao houver permissao ou ocorrer uma condicao personalizada
                //return $q.reject('Not allowed')
            },
            requestError: function(rejection) {
                console.log('Request error due to ', rejection);
                //continua para garantr qe a proxima cadeia de promise veja um erro
                return $q.reject(rejection);
                //ou tratado com sucesso
                //return someValue
            } ,
            response: function (response) {
                console.log('Response from server ', response);

                //retorna uma promise
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                console.log('Error in response ', rejection);
                //continua para garantir que a proxima cadeia de promise veja um erro
                //pode verificar o codigo de status de auth aqui se for necessario
                //if(rejection.status === 403) {
                //mostra um dialogo de login
                //retorna um valor para dizer aos controladores que foi tratado
                //}
                //Ou retorna uma rejeicao para continuar a
                //cadeia defalhas da promise
                return $q.reject(rejection);
            }
        }
    }]).config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('MyLoggingInterceptor');
    }]);