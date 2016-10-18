app.controller('theCureCtrl', function($scope){
    $scope.project = {
        title: 'The Cure',
        description: 'You have found the cure to zombie-idous.'
    };

    $scope.details = [
        {
            heading: "Not Only Infected",
            body: ["The infected are not the only thing that is dangerous.",
            "The group will need to defend themselves not only from the infected, but the elements, wild animals, and other humans.",
            "Do what is necessary to stay alive, and keep the cure out of harms way."
            ]
        },
    ];

    $scope.isEven = function(index){
        return index%2===0;
    }
});