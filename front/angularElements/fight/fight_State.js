app.config(['$stateProvider', function($stateProvider, $stateParams){
	$stateProvider.state('FightState', {
		url: '/fight',
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
}]);