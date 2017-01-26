describe('ItemCtrl with inline mock', function() {
    beforeEach(module('notesApp1'));

    var ctrl, mockService;

    //$provide compartilha seu namespace com os modulos carregados
    //como esta definicao esta após o carregamento do modulo notesApp1,
    //o ItemService original sera sobrescrito
    beforeEach(module(function($provide) {
        mockService = {
            list: function() {
                return [{id: 1, label: 'Mock'}];
            }
        };
        $provide.value('ItemService', mockService);
    }));

    beforeEach(inject(function($controller) {
        ctrl = $controller('ItemCtrl');
    }));

    it('should load mocked out items', function() {
        expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
    });
});