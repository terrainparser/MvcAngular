var UserRegistrationController = function ($scope, $http) {
    $scope.user = {
        firstName: '', lastName: '', emailId: ''
    };
    $scope.registerUser = function () {
        alert("came here");
        console.log($scope.user);
        $http.post("/user/registerUser", $scope.user, function (data) { console.log(data); });
    };
};
UserRegistrationController.$inject = ['$scope','$http'];