(function() {

    'use strict';

    angular
        .module('app.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        
        $stateProvider.state('app.login', {
            url  : '/login',
            views: {
                'main@'                                 : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.login': {
                    templateUrl: 'app/login/login.html',
                    controller : 'LoginController as vm'
                }
            }
        });
    }

})();