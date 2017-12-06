angular.module('app').controller('app_home', app_home);
function app_home($scope, app) {
    'use strict';
    app.init($scope);
    $scope.scan = function () {
        cordova.plugins.barcodeScanner.scan(
            // success callback function
            function (result) {
                // wrapping in a timeout so the dialog doesn't free the app
                setTimeout(function () {
                    //$scope.data.format = result.format;
                    $scope.data.batchnumber = result.text;
                    $scope.$digest();
                }, 0);
            },

            // error callback function
            function (error) {

            },

            // options object
            {
                "preferFrontCamera": false,
                "showFlipCameraButton": true,
                "showTorchButton": true,
                "orientation": "landscape"
            }
        );
    };
}