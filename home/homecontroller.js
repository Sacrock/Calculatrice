myApp.controller("HomeController", ["$scope", "$state", "$http",  function($scope, $state, $http) {
    console.log("this is the home controller");
    $scope.userString = "username";
    $scope.doRequest = function() {
        console.log("doing request...");

        var url = "http://lummerland.int-evry.fr:20000/~daniel/minicalc-server/minicalc.php";
        var parametre = {};
        parametre.op1 = $scope.op1;
        parametre.op2 = $scope.op2;
        parametre.operator = $scope.operator;

        var paramStr = JSON.stringify(parametre);

        console.log(paramStr);
        $http.post(url, paramStr)
            .then(function (data, status, headers, config) {
                console.log(data);
                console.log(data.result+"");
                console.log(status+"");
                $scope.result = data.result;
            });

            


    }

}]);