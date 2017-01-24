var app = angular.module('letsPlay', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainCtrl'
        })
        .when('/twitch', {
            templateUrl: 'views/twitch.html',
            controller: 'twitchCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })
        .when('/youtube', {
            templateUrl: 'views/youtube.html',
            controller: 'youTubeCtrl'
        })
        .when('/setup', {
            templateUrl: 'views/setup.html',
            controller: 'setupCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        })
        .when('/thanks', {
            templateUrl: 'views/thanks.html',
            controller: 'mainCtrl'
        })
        .otherwise('/');
})

.directive('component', function(){
    return {
        restrict: 'E',
        scope: {
            component: '=item',
        },
        templateUrl: 'views/component.html'
    };
});

//scripts
//Back to top of screen arrow button
$(document).ready(function(){
    var offset = 150;
    var duration = 300;
    $(window).scroll(function(){
        if($(window).scrollTop() > offset){
            $('.back-to-top').fadeIn(duration);
        }else{
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event){
        event.preventDefault();
        console.log('button clicked');
        window.scrollTo(0,0);
        return false;
    });

    $(document).click(function(event){
        var clickover = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("in");
        if(_opened === true && !clickover.hasClass("navbar-toggle")) {
            $navbar.collapse('hide');
        }
    });
});

//JS scripts
function validateForm(){
    var inputObj = document.getElementById("name").value;
    if(inputObj == ""){
        document.getElementById("error").innerHTML = "Enter your name";
        return false;
    }

    inputObj = document.getElementById("email").value;
    if(inputObj == ""){
        document.getElementById("error").innerHTML = "Enter your email";
        return false;
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputObj)){

    }else{
        document.getElementById("error").innerHTML = "Invalid Email Address";
        return false;
    }

    inputObj = document.getElementById("subject").value;
    if(inputObj == ""){
        document.getElementById("error").innerHTML = "Enter a subject";
        return false;
    }

    inputObj = document.getElementById("message").value;
    if(inputObj == ""){
        document.getElementById("error").innerHTML = "Enter your message";
        return false;
    }

    return true;
}