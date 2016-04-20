app.controller('LeftPlayer', function($scope, UtilsFact, FightFact){
	$scope.gods = $scope.$parent.LeftGods;
	$scope.chosenGods = $scope.$parent.LeftChosenGods;
	$scope.search = {
		text: '',
		order: ''

	};

	$scope.addGod = function(god, $event){
		$event.stopImmediatePropagation();
		if ($scope.chosenGods.length === 0) {
			UtilsFact.insertGod(god, $scope.chosenGods);
			UtilsFact.removeGod(god, $scope.gods);
		}
	};

	$scope.showStats = function(god, $event){
		console.log(god, $event);
	};

	$scope.removeGod = function(god, $event){
		$event.stopImmediatePropagation();
		if ($scope.chosenGods.length > 0) {
			UtilsFact.insertGod(god, $scope.gods);
			UtilsFact.removeGod(god, $scope.chosenGods);
		}

	};
});