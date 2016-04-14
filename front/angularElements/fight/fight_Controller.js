app.controller('FightController', function($scope, $stateParams){
	$scope.LeftFighter = $stateParams.LeftFighters;
	$scope.RightFighter = $stateParams.RightFighters;
	console.log($scope);

	$scope.getParams = function(){
		console.log($scope);
	};

});