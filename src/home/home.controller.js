angular
.module('home')
.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'blogService', '$state'];

function HomeController ($scope, blogService, $state){
    var vm = this;
    vm.goToPost = goToPost;
    init();
    function init(){
        blogService.initPosts()
        .then(function () {
            vm.posts = blogService.getPosts();
            console.log(vm.posts);
        });
    }


    function goToPost(slug){
        console.log(slug);
        $state.go('post', { slug: slug });
    }
}
