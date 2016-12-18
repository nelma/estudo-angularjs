describe('Controller: ListCtrl', function(){

    //instancia uma nova versao do modulo antes de cada teste
    beforeEach(module('notesApp'));

    var ctrl;

    //antes de cada teste de unidade, cria uma nova instancia do controlador
    //$controller eh um servico do Angular
    beforeEach(inject(function($controller){
        ctrl = $controller('ListCtrl');
    }));

    it('should have items available on load', function(){
        expect(ctrl.items).toEqual([
            {id: 1, label: 'First', done: true},
            {id: 2, label: 'Second', done: false}
        ]);
    });

    it('should have highlight items bases on state', function(){
        var item = {id: 1, label: 'First', done: true};
        var actualClass = ctrl.getDoneClass(item);

        expect(actualClass.finished).toBeTruthy();
        expect(actualClass.unfinished).toBeTruthy();

        item.done = false;

        actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeFalsy();
        expect(actualClass.unfinished).toBeFalsy();
    })
});