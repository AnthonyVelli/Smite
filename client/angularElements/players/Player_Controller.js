app.config(['$stateProvider', function($stateProvider, $stateParams){
	$stateProvider.state('/', {
		url: '/',
		controller: 'FightController',
		templateUrl: './angularElements/fight/fight_Template.html',
		params: {
			LeftFighters: null,
			RightFighters: null
		},
		resolve: {
			LeftFighters: function($stateParams){
				return $stateParams.LeftFighters;
			},
			RightFighters: function($stateParams){
				return $stateParams.RightFighters;
			}
		}
	});

app.controller('Player', function($scope, $state, UtilsFact, FightFact){
	$scope.gods = $scope.$parent.LeftGods;
	$scope.chosenGods = $scope.$parent.LeftChosenGods;
	$scope.search = {
		text: '',
		order: '',
		filter: ''
	};

	$scope.addFilter = function(arg, $event){
		console.log(arguments);
	};


	$scope.addGod = function(god, $event){
		$event.stopImmediatePropagation();
		$state.go('fighter', {god: god});

	};

	$scope.showStats = function(god, $event){
		console.log(god, $event);
	};

});