/* global myApp, round */

myApp.controller("HeaderCtrl", ['$scope', '$rootScope', '$location', 'AuthenticationFactory', 'SettingFactory', 'XrpApi', 'ServerManager', 
  function($scope, $rootScope, $location, AuthenticationFactory, SettingFactory, XrpApi, SM) {

    $rootScope.online = SM.online;
    $scope.$on("networkChange", function() {
      $rootScope.online = SM.online;
    });
  
    $scope.isActive = function(route) {
      return route === $location.path();
    }

    $scope.logout = function () {
      XrpApi.logout();
      AuthenticationFactory.logout();
      $rootScope.reset();
      $location.path("/login");
    }
  }
]);

myApp.controller("FooterCtrl", [ '$scope', '$translate', 'SettingFactory', '$http',
  function($scope, $translate, SettingFactory, $http) {
    $scope.changeLanguage = function (key) {
      $translate.use(key);
      SettingFactory.setLang(key);
    };

    $scope.version = require('./package.json').version;
    $scope.new_version = false;
    $scope.diff = false;
    
    
    $http({
      method: 'GET',
      url: "https://raw.githubusercontent.com/ripplefox/ripplewallet/master/version.json"
    }).then(function(res) {
      console.log(res.data);
    });
  }]);

myApp.controller("HomeCtrl", ['$scope', '$rootScope',
  function($scope, $rootScope) {

  }]);

