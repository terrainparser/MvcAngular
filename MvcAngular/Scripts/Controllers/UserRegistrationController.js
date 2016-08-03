var UserRegistrationController = function ($scope, $http) {
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
        $http.get("/user/SignIn", $scope.user, function (response) {
            console.log(response);
            if (response == "true") {
                return $location.path('/home');
            }
        });
    };
};
UserRegistrationController.$inject = ['$scope', '$http'];