define(['app'], function(app) {
    'use strict';
    var base = "";
    return {
        defaultRoutePath: '',
        routes: {
            'home': {
                url: "/",
                title: 'Home',
                templateUrl: base + '/app/views/home/home.tpl.html',
                controller: 'HomeCtrl',
                dependencies: [
                    base + '/app/views/home/homeController.js'
                ]
            },
            'login': {
                url: "/login",
                title: 'Login',
                templateUrl: base + '/app/views/login/login.tpl.html',
                controller: 'LoginCtrl',
                dependencies: [
                    base + '/app/views/login/loginController.js',
                    base + '/app/views/login/loginService.js'
                ]
            },
            'resetPassword': {
                url: "/resetPassword",
                title: 'Reset Password',
                templateUrl: base + '/app/views/resetPassword/resetPassword.tpl.html',
                controller: 'ResetPasswordCtrl',
                dependencies: [
                    base + '/app/views/resetPassword/resetPasswordController.js',
                    base + '/app/views/resetPassword/resetPasswordService.js'
                ]
            }
        }
    };
});
