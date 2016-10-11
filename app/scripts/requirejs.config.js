require.config({
    baseUrl: 'scripts',
    urlArgs: "",
    paths: {
        'requirejs': '../../bower_components/requirejs/require',
        'angular': '../../bower_components/angular/angular',
        'angular-route': '../../bower_components/angular-route/angular-route',
        'angular-messages': '../../bower_components/angular-messages/angular-messages',
        'angular-resource': '../../bower_components/angular-resource/angular-resource',
        'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
        'angular-animate': '../../bower_components/angular-animate/angular-animate',
        'angular-touch': '../../bower_components/angular-touch/angular-touch',
        'angular-bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap',
        'angular-bootstrap-tpls': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        "angular-local-storage": "../../bower_components/angular-local-storage/dist/angular-local-storage",
        "angular-http-auth": "../../bower_components/angular-http-auth/src/http-auth-interceptor",
        /*'tmhDynamicLocale': '../../bower_components/angular-dynamic-locale/src/tmhDynamicLocale',
        'pascalprecht.translate': '../../bower_components/angular-translate/angular-translate',
        'angular-translate-loader-url': '../../bower_components/angular-translate-loader-url/angular-translate-loader-url',
        'angular-translate-loader-static-files': '../../bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files',
        'angular-translate-loader-partial': '../../bower_components/angular-translate-loader-partial/angular-translate-loader-partial',
        'angular-translate-storage-cookie': '../../bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie',
        'angular-translate-storage-local': '../../bower_components/angular-translate-storage-local/angular-translate-storage-local',*/
        "angular-ui-router": "../../bower_components/angular-ui-router/release/angular-ui-router",
        "restangular": "../../bower_components/restangular/dist/restangular",
        "ui-utils": "../../bower_components/angular-ui-utils/index",
        "angular-ui-keypress": "../../bower_components/angular-ui-keypress/keypress"
    },
    shim: {
        'app': {
            deps: [
                'angular',
                'angular-route',
                'angular-messages',
                'angular-resource',
                'angular-cookies',
                'angular-sanitize',
                'angular-animate',
                'angular-touch',
                'angular-bootstrap',
                'angular-bootstrap-tpls',
                'angular-local-storage',
                'angular-http-auth',
                /*'tmhDynamicLocale',
                'pascalprecht.translate',
                'angular-translate-loader-url',
                'angular-translate-loader-static-files',
                'angular-translate-loader-partial',
                'angular-translate-storage-cookie',
                'angular-translate-storage-local',*/
                "angular-ui-router",
                "restangular",
                "ui-utils",
                'angular-ui-keypress'
            ],
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-messages': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-touch': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-bootstrap-tpls': {
            deps: ['angular']
        },
        'angular-local-storage': {
            deps: ['angular']
        },
        'angular-http-auth': {
            deps: ['angular']
        },
        /*'tmhDynamicLocale': {
            deps: ['angular']
        },
        'pascalprecht.translate': {
            deps: ['angular']
        },
        'angular-translate-loader-url': {
            deps: ['pascalprecht.translate']
        },
        'angular-translate-loader-static-files': {
            deps: ['pascalprecht.translate']
        },
        'angular-translate-loader-partial': {
            deps: ['pascalprecht.translate']
        },
        'angular-translate-storage-cookie': {
            deps: ['pascalprecht.translate']
        },
        'angular-translate-storage-local': {
            deps: ['pascalprecht.translate']
        },*/
        'angular-ui-router': {
            deps: ['angular']
        },
        'restangular': {
            deps: ['angular']
        },
        'ui-utils': {
            deps: ['angular']
        },
        'angular-ui-keypress': {
            deps: ['angular']
        }
    }
});
