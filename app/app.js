(function () {
    'use strict';
    angular.module('myStoreApp', ['ngRoute'])
        .config(function ($routeProvider, $locationProvider, StorageProvider) {
            StorageProvider.setSourceIdentifier('cart');
            $routeProvider
                .when('/', {
                    controller: 'HomeController',
                    templateUrl: 'app/home/home.html'
                })
                .when('/product/:id/details', {
                    controller: 'ProductDetailsController',
                    templateUrl: 'app/products/details/product-details.html'
                })
                .when('/product', {
                    controller: 'ProductController',
                    templateUrl: 'app/products/product/product.html'
                })
                .when('/products', {
                    controller: 'ProductListController',
                    templateUrl: 'app/products/list/product-list.html'
                })
                .when('/shopping-cart', {
                    controller: 'shoppingCartListController',
                    templateUrl: 'app/shopping-cart/list/shopping-cart-list.html'
                })
                .otherwise('/');
            $locationProvider.html5Mode(true);
        });
}());
