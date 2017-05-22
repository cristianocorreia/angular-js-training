(function() {
    'use strict';

    angular
        .module('angularjs-training')
        .filter('exampleFilter', exampleFilter);

    exampleFilter.$inject = [];

    function exampleFilter() {
        return function(input, somethingHere, somethingElse) {
            var newInput = input;

            newInput += ' <- this is an exampleexample';

            newInput += (angular.isDefined(somethingHere)) ? somethingHere : '';
            newInput += (angular.isDefined(somethingElse)) ? somethingElse : ''; 
            
            return newInput;
        }
    }
})();