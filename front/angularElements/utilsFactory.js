app.factory('UtilsFact', function(){

	insertGod = function(god, godArray){
		godArray.splice(godArray.findIndex(function(godCheck, IDX) {
			return god.God.localeCompare(godCheck.God) < 0;
		}), 0, god);
	};

	removeGod = function(god, godArray){
		godArray.splice(godArray.findIndex(function(godCheck){
			return godCheck._id === god._id;
		}), 1);	
	};


	return {
		removeGod: removeGod,
		insertGod: insertGod
	};

});