describe('Server App Integration', function() {
    beforeEach(module('serverApp2'));

    var ctrl, mockBackend;

    beforeEach(inject(function($controller, $httpBackend) {
        mockBackend = $httpBackend;
        mockBackend.expectGET('/api/note')
            .respond(404, {msg: 'Not Found'});

        ctrl = $controller('MainCtrl');
        //Neste ponto, uma solicitacao ao servidor deveria ser feita
    }));

    it('should handle error while loading items', function() {
        //Inicialmente, antes de o servidor responder,
        //items deverá estar vazio
        expect(ctrl.items).toEqual([]);

        //Simula uma resposta do servidor
        mockBackend.flush();

        //Nao ha itens provenientes do servidor, somente um erro
        //Portanto items deverá continuar vazio
        expect(ctrl.items).toEqual([]);

        //verifica a msg de erro
        expect(ctrl.errorMessage).toEqual('Not Found');
    });

    afterEach(function() {
        //Garante que todas as expects definidas e $httpBackend foram chamadas
        mockBackend.verifyNoOutstandingExpectation();

        //Garante que todas as solicitacoes so server foram respondidas (usando flush)
        mockBackend.verifyNoOutstandingRequest();
    });
});