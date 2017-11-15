angular.module('app').controller('app_login', app_login);
function app_login($scope, app) {
    'use strict';
    app.init($scope);
    $scope.login = function () {
        $scope.doLogin({
            username: $scope.data.username,
            password: $scope.data.password
        }, false);
    };
    $scope.doLogin = function () {
        $scope.app.showLoading('Logging in');
       app.call('login.loginBasic', data);
    };
    
    $scope.doAppLogin = function (credentials) {

        $scope.doLogin(credentials, true);
    };
}