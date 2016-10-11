define(['routes', 'dependencyResolver'], function(config, dependencyResolver) {
    'use strict';

    var app = angular
        .module('app', [
            'ngAnimate',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ui.bootstrap.pagination',
            'ui.bootstrap.tabs',
            'ui.bootstrap.tpls',
            'ui.bootstrap.dropdown',
            'ui.bootstrap.collapse',
            'ui.router',
            'ui.keypress',
            //'ui.utils',
            //'restangular'
        ]).config(function($stateProvider,
            $urlRouterProvider,
            $routeProvider,
            $locationProvider,
            $controllerProvider,
            $compileProvider,
            $filterProvider,
            $httpProvider,
            $provide) {

            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;

            //$httpProvider.interceptors.push('AuthInterceptorService');

            $locationProvider.html5Mode({ enabled: true });

            $urlRouterProvider.otherwise("/");

            if (config.routes !== undefined) {

                angular.forEach(config.routes, function(route, path) {

                    $stateProvider.state(path, {
                        url: route.url,
                        templateUrl: config.defaultRoutePath + route.templateUrl,
                        resolve: dependencyResolver(route.dependencies),
                        controller: route.controller,
                        title: route.title,
                        views: route.views,
                        params: route.params

                    });

                });

            }

        }).run(['$rootScope', function($rootScope) {

            $rootScope.$on("$stateChangeSuccess", function(event) {
                console.log(event);
            })

        }]);
    return app;
});
