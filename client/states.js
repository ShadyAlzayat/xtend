angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.home', {
        views: {
            app: {
                controller: 'app_home',
                templateProvider: function (app) {
                    return app.templateProvider('app.home');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.details', {
        views: {
            app: {
                controller: 'app_details',
                templateProvider: function (app) {
                    return app.templateProvider('app.details');
                }
            }
        }
    }).state('app.about', {
        views: {
            app: {
                controller: 'app_about',
                templateProvider: function (app) {
                    return app.templateProvider('app.about');
                }
            }
        }
    });
});