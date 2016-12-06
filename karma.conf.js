module.exports = function(config) {
    config.set({
        basePath: '',
        framework: ['jasmine'],
        files: [
            'angular.min.js',
            'angular-mock.js',
            'controller.js',
            'simpleSpec.js',
            'controllerSpec.js'
        ],
        exclude: [],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers:['Chrome'],
        singleRun: false
    });
};