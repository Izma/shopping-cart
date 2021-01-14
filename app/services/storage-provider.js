(function () {
    'use strict';

    angular
        .module('myStoreApp')
        .provider('Storage', function () {
            var identifier = null;
            return {
                setSourceIdentifier: function (id) {
                    identifier = id;
                },
                $get: function ($rootScope, $window) {
                    angular.element($window).on('storage', function (event) {
                        if (event.key === identifier) {
                            $rootScope.$broadcast('onStorageModify');
                        }
                    });
                    return {
                        save: function (data) {
                            $window.localStorage.setItem(identifier, JSON.stringify(data));
                        },
                        fetch: function () {
                            return JSON.parse($window.localStorage.getItem(identifier));
                        },
                        remove: function () {
                            $window.localStorage.removeItem(identifier);
                        }
                    }
                }
            }
        });
}());