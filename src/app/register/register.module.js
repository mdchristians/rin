(function() {
    
    'use strict';

    angular
        .module('app.register', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        
        $stateProvider.state('app.register', {
            url: '/register',
            views: {
                'main@'                       : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.register': {
                    templateUrl: 'app/register/register.html',
                    controller : 'RegisterController as vm'
                }
            }
        });
    }
})();