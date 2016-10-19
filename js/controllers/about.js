app.controller('aboutCtrl', function($scope){
    $scope.information = [
        {
            heading: "No 'Micro-Transactions'",
            body: ["All content that is released for any game will be included for free.",
            "All that is required is the initial purchase."]
        },
        {
            heading: "No 'Pre-Orders'",
            body: ["Gamers shouldn't be pressured to buy games before they are released.",
            "It is unfair to withhold additional content from those who do not order a particular game in advance.",
            "You the gamer should have the right to wait until our games are released to determine if it is the right game for you."]
        },
        {
            heading: "No 'In-Game Achievements'",
            body: ["A lot of achievements aren't really achievements.",
            "We want you in the community to create the achievements for others to accomplish.",
            "You should set your own goals and accomplish them."]
        },
        {
            heading: "Game Breaking",
            body:["We encourage players to find different paths to completing our games.",
            "If we cut corners in our development, exploit it.",
            "We discourage people from hacking User and Billing accounts."]
        },
        {
            heading: "Donations",
            body:["We appreciate any donations that we can get.  It helps us spend less time at work and more time working on our projects",
            "We are always in need of getting new equipment, and funding to pay others for art work and music.",
            "We will gladly accept any concept art that you believe would benefit our site or games."
            ]
        },
        {
            heading: "Future Goals",
            body:["We want to publish games that we would play ourselves.",
            "Become self sufficient so that we won't have to work other jobs to pay the bills.",
            "Expand, adding new members to our team, and release products for you to enjoy."
            ]
        },
    ];

    $scope.currentTab = 1;

    $scope.setTab = function(tab){
        $scope.currentTab = tab;
    }

    $scope.isTab = function(tab){
        return $scope.currentTab === tab;
    }

});