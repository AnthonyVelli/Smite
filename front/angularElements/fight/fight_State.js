app.config(['$stateProvider', function($stateProvider, $stateParams){
	$stateProvider.state('FightState', {
		controller: 'FightController',
		params: {
			// LeftFighters: null,
			// RightFighters: null
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