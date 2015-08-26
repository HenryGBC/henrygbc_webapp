angular
.module('home')
.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'blogService'];

function HomeController ($scope, blogService){
    var vm = this;
    init();
    vm.posts = ['1', '2', '3', '4', '5'];
    function init(){
        //blogService.getPosts();
    }
}
