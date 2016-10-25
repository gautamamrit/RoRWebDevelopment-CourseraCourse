(function(){
    'use strict';

    angular.module('LunchCheck',[])
        .controller('LunchCheckController',LunchCheckController);

        LunchCheckController.$inject = ['$scope'];
        
        function LunchCheckController($scope) {
            $scope.lunchMenu = "";
            $scope.message ="";
            $scope.displayMessage = function(){
                var msg = "";
                if($scope.lunchMenu === ""){
                    msg = "Please enter data first";
                }
                else{
                    var totalItems = totalItemsInLunch($scope.lunchMenu);
                    
                    if(totalItems <= 3){
                        msg = "Enjoy!";
                    }else{
                        msg = "Too much!";
                    }
                }
                 $scope.message = msg;
            }

            function totalItemsInLunch(lunchMenu){
                var lunchArray = lunchMenu.split(',');
                return lunchArray.length;
            }
            
        }
})();