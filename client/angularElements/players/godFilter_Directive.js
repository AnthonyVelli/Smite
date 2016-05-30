app.directive('godFilter', function(){

  return {
    restrict: 'E',
    scope: {
    	filter: '&',
        search: '=',
    },
    templateUrl: './angularElements/players/godFilter_Template.html'
  };

});


