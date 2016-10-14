var app = angular.module('antagonistApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
});


// jQuery scripts
$(document).ready(function(){
    //Set the page-view to dynamically change based on the headers.height
    $(window).resize(function() {
        $('.container-view').css('margin-top', $('.navbar-fixed-top').height());
//        var $viewHeight = $('.navbar-fixed-top').height() + $('.navbar-fixed-bottom').height();
//        $viewHeight = $(window).height() - $viewHeight;
//        $('.container-view').css('height', $viewHeight);
        $('.container-view').css('height', $(window).height());
    }).resize();
});