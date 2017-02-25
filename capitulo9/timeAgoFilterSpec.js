describe('timeAgo Filter', function() {
    beforeEach(module('filtersApp'));

    var filter;
    beforeEach(inject(function(timeAgoFilter) {
        filter = timeAgoFilter;
    }));

    it('should respond based on timestamp', function() {
            //A presenca de new Date().getTime dificulta um pouco
            //realizar o teste de unidade de forma deterministica
            //O deial seria injetar um dateProvider no filtro timeAgo,
            //mas estamos tentando manter a simplicidade nesse caso
            //Potanto iremos supor que nossos testes sao rapidos o suficiente
            //para serem executados em questao de milissegundos.

            var currentTime = new Date().getTime();
            currentTime -= 10000;
            expect(filter(currentTime)).toEqual('seconds ago');
    });
});