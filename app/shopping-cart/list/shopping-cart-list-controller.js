(function () {
    'use strict';

    angular
        .module('myStoreApp')
        .controller('shoppingCartListController', function ($scope, $rootScope, ShoppingCartService) {
            $scope.cart = ShoppingCartService.getCart();
            $scope.grandTotal = 0;
            ;
            $scope.removeProduct = function (index) {
                ShoppingCartService.remove(index);
            };
            var matrixGrandTotal = [];
            $scope.getSubTotal = function (item, i) {
                let subTotal = (item.quantity * parseFloat(item.price.substring(1))) ?? 0;
                console.log(i + 'p', subTotal);
                matrixGrandTotal.push(subTotal);
                console.log(matrixGrandTotal.reduce(function (a, b) { return a + b }, 0));
                return `$${subTotal}`;
            };
            $scope.push = function (item, index) {
                console.log(index, item);
            };
            //$scope.grandTotal = $scope.matrixGrandTotal.reduce(function (a, b) { a + b }, 0);
            $rootScope.$on('onCartUpdate', function () {
                $scope.$apply(function () {
                    $scope.cart = ShoppingCartService.getCart();
                });
            });
        });
}());