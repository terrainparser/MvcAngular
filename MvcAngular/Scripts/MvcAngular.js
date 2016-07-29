var MvcAngular = angular.module('MvcAngular', ['ngRoute']);

MvcAngular.controller('LandingPageController', LandingPageController);
//MvcAngular.controller('LoginController', LoginController);
MvcAngular.controller('UserRegistrationController', UserRegistrationController);
MvcAngular.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider) {
    //debugger;
    $routeProvider.
        when('/', {
            templateUrl: '/Angularviews/signIn.html',
            //controller:'routesDemo'
        }).
        when('/routeOne', {
            templateUrl: 'routesDemo/one',
            //controller:'routesDemo'
        }).when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; },
            //controller: 'routesDemo'
        }).when('/routeThree', {
            templateUrl: 'routesDemo/Three',
            //controller: 'routesDemo'
            //}).when('/login', {
            //    templateUrl: '/Account/Login',
            //    controller: LoginController
        }).when('/register', { templateUrl: '/Angularviews/register.html' });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

MvcAngular.config(configFunction);

