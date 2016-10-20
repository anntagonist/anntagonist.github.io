app.controller('theCureCtrl', function($scope){
    $scope.project = {
        title: 'The Cure',
        description: 'You have found the cure to zombie-idous.'
    };

//    $scope.details = [
//        {
//            heading: "Not Only Infected",
//            body: ["The infected are not the only thing that is dangerous.",
//            "The group will need to defend themselves not only from the infected, but the elements, wild animals, and other humans.",
//            "Do what is necessary to stay alive, and keep the cure out of harms way."
//            ],
//            img: "img/baby.jpg"
//        },
//        {
//            heading: "Protect Yourself",
//            body:["Build traps & tools, and seek shelter for the cold nights.",
//            "Use weapons to defend yourself from those who pose as a threat.",
//            "Trust no one."
//            ],
//            img: "img/baby.jpg"
//        },
//        {
//            heading: "Kill or Cure",
//            body: ["You may attempt to kill or save anyone or thing that you come across.",
//            "You may find benefits to saving someone, but there comes security knowing they no longer pose a threat.",
//            "The choice is yours, what are your priorities?"
//            ],
//            img: "img/baby.jpg"
//        },
//    ];

    $scope.characters = [
        {
            name: 'Ann Gables',
            age: 26,
            sex: 'Female',
            rStatus: 'In a Relationship',
            img: "img/baby.jpg",
        },
        {
            name: 'Johnathan Roads',
            age: 28,
            sex: 'Male',
            rStatus: 'Single',
            img: "img/baby.jpg",
        },
        {
            name: 'Michael Gables',
            age: 30,
            sex: 'Male',
            rStatus: 'Married',
            img: "img/baby.jpg",
        },
        {
            name: 'Samantha Booty',
            age: 47,
            sex: 'Female',
            rStatus: 'Widowed',
            img: 'img/baby.jpg',
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