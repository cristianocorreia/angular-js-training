(function () {
    'use strict';

    angular
    .module('angularjs-training')
    .config(Config);

    Config.$inject = [
        '$urlRouterProvider',
        '$stateProvider',
        'ExampleProviderProvider',
        'someConstant'
    ];

    function Config($urlRouterProvider, $stateProvider, ExampleProviderProvider, someConstant) {

        $urlRouterProvider
        .otherwise('/');
        
        console.log(someConstant);

        $stateProvider
        .state('homepage', {
            url: '/',
            template: 'first routing example',
            controller: '',
            controllerAs: ''
        })
        .state('example', {
            url: '/example',
            template: 'whatever ' + ExampleProviderProvider.$get.someValue,
            controller: '',
            controllerAs: ''
        });
    }

})();
