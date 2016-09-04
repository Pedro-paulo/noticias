// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'

    /*,controller: 'AppCtrl'*/
  })

  .state('app.esporte', {
    url: '/esporte',
    views: {
      'menuContent': {
        templateUrl: 'templates/esporte.html'
      }
    }
  })

  .state('app.noticias', {
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/noticias.html'
        }
      }
    })
    .state('app.Home', {
      url: '/Home',
      views: {
        'menuContent': {
          templateUrl: 'templates/Home.html'
          /*,controller: 'PlaylistsCtrl'*/
        }
      }
    })
    .state('app.politica', {
      url: '/politica',
      views: {
        'menuContent': {
          templateUrl: 'templates/politica.html'
          /*,controller: 'PlaylistsCtrl'*/
        }
      }
    })
    .state('app.fotos', {
      url: '/fotos',
      views: {
        'menuContent': {
          templateUrl: 'templates/fotos.html'
          /*,controller: 'PlaylistsCtrl'*/
        }
      }
    })
    .state('app.saude', {
      url: '/saude',
      views: {
        'menuContent': {
          templateUrl: 'templates/saude.html'
          /*,controller: 'PlaylistsCtrl'*/
        }
      }
    })
    .state('app.negocio', {
      url: '/negocio',
      views: {
        'menuContent': {
          templateUrl: 'templates/negocio.html'
          /*,controller: 'PlaylistsCtrl'*/
        }
      }
    })
    .state('app.mulher', {
      url: '/mulher',
      views: {
        'menuContent': {
          templateUrl: 'templates/mulher.html'
          /*,controller: 'PlaylistsCtrl'*/
        }
      }
    })

  .state('app.single', {
    url: '/Home/:paginaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/pagina.html'
        /*,controller: 'PlaylistCtrl'*/
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/Home');
});
