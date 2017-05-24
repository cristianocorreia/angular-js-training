(function() {
    'use strict';

    angular
        .module('angularjs-training')
        .controller('ExampleController', ExampleController);
    
    ExampleController.$inject = [
        '$scope'
    ];

    function ExampleController($scope) {
        var vm = this;

        vm.methoddffdgdfg = methoddffdgdfg;
        vm.whatever = whatever;
        vm.someMethodHere = someMethodHere;
        vm.flag = true;

        $scope.$watchCollection(function() {
            return vm.flag;
        }, function() {
            console.log('flag alterada');
        });

        function methoddffdgdfg() {
            console.log('aqui');
        }

        function whatever() {
            vm.flag = !vm.flag;
        }

        function someMethodHere(model) {
            console.log(model);
        }
    }
})();