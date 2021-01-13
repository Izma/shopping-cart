(function () {
    'use strict';

    angular
        .module('myStoreApp')
        .controller('ProductDetailsController', function ($scope, $routeParams, $window) {
            var id = $routeParams.id;
            var products = JSON.parse($window.localStorage.getItem('products'));
            $scope.product = products.find(p => p.id === id);
        });
})();