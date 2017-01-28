describe('ItemService With global mock', function() {
    var ctrl;

    //garante que o mock seja carregado apos notesApp1
    //para sobrescrever o ItemService
    beforeEach(module('notesApp1'));
    beforeEach(module('notesApp1Mocks'));

    //$controller Servico do angular usado para criar novas
    // instancia do nosso controlador
    beforeEach(inject(function($controller) {
        ctrl = $controller('ItemCtrl');
    }));

    it('should load mocked out items', function () {
        expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
    });
});