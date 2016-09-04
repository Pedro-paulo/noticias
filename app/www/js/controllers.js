angular.module('starter.controllers', ['ngSanitize'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});



$scope.lista =[];
$scope.home2=true;

// carregamento das catergorias
//home
//url teste: http://dfy.esy.es/xdk/api/get_recent_posts/
$http.get('http://pesqueirafuxico.com/home/api/get_recent_posts/').success(function(data){
  $scope.lista = data; 
    console.log(data);
}).error(function(erro){
  console.log(erro);
});

/* Alterar o final da requisição do Json para pegar cada categoria
//esportes
$http.get('http://dfy.esy.es/xdk/api/get_recent_posts/').success(function(data){
  $scope.lista = data; 
    console.log(data);
}).error(function(erro){
  console.log(erro);
});
//noticias
$cope.carregarNoticias = function(){
$http.get('http://dfy.esy.es/xdk/api/get_recent_posts/').success(function(data){
  $scope.lista = data; 
    console.log(data);
}).error(function(erro){
  console.log(erro);
});
}
//negocio
$cope.carregarNegocio = function(){
$http.get('http://dfy.esy.es/xdk/api/get_recent_posts/').success(function(data){
  $scope.lista = data; 
    console.log(data);
}).error(function(erro){
  console.log(erro);
});
}
//politica
$cope.carregarPolitica = function(){
$http.get('http://dfy.esy.es/xdk/api/get_recent_posts/').success(function(data){
  $scope.lista = data; 
    console.log(data);
}).error(function(erro){
  console.log(erro);
});
}
//saude
$cope.carregarSaude = function(){
$http.get('http://dfy.esy.es/xdk/api/get_recent_posts/').success(function(data){
  $scope.lista = data; 
    console.log(data);
}).error(function(erro){
  console.log(erro);
});
}
//mulher
$cope.carregarMulher = function(){
$http.get('http://dfy.esy.es/xdk/api/get_recent_posts/').success(function(data){
  $scope.lista = data; 
    console.log(data);
}).error(function(erro){
  console.log(erro);
});
}
*/
// clase do css chamada da cor do headear de cada categoria

$scope.home = function(){
$scope.home2=true;
$scope.noticias2=false;
$scope.esporte2=false;
$scope.politica2=false;
$scope.fotos2=false;
$scope.saude2=false;
$scope.negocio2=false;
$scope.mulher2=false;
$scope.pagina2=false;
};
$scope.noticias = function(){
$scope.home2=false;
$scope.noticias2=true;
$scope.esporte2=false;
$scope.politica2=false;
$scope.fotos2=false;
$scope.saude2=false;
$scope.negocio2=false;
$scope.mulher2=false;
$scope.pagina2=false;
};
$scope.esporte =function(){
$scope.home2=false;
$scope.noticias2=false;
$scope.esporte2=true;
$scope.politica2=false;
$scope.fotos2=false;
$scope.saude2=false;
$scope.negocio2=false;
$scope.mulher2=false;
$scope.pagina2=false;
};
$scope.politica =function(){
$scope.home2=false;
$scope.noticias2=false;
$scope.esporte2=false;
$scope.politica2=true;
$scope.fotos2=false;
$scope.saude2=false;
$scope.negocio2=false;
$scope.mulher2=false;
$scope.pagina2=false;
};
$scope.fotos =function(){
$scope.home2=false;
$scope.noticias2=false;
$scope.esporte2=false;
$scope.politica2=false;
$scope.fotos2=true;
$scope.saude2=false;
$scope.negocio2=false;
$scope.mulher2=false;
$scope.pagina2=false;
};
$scope.saude =function(){
$scope.home2=false;
$scope.noticias2=false;
$scope.esporte2=false;
$scope.politica2=false;
$scope.fotos2=false;
$scope.saude2=true;
$scope.negocio2=false;
$scope.mulher2=false;
$scope.pagina2=false;
};
$scope.negocio =function(){
$scope.home2=false;
$scope.noticias2=false;
$scope.esporte2=false;
$scope.politica2=false;
$scope.fotos2=false;
$scope.saude2=false;
$scope.negocio2=true;
$scope.mulher2=false;
$scope.pagina2=false;
};
$scope.mulher =function(){
$scope.home2=false;
$scope.noticias2=false;
$scope.esporte2=false;
$scope.politica2=false;
$scope.fotos2=false;
$scope.saude2=false;
$scope.negocio2=false;
$scope.mulher2=true;
$scope.pagina2=false;
};


$scope.news = function(valor){
  //setando os  objetos do array pelo seu indice.
  // o content esta sendo setado muito poluido
  // o excerpt não informa a noticia toda
  // cor do headar da pagina da noticias $scope.pagina2=true;
  $scope.imagemN = $scope.lista.posts[valor].thumbnail;
  $scope.content = $scope.lista.posts[valor].content;
}
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
/*
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
*/