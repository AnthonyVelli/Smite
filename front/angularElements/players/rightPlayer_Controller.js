app.controller('RightPlayer', function($scope, UtilsFact){
	$scope.gods = $scope.$parent.RightGods;
	$scope.chosenGods = $scope.$parent.RightChosenGods;

	$scope.addGod = function(god, $event){
		$event.stopImmediatePropagation();
		if ($scope.chosenGods.length === 0) {
			UtilsFact.insertGod(god, $scope.chosenGods);
			UtilsFact.removeGod(god, $scope.gods);
		}

	};

	$scope.removeGod = function(god, $event){
		$event.stopImmediatePropagation();
		if ($scope.chosenGods.length > 0) {
			UtilsFact.insertGod(god, $scope.gods);
			UtilsFact.removeGod(god, $scope.chosenGods);
		}

	};
});