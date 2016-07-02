var app = angular.module('formApp', []);

var g;
app.controller('MainCtrl', function($scope, $http){
	var socket = io('//localhost:3000');
	$scope.formData = {};
	var vm = this;
	vm.orders = [];
	
	socket.on('socketToMe', function(data){
		console.log("Sockets");
		$scope.orders.push(data.data);
		$scope.$apply();
	});

	$http.get('/orders')
		.success(function(data){
			$scope.orders = data;
			vm.orders = data;
			console.log(data);
	});

	/*$scope.createOrder = function() {
		console.log($scope.formData);
		$http.post('/orders', $scope.formData)
			.success(function(data){
				$scope.formData = {};
				$scope.orders = data;
				console.log(data);
			})
			.error(function(data){
				console.log('error '+data);
			});
	};*/

	$scope.deleteOrder = function(id){
		$http.delete('/orders/remove/'+id)
			.success(function(data){
				$scope.orders = data;
				console.log(data);
			})
			.error(function(data){
				console.log('error '+data);
			})
	};	
});