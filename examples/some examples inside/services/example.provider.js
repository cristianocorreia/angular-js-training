(function() {
    'use strict';

    angular
        .module('angularjs-training')
        .provider('ExampleProvider', function() {
            this.$get = new ExampleProvider()
        });

    function ExampleProvider() {
        return {
            someValue: 'fdjkdfjkdfkfjd'
        };
    }

})();