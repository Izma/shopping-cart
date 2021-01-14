(function () {
    'use strict';

    angular
        .module('myStoreApp')
        .component('shoppingCart', {
            templateUrl: 'app/components/shopping-cart/shopping-cart.html',
            controller: function ($scope, $rootScope, ShoppingCartService) {
                $scope.cart = ShoppingCartService.getCart();
                $scope.items = localStorage.getItem('items') ?? 0;
                $scope.$on('updateCart', function (event, args) {
                    localStorage.setItem('items', args.items);
                    $scope.items = args.items;
                });
            }
        });
}());