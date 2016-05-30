app.controller('BossController', function($scope, $state, AllGodsFact, FightFact){
	$scope.LeftGods = [];
	$scope.RightGods = [];
	$scope.LeftChosenGods = [];
	$scope.RightChosenGods = [];
	$scope.Items = {};

	AllGodsFact.getGods
	.then(function(gods){
		for (var god in gods.data){
			$scope.RightGods.push(gods.data[god]);
			$scope.LeftGods.push(gods.data[god]);
		}
	});
	AllGodsFact.getItems
	.then(function(items){
			$scope.Items = items;
	});

});