app.controller("mainCtrl", function($scope, $rootScope, $location){
//    $location.path("/");
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
            img:'https://images10.newegg.com/NeweggImage/ProductImage/13-130-978-V01.jpg'
        },
        {
            name: "CPU",
            description: "Intel Core i7-7700k",
            url: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819117726",
            img: "https://images10.newegg.com/ProductImage/19-117-726-Z01.jpg"
        },
        {
            name: "Video Card",
            description: "MSI GeForce GTX 1070",
            url: "https://www.newegg.com/Product/Product.aspx?item=N82E16814127951",
            img: 'https://www.msi.com/asset/resize/image/global/product/product_8_20160607163307_575686c3c118c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
        },
        {
            name: "RAM",
            description: "G.SKILL TridentZ Series 16GB",
            url: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820231929",
            img: 'https://images10.newegg.com/NeweggImage/ProductImage/20-231-929-04.jpg?ex=2&ex=2'
        },
        {
            name: 'SSD',
            description: "Samsung EVO 850 SSD 500GB",
            url:'https://www.newegg.com/Product/Product.aspx?Item=N82E16820147373',
            img:'https://www.quietpc.com/images/products/samsung-ssd-850evo-120gb-large.jpg'
        },
        {
            name: 'HDD',
            description: 'WD Blue 1TB HDD',
            url:'https://www.newegg.com/Product/Product.aspx?Item=N82E16822236339',
            img:'https://images10.newegg.com/ProductImage/22-236-339-09.jpg'
        },
        {
            name: "PSU",
            description: 'EVGA SuperNOVA 750',
            url: 'https://www.newegg.com/Product/Product.aspx?Item=N82E16817438017',
            img: 'https://images10.newegg.com/NeweggImage/ProductImageCompressAll1280/17-438-017-09.jpg?w=300&h=300&ex=2'
        },
        {
            name: 'Case',
            description: 'Corsair Carbide Series Air 540',
            url: 'https://www.newegg.com/Product/Product.aspx?Item=N82E16811139029',
            img: 'https://images10.newegg.com/NeweggImage/ProductImageCompressAll1280/11-139-029-02.jpg?w=660&h=500&ex=2'
        }
    ];

    $scope.StreamingComponents = [
//        {
//            name: "CPU",
//            description: "Intel Core i5-4670",
//            url: "https://ark.intel.com/products/75047/Intel-Core-i5-4670-Processor-6M-Cache-up-to-3_80-GHz",
//            img: 'https://images10.newegg.com/ProductImage/19-116-898-03.jpg'
//        },
//        {
//            name: "Video Card",
//            description: "MSI GeForce GTX 1070",
//            url: "https://www.newegg.com/Product/Product.aspx?item=N82E16814127951",
//            img: 'https://www.msi.com/asset/resize/image/global/product/product_8_20160607163307_575686c3c118c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
//        },
//        {
//            name: "RAM",
//            description: "G.SKILL Ripjaws X Series 16GB",
//            url: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820231568",
//            img: 'http://images10.newegg.com/NeweggImage/ProductImage/20-231-568-02.jpg'
//        },
//        {
//            name:'Motherboard',
//            description:'ASUS Z87-A LGA 1150 Intel Z87',
//            url:'https://www.newegg.com/Product/Product.aspx?Item=N82E16813131981',
//            img:'https://images10.newegg.com/ProductImage/13-131-981-09.jpg'
//        },
//        {
//            name: 'SSD',
//            description: "Samsung EVO 850 SSD 500GB",
//            url:'https://www.newegg.com/Product/Product.aspx?Item=N82E16820147373',
//            img:'https://www.quietpc.com/images/products/samsung-ssd-850evo-120gb-large.jpg'
//        },
//        {
//            name: 'HDD',
//            description: 'WD Blue 1TB HDD',
//            url:'https://www.newegg.com/Product/Product.aspx?Item=N82E16822236339',
//            img:'https://images10.newegg.com/ProductImage/22-236-339-09.jpg'
//        },
    ];

    $scope.RecordingItems = [
        {
            name: "Mic",
            description: "Blue Snowflake",
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
            img: 'http://www.corsair.com/~/media/corsair/product%20photos/headsets/void/wireless/large/void_wireless_se_ylw_01.png'
        },
        {
            name: "Keyboard",
            description: "Corsair Strafe RGB",
            url: "http://www.corsair.com/en/strafe-rgb-mechanical-gaming-keyboard-cherry-mx-blue-eu",
            img: 'http://www.corsair.com/~/media/corsair/product-images/keyboards/strafe-rgb/large/strafe_rgb_na_04.png'
        },
        {
            name: "Mouse",
            description: "Corsair M65 Pro",
            url: "http://www.corsair.com/en/m65-pro-rgb-fps-gaming-mouse-black",
            img: 'http://www.corsair.com/en/~/media/46C0989089F5424E834CCE27FB2708B0.ashx'
        },
    ]

    $scope.Programs = [
        {
            name: 'OS',
            description: 'Windows 10 Pro',
            url: 'https://www.microsoft.com/en-us/software-download/windows10ISO',
            img: 'http://dipendrashekhawat.com/wp-content/uploads/2016/05/Windows-10.png'
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