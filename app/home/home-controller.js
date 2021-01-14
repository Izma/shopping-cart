(function () {
    'use strict';
    angular.module('myStoreApp')
        .controller('HomeController', function ($scope, $rootScope, productsFactory, $window, ShoppingCartService) {
            $scope.title = 'Home';
            $scope.cart = ShoppingCartService.getCart();
            $scope.products = JSON.parse($window.localStorage.getItem('products'));
            $scope.addTitle = function (disabled) {
                if (disabled) {
                    return 'This product is not available.';
                }
                return '';
            }
            $scope.addProduct = function (product) {
                ShoppingCartService.addItem(product);
            };
            $scope.removeProduct = function (index) {
                ShoppingCartService.remove(index);
            };
            $rootScope.$on('onCartUpdate', function () {
                $scope.$apply(function () {
                    $scope.cart = ShoppingCartService.getCart();
                });
            });
        });
}());