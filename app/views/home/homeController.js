define(['app'], function(app) {
    'use strict';

    app.controller('HomeCtrl', ['$scope', '$log', function($scope, $log) {

        $log.log("Home");

        $scope.welcome = "Hello!";

    }]);

});
