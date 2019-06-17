var app = angular.module('CrazyBooksApp', ['ngRoute', 'ui.grid']);

app.config(function ($routeProvider, $locationProvider)
{
    $routeProvider.when('/users',
    {
        template: '<users></users>'
        });

    $routeProvider.when('/employees',
        {
            template: '<employees></employees>'
        });

    $routeProvider.when('/clients',
        {
            template: '<clients></clients>'
        });

    $routeProvider.when('/products',
        {
            template: '<products></products>'
        });

    $routeProvider.when('/purchases',
        {
            template: '<purchases></purchases>'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});




