define(['app'], function(app) {
    'use strict';

    app.service('AuthenticationService', [function() {



    }]);

    app.service('AuthInterceptorService', ['$q', '$rootScope', '$injector',
        function($q, $rootScope, $injector) {

            function b(a) {
                return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e16] + 1e16).replace(/[01]/g, b)
            };

            var authInterceptorServiceFactory = {};

            var _request = function(config) {

                var randomValue = b();

                randomValue = 1;

                document.cookie = 'CSRF-TOKEN=' + randomValue + ";path=/";

                config.headers = config.headers || {};
                config.headers['X-CSRF-TOKEN'] = randomValue;


                if (authData) {

                    config.headers.Authorization = "Bearer " + authData; //'Bearer ' + authData.token;

                } else {

                    //AuthenticationService.gotoLogin();
                }
                return config;
            };

            var _response = function(config) {

                var ServiceHandler = $injector.get('ServiceHandler');

                if (config.status !== 200) {}

                if (config.status == 200 && config.data != null && config.data.code != null) {

                    var code = config.data.code;

                    ServiceHandler.handleResponseByCode(code, config.data);
                } else {


                    ServiceHandler.handleResponseByCode(config.status, config.data);
                }

                return config;
            }
            var _responseError = function(rejection) {

                var AuthenticationService = $injector.get('AuthenticationService');


                if (rejection.status === 0) {


                } else if (rejection.status === 400) {


                } else if (rejection.status === 401) {

                    if (rejection.data.error === "invalid_token") {


                    } else if (rejection.data.error === "unauthorized") {


                    }
                } else if (rejection.status === 403) {


                } else if (rejection.config.url.indexOf('oauth/logout') !== -1) {


                } else {

                }


                return $q.reject(rejection);
            };

            authInterceptorServiceFactory.request = _request;
            authInterceptorServiceFactory.response = _response;
            authInterceptorServiceFactory.responseError = _responseError;
            return authInterceptorServiceFactory;
        }
    ]);
});
