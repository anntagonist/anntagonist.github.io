app.controller('theCureCtrl', function($scope){
    $scope.project = {
        title: 'The Cure',
        description: 'You have found the cure to zombie-idous.'
    };

    $scope.characters = [
        {
            name: 'Ann Gables',
            age: 26,
            sex: 'Female',
            rStatus: 'In a Relationship',
            img: "img/baby.jpg",
            occupation: "Graduate Student at FCU",
        },
        {
            name: 'Johnathan Roads',
            age: 28,
            sex: 'Absolutely',
            rStatus: 'Single',
            img: "img/baby.jpg",
            occupation: 'Unemployed',
        },
        {
            name: 'Michael Gables',
            age: 30,
            sex: 'Male',
            rStatus: 'Married',
            img: "img/baby.jpg",
            occupation: "Forest Ranger - RMNP",
        },
        {
            name: 'Samantha Booty',
            age: 47,
            sex: 'Female',
            rStatus: 'Widowed',
            img: 'img/baby.jpg',
            occupation: 'Troop 523 Mother',
        },
    ];

    $scope.isEven = function(index){
        return index%2===0;
    }

    $scope.currentTab = 1;
    $scope.isTab = function(tab){
        return $scope.currentTab === tab;
    }
    $scope.setTab = function(tab){
        $scope.currentTab = tab;
    }
})

.directive('myprofile', function(){
     return {
         restrict: 'E',
         scope: {
             character: '=info',
         },
         templateUrl: 'views/profile.html'
     };
 });