(function () {
    'use strict';

    angular
        .module('myStoreApp')
        .controller('shoppingCartListController', function ($scope, $rootScope, $route, $window, ShoppingCartService) {
            $scope.cart = ShoppingCartService.getCart();
            $scope.totals = [];
            $scope.removeProduct = function (product) {
                ShoppingCartService.remove(product.id);
                updateAvailability(product.id);
                $route.reload();
            };
            for (const key in $scope.cart) {
                if (Object.hasOwnProperty.call($scope.cart, key)) {
                    const element = $scope.cart[key];
                    let subTotal = element.price.substring(1) * element.quantity;
                    $scope.totals.push(subTotal);
                }
            }
            $scope.empty = function () {
                ShoppingCartService.clear();
                $route.reload();
            };
            $scope.getGrandTotal = function () {
                let total = $scope.totals.reduce(function (a, b) {
                    return a + b;
                }, 0);
                return total.toFixed(2);
            };
            $scope.getSubTotal = function (item) {
                let subTotal = (item.quantity * parseFloat(item.price.substring(1))) ?? 0;
                return `$${subTotal.toFixed(2)}`;
            };
            $rootScope.$on('onCartUpdate', function () {
                $scope.$apply(function () {
                    $scope.cart = ShoppingCartService.getCart();
                });
            });

            function updateAvailability(id) {
                let products = JSON.parse($window.localStorage.getItem('products'));
                let p = products.find(p => p.id === id);
                p.stock++;
                $window.localStorage.setItem('products', JSON.stringify(products));
            }
        });
}());