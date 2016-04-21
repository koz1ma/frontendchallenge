'use strict';

/**
 * @ngdoc function
 * @name frontendchallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendchallengeApp
 */
angular.module('frontendchallengeApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.checkPalindrome = function () {
    	var str = '';
    	str = $scope.word;
    	if(str == str.split('').reverse().join('')){
    		$scope.result = 'is a palindrome';
    	}else{
    		$scope.result = 'is NOT a palindrome';
    	}
	}
  });
