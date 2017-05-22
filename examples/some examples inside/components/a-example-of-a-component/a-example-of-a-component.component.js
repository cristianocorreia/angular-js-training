(function() {
    'use strict';

    angular
        .module('angularjs-training')
        .component('exampleComponent', {
            templateUrl: 'src/components/a-example-of-a-component/a-example-of-a-component.template.html',
            controller: 'SomeController',
            controllerAs: 'someController',
            bindings: {
                oneWay: '<',
                twoWay: '=',
                string: '@',
                method: '&'
            }
        });

})();