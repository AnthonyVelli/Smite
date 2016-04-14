app.factory('AllGodsFact', function($http){


	return {
		getGods: $http.get('/api/gods/')
	};
});