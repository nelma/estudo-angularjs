module.exports = function(config) {
    config.set({
        basePath: '',
        framework:['jasmine'],
        files:[
            'node_modules/karma-jasmine/lib/jasmine.js',
            'node_modules/karma-jasmine/lib/adapter.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'controller.js',
            'controllerSpec.js'
        ],
        exclude:[],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers:['Chrome'],
        singleRun: false
    });
};