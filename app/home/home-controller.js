(function () {
    'use strict';
    angular.module('myStoreApp')
        .controller('HomeController', function ($scope, productsFactory, $window) {
            $scope.title = 'Home';
            $scope.cart = [];
            $scope.products = JSON.parse($window.localStorage.getItem('products'));
            $scope.addTitle = function (disabled) {
                if (disabled) {
                    return 'This product is not available.';
                }
                return '';
            }
        });
}());