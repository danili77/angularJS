angular.module('myApp',[]).controller('nombresCtrl',function($scope){
  $scope.nombres = [
    {nombre:'Dani',ciudad:'Sanlucar'},
    {nombre:'Pepe',ciudad:'Rota'},
    {nombre:'Lola',ciudad:'Chipiona'}
  ];
});
