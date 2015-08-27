angular
.module('blog')
.factory('blogService', blogService);

blogService.$inject = ['$http', '$q'];

function blogService($http, $q ){
    var service = {
        initPosts: initPosts,
        getPostBySlug: getPostBySlug,
        getPosts: getPosts
    };
    var posts;
    return service;

    function initPosts(){
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YY1nfBEGXzldM0PS6CkRtfEDSdN4nE'
        };
        return $http({
            method: 'GET',
            url: 'http://127.0.0.1:8000/blog/',
            headers: headers
        })
        .then(function(data){
            posts = data.data;
        })
        .catch(function(err){
            console.log(err);
        });
    }
    function getPostBySlug(slug){
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YY1nfBEGXzldM0PS6CkRtfEDSdN4nE'
        };
        return $http({
            method: 'GET',
            url: 'http://127.0.0.1:8000/blog/'+slug+'/',
            headers: headers,
            params: {slug: 'titulo-de-prueba'}
        })
        .then(function(data){
            console.log(data.data);
            return data.data;
        })
        .catch(function(err){
            console.log(err);
        });
    }
    function getPosts(){
        return posts;
    }
}
