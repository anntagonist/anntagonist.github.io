app.controller('theCureCtrl', function($scope, $window, $timeout){
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

    $scope.dangers = [
        {
            heading: "Infected Roam the Streets",
            body: [
                "Those who have been infected by D.E.A.D. are out there.",
                "They do not share your sympathy or emotion, and they will do what ever it takes to kill you if you are discovered.",
                "Traps can be used to protect oneself from their aggressive behavior."
            ]
        },
        {
            heading: "Animals Have Migrated",
            body: [
                "Mountain Lions, Bears, and other animals have migrated into the cities.",
                "They are a threat, but can provide materials to help one survive.",
                "These aren't domesticated pets, they will fight back if you pose a threat to them.",
                "One might have to find alternate solutions to obtaining what these animals have to offer.",
            ]
        },
        {
            heading: "People aren't so Kind",
            body: [
                "Gangs wonder around, protecting what they consider to be their territory.",
                "Bandits are always watching, waiting for an opportunity to take what they want.",
                "Mercenaries can be found for hire, for the right price.  Be warned, they might be hunting you.",
                "Camps may provide shelter and supplies, but these favors will cost one more than they might be willing to pay."+
                "  Be careful, those who run the camps may not be trust worthy.",
            ]
        },
        {
            heading: "There are Choices",
            body: [
                "One's choices matter, not only will they lead them down different paths, but they will end differently.",
                "Choosing to save someone can benefit or hinder one on their journey.",
                "There will be consequences for one's actions, consider the options before making a choice.",
                "One will make choices at their own discretion."
            ]
        },
    ];

    $scope.isEven = function(index){
        return index%2===0;
    }

    $scope.currentTab = 1;
    $scope.isTab = function(tab){
        return $scope.currentTab === tab;
    }
    $scope.scrollState = {};
    $scope.setTab = function(tab){
        $('.container-view').scrollTop(0);
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