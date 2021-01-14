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
                updateAvailability(product);
            };
            $scope.removeProduct = function (index) {
                ShoppingCartService.remove(index);
            };
            $rootScope.$on('onCartUpdate', function () {
                $scope.$apply(function () {
                    $scope.cart = ShoppingCartService.getCart();
                });
            });
            function updateAvailability(product) {
                let products = JSON.parse($window.localStorage.getItem('products'));
                let p = products.find(p => p.id === product.id);
                p.stock--;
                $window.localStorage.setItem('products', JSON.stringify(products));
                $scope.products = JSON.parse($window.localStorage.getItem('products'));
            }
        });
}());