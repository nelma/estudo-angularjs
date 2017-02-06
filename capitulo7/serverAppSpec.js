describe('MainCtrl Server Calls', function() {
    beforeEach(module('serverApp'));

    var ctrl, mockBackend;

    beforeEach(inject(function($controller, $httpBackend) {
        mockBackend = $httpBackend;

        mockBackend.expectGET('/api/note')
            .respond([{id: 1, label: 'Mock'}]);
        ctrl = $controller('MainCtrl');
        //nesse ponto, uma solicitacao ao servidor deveria ser feita
    }));

    it('Should load items from server', function() {
        //Inicialmente, antes de o servidor responder, items deverá estar vazio
        expect(ctrl.items).toEqual([]);

        //Simula uma resposta ao servidor
        mockBackend.flush();
        expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
    });

    afterEach(function() {
        //Garante que todas os expects definidos em $httpBackend realmente foram chamadas
        mockBackend.verifyNoOutstandingExpectation();

        //Garante que todas as solicitações ao servidor
        //foram realmente respondidas (usando flush())
        mockBackend.verifyNoOutstandingRequest();
    })
});