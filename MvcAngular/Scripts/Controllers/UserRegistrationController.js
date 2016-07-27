var UserRegistrationController = function ($scope) {
    $scope.user = {
        firstName: '', lastName: '', emailId: ''
    };
    $scope.registerUser = function () {
        $http.post("/user/registerUser",$scope.user)
    };
};
UserRegistrationController.$inject = ['$scope'];