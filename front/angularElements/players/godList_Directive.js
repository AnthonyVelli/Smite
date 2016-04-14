app.directive('godList', function(){

  return {
    restrict: 'E',
    scope: {
        godList: '=',
        action: '&'
    },
    templateUrl: './angularElements/players/godList_Template.html'
  };

});


