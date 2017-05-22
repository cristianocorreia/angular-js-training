(function() {
    'use strict';

    angular
        .module('angularjs-training')
        .factory('SomeFactory', SomeFactory);

    SomeFactory.$inject = [
        '$resource'
    ];

    function SomeFactory($resource) {
        return {
            fetchData: fetchData
        };

        function fetchData(api) {
            return $resource(api, {
                get: {
                    method: 'GET'
                }
            });
        }
    }
})();