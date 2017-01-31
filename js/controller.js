app.controller("mainCtrl", function($scope, $rootScope, $location){
    $rootScope.showYouTubeSubscribe = true;

    $scope.init = function(){
        $rootScope.showYouTubeSubscribe = true;
    };

    $scope.init();
});

app.controller('youTubeCtrl', function($scope, $rootScope){
    $scope.init = function(){
        $rootScope.showYouTubeSubscribe = true;
    };

    $scope.init();
});

app.controller('twitchCtrl', function($scope, $rootScope){
    $scope.init = function(){
        $rootScope.showYouTubeSubscribe = false;
    };

    $scope.init();
});

app.controller('aboutCtrl', function($scope, $rootScope){
    $scope.init = function(){
        $rootScope.showYouTubeSubscribe = false;
    };

    $scope.init();
});

app.controller('contactCtrl', function($scope, $rootScope){
    $scope.contactForm = {
        firstName: '',
        lastName: '',
        email: '',
        commentBlock: '',
    };
    $scope.init = function(){
        $rootScope.showYouTubeSubscribe = false;
    };

    $scope.init();

    $scope.submitContactForm = function(){
        console.log('Form has been submitted');
    };
});

app.controller('setupCtrl', function($scope, $rootScope){
    $scope.init = function(){
        $rootScope.showYouTubeSubscribe = false;
    };

    $scope.init();

    $scope.GamingComponents = [
        {
            name:'Motherboard',
            description:'MSI Z270 1151',
            url:'https://www.newegg.com/Product/Product.aspx?Item=N82E16813130978',
            img: 'images/components/Mobo.png'
        },
        {
            name: "CPU",
            description: "Intel 7700k",
            url: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819117726",
            img: 'images/components/CPU.png'
        },
        {
            name: "Video Card",
            description: "MSI GTX 1070",
            url: "https://www.newegg.com/Product/Product.aspx?item=N82E16814127951",
            img: 'images/components/VideoCard.png'
        },
        {
            name: "RAM",
            description: "G.SKILL 16GB",
            url: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820231929",
            img: 'images/components/singleStick.png'
        },
        {
            name: 'SSD',
            description: "Samsung Evo 850",
            url:'https://www.newegg.com/Product/Product.aspx?Item=N82E16820147373',
            img: 'images/components/SSD.png'
        },
        {
            name: 'HDD',
            description: 'WD Blue HDD',
            url:'https://www.newegg.com/Product/Product.aspx?Item=N82E16822236339',
            img: 'images/components/HDD.png'
        },
        {
            name: "PSU",
            description: 'EVGA 750',
            url: 'https://www.newegg.com/Product/Product.aspx?Item=N82E16817438017',
            img: 'images/components/PSU.png'
        },
        {
            name: 'Case',
            description: 'Corsair Air 540',
            url: 'https://www.newegg.com/Product/Product.aspx?Item=N82E16811139029',
            img: 'images/components/Case.png'
        }
    ];

    $scope.RecordingItems = [
        {
            name: "Mic",
            description: "Blue Yeti",
            url: "http://www.bluemic.com/products/snowflake/",
            img: 'https://www.intermusic-pro.com/upload/productos/blue_snowflake_1.jpg'
        },
        {
            name: "Web Cam",
            description: "Logitech c920 Pro",
            url: 'http://www.logitech.com/en-us/product/hd-pro-webcam-c920',
            img: 'https://assets.logitech.com/assets/54515/2/hd-webcam-pro-c920-gallery.png'
        },
    ];

    $scope.Peripherals = [
        {
            name: "Headset",
            description: "VOID RGB Wireless Dolby 7.1",
            url: "http://www.corsair.com/en/void-wireless-dolby-7-1-gaming-headset-special-edition-yellow-jacket-eu",
            img: 'images/gear/Headset.png'
        },
        {
            name: "Keyboard",
            description: "Corsair Strafe RGB",
            url: "http://www.corsair.com/en/strafe-rgb-mechanical-gaming-keyboard-cherry-mx-blue-eu",
            img: 'images/gear/Keyboard.png'
        },
        {
            name: "Mouse",
            description: "Corsair M65 Pro",
            url: "http://www.corsair.com/en/m65-pro-rgb-fps-gaming-mouse-black",
            img: 'images/gear/Mouse.png'
        },
    ]

    $scope.Programs = [
        {
            name: 'OS',
            description: 'Windows 10 Pro',
            url: 'https://www.microsoft.com/en-us/software-download/windows10ISO',
            img: 'images/Windows-10.png'
        },
        {
            name: 'Recording',
            description: 'Fraps',
            url: 'http://www.fraps.com/',
            img: 'https://www.techspot.com/images2/downloads/topdownload/2014/08/Fraps.png'
        },
        {
            name: 'Streaming',
            description: 'OBS',
            url: 'https://obsproject.com/',
            img: 'https://www.zutfen.com/wp-content/uploads/2015/03/obslogo400.png'
        },
        {
            name: 'Editing',
            description: 'Adobe Creative Cloud',
            url: 'https://www.adobe.com/creativecloud.html',
            img: 'https://lh3.googleusercontent.com/k1vNtKXtkYmzT1YqEoJBF9-y8oiv7kCp3ldiwxgyNBlWCTgkUjElZCTG9S_8ClcFAN8R=w300'
        },
    ];

    $scope.listNotEmpty = function(list){
        if(list.length > 0){
            return true;
        }
        return false;
    }
});