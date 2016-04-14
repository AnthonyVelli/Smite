app.controller('LeftPlayer', function($scope, UtilsFact){
	$scope.gods = $scope.$parent.LeftGods;
	$scope.chosenGods = $scope.$parent.LeftChosenGods;

	$scope.addGod = function(god, $event){
		$event.stopImmediatePropagation();
		UtilsFact.insertGod(god, $scope.chosenGods);
		UtilsFact.removeGod(god, $scope.gods);

	};

	$scope.removeGod = function(god, $event){
		$event.stopImmediatePropagation();

		UtilsFact.insertGod(god, $scope.gods);
		UtilsFact.removeGod(god, $scope.chosenGods);

	};
});