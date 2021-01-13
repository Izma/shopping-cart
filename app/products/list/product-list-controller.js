(function () {
    'use strict';
    angular.module('myStoreApp')
        .controller('ProductListController', function ($scope, $window) {
            $scope.products = JSON.parse($window.localStorage.getItem('products'));
        });
}());