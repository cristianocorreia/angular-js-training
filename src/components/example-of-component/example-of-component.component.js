(function() {
    'use strict';

    angular
        .module('angularjs-training')
        .component('exampleComponent', {
            templateUrl: 'src/components/example-of-component/example-of-component.template.html',
            controller:'ExampleController',
            controllerAs:'exampleController',
            bindings: {
                oneWay: '<',
                twoWay: '=',
                string: '@',
                method: '&'
            }
        });
})();