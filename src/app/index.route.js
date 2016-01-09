(function() {

    'use strict';

    angular
        .module('rin')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('app', {
                abstract: true,
                views   : {
                    'main@'         : {
                        templateUrl: 'app/core/layouts/default.html'
                    },
                    'topbar@app': {
                        templateUrl: 'app/navigation/topbar/topbar.html',
                        controller : 'TopbarController as vm'
                    },
                    'sidebar@app': {
                        templateUrl: 'app/navigation/sidebar/sidebar.html',
                        controller : 'SidebarController as vm'
                    }
                }
            });
    }

})();
