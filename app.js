angular.module('henryApp', [
    'ui.bootstrap',
    'ui.utils',
    'ui.router',
    'ngAnimate',
    'ngMaterial',
    'ngResource',
    'home',
    'blog',
]);

angular.module('henryApp').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    console.log('epa');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/home/home.tpl.html',
            controller: 'HomeController',
            controllerAs:'vm'
        })
        .state('post', {
            url: '/blog/:slug',
            templateUrl: 'src/blog/post.tpl.html',
            controller: 'PostController',
            controllerAs:'vm'
        });







});

angular.module('henryApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
