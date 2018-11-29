 var app = angular.module('app', ['ui.router'])


 app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/');
     $stateProvider.state({
         name: 'Land',
         url: '/',
         controller: function($scope, app) {
             $scope.app = app

         },
         templateUrl: 'html/Land.html'
     }).state({
         name: 'Org',
         url: '/org',
         controller: function($scope, app) {
             $scope.app = app
         },
         templateUrl: 'html/Org.html'
     }).state({
         name: 'Repo',
         url: '/repo',
         controller: function() {},
         templateUrl: 'html/Repo.html'
     });
     $locationProvider.html5Mode(false);
 });

 app.service('app', function($http, ) {
         $http.get('https://api.github.com/orgs/WebArtWork/repos')
             .then(function() {
              console.log();
             })
         this.orgs = [
             { name: 'WebartWork' },

             { name: 'Microsoft' },

             { name: 'Facebook' },

             { name: 'IBM' },

             { name: 'Angular' },

             { name: 'Adobe' },

             { name: 'Godaddy' },

             { name: 'Shopify' },

             { name: 'Twitter' },
         ];
     }

 )