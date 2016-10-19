var app = angular.module('antagonistApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            //controller: 'homeCtrl'
        })
        .when('/contact-us', {
            templateUrl: 'views/contact.html',
        })
        .when('/about-us', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })
        .when('/the-cure', {
            templateUrl: 'views/thecure.html',
            controller: 'theCureCtrl'
        })
        .when('/warfare', {
            templateUrl: 'views/warfare.html',
            controller: 'warfareCtrl'
        })
        .otherwise('/');
});


// jQuery scripts
$(document).ready(function(){
    //Set the page-view to dynamically change based on the headers.height
    $(window).resize(function() {
        $('.container-view').css('margin-top', $('.navbar-fixed-top').height());
        var $viewHeight = $('.navbar-fixed-top').height() + $('.navbar-fixed-bottom').height();
        $viewHeight = $(window).height() - $viewHeight;
        $('.container-view').css('height', $viewHeight);
        $('.info').css('margin-top', $('.nav-pills').height());
    }).resize();
});