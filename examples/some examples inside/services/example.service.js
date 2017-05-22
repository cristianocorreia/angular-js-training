(function() {
    'use strict';

    angular
        .module('angularjs-training')
        .service('SomeService', SomeService);

    SomeService.$inject = [
        '$http',
        '$q'
    ];

    function SomeService($http, $q) {
        var service = this;

        service.fetchData = fetchData;

        function fetchData(api) {
            var def = $q.defer();

            $http.get(api)
            .then(function(data) {
                def.resolve(data);
            })
            .catch(function() {
                def.reject('error');
            });

            return def.promise;
        }
    }
})();