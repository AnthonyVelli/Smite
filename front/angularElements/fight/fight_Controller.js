app.controller('FightController', function($scope, FightFact){
	$scope.LeftChosenGods = $scope.$parent.LeftChosenGods;
	$scope.RightChosenGods = $scope.$parent.RightChosenGods;
	$scope.fightScope = {};
	$scope.fightScope.duration = 0;
	$scope.leftWidth = function(){
		return '30%';
	};

	$scope.rightWidth = function(){
		return '30%';
	};

	$scope.startFight = function(){
		$scope.LeftFighter = FightFact.LevelUp($scope.LeftChosenGods[0], 20);
		$scope.RightFighter = FightFact.LevelUp($scope.RightChosenGods[0], 20);
		$scope.leftWidth = $scope.LeftFighter.PercentHealthRemaining.bind($scope.LeftFighter);
		$scope.rightWidth = $scope.RightFighter.PercentHealthRemaining.bind($scope.RightFighter);
		FightFact.CalcProtection($scope.LeftFighter);
		FightFact.CalcProtection($scope.RightFighter);
		FightFact.Left = $scope.LeftFighter;
		FightFact.Right = $scope.RightFighter;
		$('.progress-bar-container').slideDown(500, function(){
			var startOfFight = Date.now();
			function updateFight(){
				$scope.fightScope.duration = Date.now() - startOfFight;
				if ($scope.fightScope.duration / $scope.LeftFighter.Attack_MSec > $scope.LeftFighter.AttacksMade) {
					$scope.LeftFighter.Attacks($scope.RightFighter);
				}
				if ($scope.fightScope.duration / $scope.RightFighter.Attack_MSec > $scope.RightFighter.AttacksMade) {
					$scope.RightFighter.Attacks($scope.LeftFighter);
				}
				if ($scope.RightFighter.HealthRemaining <= 0 || $scope.LeftFighter.HealthRemaining <= 0) {
					window.clearInterval(fightTime);
					window.alert('FIGHT OVER ');
				}
				$scope.$digest();
			}
			var fightTime = window.setInterval(updateFight, 50);
			// fightTime;
			
		}).show();



	};

	


});