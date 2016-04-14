app.controller('BossController', function($scope, $state, AllGodsFact){
	$scope.LeftGods = [];
	$scope.RightGods = [];
	$scope.LeftChosenGods = [];
	$scope.RightChosenGods = [];

	AllGodsFact.getGods
	.then(function(gods){
		for (var god in gods.data){
			$scope.RightGods.push(gods.data[god]);
			$scope.LeftGods.push(gods.data[god]);
		}
	});
	$scope.startFight = function(){

		$state.go('FightState', {LeftFighters: $scope.LeftChosenGods, RightFighters: $scope.RightChosenGods});
	};

});