angular
.module('blog')
.controller('PostController', PostController);

PostController.$inject = ['$scope', 'blogService', '$stateParams'];

function PostController ($scope, blogService, $stateParams){
    var vm = this;
    var post;
    console.log($stateParams);
    blogService.getPostBySlug($stateParams.slug)
    .then(function(data){
        vm.post=data;
        console.log(vm.post);
    });
}
