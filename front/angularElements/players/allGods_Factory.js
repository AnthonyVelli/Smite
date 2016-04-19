app.factory('AllGodsFact', function($http){


	return {
		getGods: $http.get('/api/gods/'),
		getItems: $http.get('/api/items/')
	};
});