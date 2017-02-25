describe('timeAgo Filter', function() {
    beforeEach(module('filtersApp'));

    var filter;
    beforeEach(inject(function(timeAgoFilter) {
        filter = timeAgoFilter;
    }));

    it('should respond based on timestamp', function() {
       var currentTime = new Date().getTime();

        currentTime -= 10000;
        expect(filter(currentTime, false)).toEqual('minutes ago');

        var fewMinutesAgo = currentTime - 1000 * 60;
        expect(filter(fewMinutesAgo, false)).toEqual('minutes ago');

        var fewHoursAgo = currentTime - 1000 * 60 * 68;
        expect(filter(fewHoursAgo, false)).toEqual('hours ago');

        var fewDaysAgo = currentTime - 1000 * 60 * 60 * 26;
        expect(filter(fewDaysAgo, false)).toEqual('days ago');

        var fewMonthsAgo = currentTime - 1000 * 60 * 60 * 24 * 32;
        expect(filter(fewMonthsAgo, false)).toEqual('months ago');
    });
});