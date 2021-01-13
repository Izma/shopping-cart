(function () {
    'use strict';
    angular
        .module('myStoreApp')
        .controller('ProductController', function ($scope, $window, $location) {
            $scope.product = {};
            $scope.submit = function () {
                let guid = function () {
                    function _p8(s) {
                        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
                        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
                    }
                    return _p8() + _p8(true) + _p8(true) + _p8();
                };
                let products = JSON.parse($window.localStorage.getItem('products'));
                this.product.id = guid();
                this.product.price = `$${this.product.price}.00`;
                products.push(this.product);
                $window.localStorage.setItem('products', JSON.stringify(products));
                alert('The product was saved successfully!');
                $location.path('/products');
            }
        });
})();