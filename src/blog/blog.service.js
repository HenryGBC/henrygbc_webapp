angular
.module('blog')
.factory('blogService', blogService);

blogService.$inject = ['$http', '$q'];

function blogService($http, $q ){
    var service = {
        getPosts: getPosts
    };

    return service;

    function getPosts(){
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YY1nfBEGXzldM0PS6CkRtfEDSdN4nE'
        };
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8000/blog/',
            headers: headers
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        });
    }
}
