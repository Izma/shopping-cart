(function () {
    'use strict';

    angular
        .module('myStoreApp')
        .service('ShoppingCartService', function ($rootScope, Storage) {
            $rootScope.$on('onStorageModify', function () {
                this.refresh();
            });
            this.cart = {};
            this.cartLookUp = function (id) {
                return this.cart.hasOwnProperty(id) ? true : false;
            };

            this.getCart = function () {
                this.cart = Storage.fetch();
                if (!this.cart) {
                    this.cart = {};
                }
                return this.cart;
            };
            this.addItem = function (product) {
                if (this.cartLookUp(product.id)) {
                    this.changeQuantity(product.id);
                } else {
                    this.newItem(product);
                }
            };
            this.newItem = function (product) {
                product.quantity = 1;
                this.cart[product.id] = product;
                this.changeItems();
                this.save();
            };
            this.addItems = function (products) {
                angular.forEach(products, function (product) {
                    this.addItem(product);
                }, this);
            };
            this.save = function () {
                Storage.save(this.cart);
            };
            this.remove = function (id) {
                if (!--this.cart[id].quantity) {
                    delete this.cart[id];
                    this.changeItems();
                }
                this.save();
            };
            this.clear = function () {
                this.cart = {};
                this.changeItems();
                Storage.remove();
            };
            this.changeQuantity = function (id) {
                this.cart[id].quantity++;
                this.save();
            };
            this.refresh = function () {
                $rootScope.$broadcast('onCartUpdate');
            };
            this.changeItems = function () {
                $rootScope.$broadcast('updateCart', {
                    items: Object.keys(this.cart).length
                });
            }
        });
}());