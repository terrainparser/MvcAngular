var UserRegistrationController = function ($scope, $http) {
    $scope.user = {
        FirstName: '', LastName: '', EmailId: '', Password:'', UserId:''
    };
    $scope.registerUser = function () {
        //alert("came here");
        console.log($scope.user);
        $http.post("/user/registerUser", $scope.user, function (data) { console.log(data); });
    };

    $scope.UserValidated = function ()
    {
        return $http.get("/user/SignIn", $scope.user, function (data) { console.log(data); });
    }
};
UserRegistrationController.$inject = ['$scope','$http'];