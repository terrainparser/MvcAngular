﻿var MvcAngular = angular.module('MvcAngular', ['ngRoute']);

//MvcAngular.controller('LandingPageController', LandingPageController);
//MvcAngular.controller('LoginController', LoginController);
MvcAngular.controller('UserRegistrationController', UserRegistrationController);
MvcAngular.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
MvcAngular.directive('register', function () {
    return {
        restrict: 'E',
        scope: {
            customerInfo:'=info'
        }, templateUrl: '/Angularviews/register.html'
    };
});

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {
    //debugger;
    $routeProvider.
        when('/', {
            templateUrl: '/Angularviews/signIn.html'
            //controller: 'routesDemoController',
            //controllerAs: 'rtDmCont'
        }).
        when('/routeOne', {
            templateUrl: 'routesDemo/one',
            controller: 'routesDemo2Controller',
            controllerAs:'rctCont'
        }).when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; },
            //controller: 'routesDemo'
        }).when('/routeThree', {
            templateUrl: 'routesDemo/Three',
            //controller: 'routesDemo'
            //}).when('/login', {
            //    templateUrl: '/Account/Login',
            //    controller: LoginController
        }).when('/register', {
            templateUrl: '/Angularviews/register.html'
        }).when('/home', {
            templateUrl: '/AngularViews/home.html'
        });
         
$httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

MvcAngular.config(configFunction);//.controller("routesDemo2Controller", function ($scope) {
//    $scope.Ram = "Hari";});

