app.controller('PopoverCtrl', function($scope) {
    var avpopover = $('<avpopover></avpopover>');
    var lastPopover = Date.now();
    var popoverParent;
    $scope.dynamicPopover = {
        templateUrl: 'angularElements/popover/popover_Template.html',
        title: 'Title',
        placement: {
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
            ]
            },
        trigger: 'mouseenter'
    };
  

$scope.dynamicPopover.placement.selected = $scope.side === 'right' ? 'left' : 'right';
    $scope.setClass = function(){
    	return $scope.side === 'right' ? 'right' : 'left';

    };
    

});

