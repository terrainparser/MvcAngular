var UserRegistrationController = function ($scope, $http, $location) {
    $scope.user = {
        FirstName: '', LastName: '', EmailId: '', Password: '', UserId: ''
    };
    $scope.registerUser = function () {
        //alert("came here");
        console.log($scope.user);
        $http.post("/user/registerUser", $scope.user, function (data) { console.log(data); });
    };

    $scope.SignIn = function () {
        console.log($scope.user);
        $http.get("user/SignIn", {params:$scope.user}).then(function (response) {
            if (response.data) {
                return $location.path('/home');
            }
        });
             
    };
};
UserRegistrationController.$inject = ['$scope', '$http', '$location'];