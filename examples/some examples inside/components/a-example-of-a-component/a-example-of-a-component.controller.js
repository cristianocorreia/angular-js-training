(function() {
    'use strict';

    angular
        .module('angularjs-training')
        .controller('SomeController', SomeController);
    
    SomeController.$inject = [
        'SomeService',
        'SomeFactory',
        'somekey1',
        'somekey2'
    ];

    function SomeController(SomeService, SomeFactory, somekey1, somekey2) {
        var vm = this;

        vm.submitExample = submitExample;

        function submitExample() {
            alert('submit here');
        }

        console.log(somekey1, somekey2);

        SomeService.fetchData('./examples/movies.json')
            .then(function(response) {
                console.log(response);
            }).catch(function() {
                console.log('error');
            });

        SomeFactory.fetchData('./examples/movies.json').get().$promise
            .then(function(response) {
                vm.movies = response.movies;
                console.log(response);
            }).catch(function() {
                console.log('error');
            });
    }

})();