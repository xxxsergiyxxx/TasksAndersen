'use strict';
module.exports = (config)=> {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        files: [          
            'src/**/*.ts'
        ],
        preprocessors: {
            'src/**/*.ts': ['karma-typescript'],
            'e2e-tests/**/*.ts': ['karma-typescript']
        },
        reporters: ['progress', 'karma-typescript'],
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.json'
        },
        logLevel: config.LOG_INFO,
        browsers: ['Chrome']
    });
};