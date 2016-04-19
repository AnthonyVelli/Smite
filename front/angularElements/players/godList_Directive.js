app.directive('godList', function(){

  return {
    restrict: 'E',
    scope: {
        godList: '=',
        action: '&',
        side: '@',
    },
    templateUrl: './angularElements/players/godList_Template.html'
  };

});


