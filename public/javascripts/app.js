angular.module('GCApp', ['ngMaterial', 'ngMessages', 'ngAria', 'ngAnimate'])
    .controller('GCController', ['$scope', '$http', '$mdDialog', function ($scope, $http, $mdDialog) {

        $scope.hey = "hey";

        // $scope.gcs = [
        //     {
        //         session: "2017A",
        //         speaker: "McConkie, Carol",
        //         title: "Beauty of Holiness",
        //         imageUrl: "http://st.motortrend.com/uploads/sites/10/2016/02/2016-Toyota-Corolla-front-three-quarter.jpg",
        //         upvotes: 2
        //     },
        //     {
        //         session: "2006A",
        //         speaker: "Hinckley, Gordon B.",
        //         title: "Kindness",
        //         imageUrl: "http://st.motortrend.com/uploads/sites/10/2016/02/2016-Toyota-Corolla-front-three-quarter.jpg",
        //         upvotes: 3
        //     },
        //     {
        //         session: "2016O",
        //         speaker: "Oaks, Dallin H.",
        //         title: "Member Missionary Work",
        //         imageUrl: "http://st.motortrend.com/uploads/sites/10/2016/02/2016-Toyota-Corolla-front-three-quarter.jpg",
        //         upvotes: 1
        //     },
        // ]

        $scope.gc = [];

        $scope.addGC = function () {
            if ($scope.gcForm.$valid) {
                var url = "/gc";
                $http({
                    method: "POST",
                    url: url,
                    data: $scope.newGC
                }).then(function successcallback(response) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Success!')
                            .textContent('The info saved successfully.')
                            .ok('OK')
                    );
                }, function errorcallback(response) {
                    console.log(response);
                    $mdDialog.show(
                        $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Error')
                            .textContent('An error occured while saving.')
                            .ok('OK')
                    );
                });
            } else {
                $mdDialog.show(
                    $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title('Oops!')
                        .textContent('Looks forgot some info.')
                        .ok('OK')
                );
            }
        }

    }]);