//Admin functions
routerApp.factory('Admin', function () {

    var factory = {};
    factory.isloggedin = false;

    factory.isAdmin = function() {
        if(factory.isloggedin)
            return 'Admin mode';
        else
            return 'User mode';

    }

    factory.setloggedin = function(loggedin) {
        factory.isloggedin = loggedin;
    }

    return factory;
})

//functions controller name list
routerApp.factory('List', function($http) {
    
    var factory = {};

    factory.getList = function() {
        $http({
            method: 'GET',
            url: 'adminpage/downloadList'
        }).then(
            function success(response) {
                return response.data;
            },
            function error(response) {
                $scope.resp = response.data;
                $scope.errormsg = response.statusText;
            }
        )
    }


    return factory;
})