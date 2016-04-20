app.controller('PopoverCtrl', function($scope) {
    var avpopover = $('<avpopover></avpopover>');
    var lastPopover = Date.now();
    var popoverParent;

    $scope.showPopover = function(god, $event, side){
        if ($($event.target).parents('god') === popoverParent) return;
        
        console.log('mouse enter');
        console.log($($event.target).parents('god'));
        console.log(lastPopover);
        console.log(Date.now() - lastPopover);
        lastPopover = Date.now();
        popoverParent = $($event.target).parents('god');
        var eventLocation = $($event.target).parents('god').offset(); 
        eventLocation.left = side === 'left' ? popoverParent.width() / 2+ eventLocation.left : eventLocation.left - 25;
        avpopover.html('Speed - '+god.Speed+'<br>Range - '+god.Range+'<br>    Attack Rate - '+god.Attack_Sec+'<br>Damage - '+god.Damage);
        avpopover.appendTo('body').offset(eventLocation).show();
    };

    $scope.hidePopover = function(god, $event, side){
        avpopover.detach();
        console.log('mouse leave');
        console.log(Date.now());
        console.log(lastPopover);
        console.log(Date.now() - lastPopover);
    	
    };


    $scope.setClass = function(){
    	return $scope.side === 'right' ? 'right' : 'left';

    };
    

});

