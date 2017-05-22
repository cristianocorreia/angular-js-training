(function() {
    'use strict';

    angular
        .module('angularjs-training')
        .directive('exampleDirective', exampleDirective);
        
        function exampleDirective() {
           return {
               restrict: 'E',
               transclude: true,
                templateUrl: 'src/components/a-example-of-a-directive/a-example-of-a-directive.template.html',
                bindings: {
                    twoWay: '=',
                    string: '@',
                    method: '&'
                },
                link: link
           };

           function link(scope, element, attributes, controller, transcludeFn) {
                console.log(scope, element, attributes, controller, transcludeFn);
           }
        }

})();