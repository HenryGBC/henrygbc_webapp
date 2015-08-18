angular
.module('home')
.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'blogService'];

function HomeController ($scope, blogService){
    var vm = this;
    init();

    function init(){
        blogService.getPosts();
    }
}
