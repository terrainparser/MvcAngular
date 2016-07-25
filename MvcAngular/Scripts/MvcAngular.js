var MvcAngular = angular.module('MvcAngular', ['ngRoute']);

MvcAngular.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider) {
    //debugger;
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one',
            //controller:'routesDemo'
        }).when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; },
            //controller: 'routesDemo'
        }).when('/routeThree', {
            templateUrl: 'routesDemo/Three',
            //controller: 'routesDemo'
        });
}
configFunction.$inject = ['$routeProvider'];
MvcAngular.config(configFunction);

