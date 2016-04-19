app.controller('BossController', function($scope, $state, AllGodsFact, FightFact){
	$scope.LeftGods = [];
	$scope.RightGods = [];
	$scope.LeftChosenGods = [];
	$scope.RightChosenGods = [];
	$scope.Items = {};
	$scope.dynamicPopover = {
	    content: 'Hello, World!',
	    templateUrl: 'myPopoverTemplate.html',
	    title: 'Title'
  	};

  $scope.placement = {
    options: [
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom'
    ],
    selected: 'top'
  };

	AllGodsFact.getGods
	.then(function(gods){
		for (var god in gods.data){
			$scope.RightGods.push(gods.data[god]);
			$scope.LeftGods.push(gods.data[god]);
		}
	});
	AllGodsFact.getItems
	.then(function(items){
			$scope.Items = items;
	});

});