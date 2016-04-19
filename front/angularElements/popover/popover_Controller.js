app.controller('PopoverCtrl', function($scope) {
    var avpopover = $('<avpopover></avpopover>');

    $scope.showPopover = function(god, $event, side){
        console.log($event);
        $parent = $('.player-half.'+side);
        avpopover.html('Speed - '+god.Speed+'<br>');
        console.log(avpopover);
        $(avpopover).appendTo($parent).show();
    };

    $scope.hidePopover = function(god, $event, side){
        
    	$('avpopover').detach();
    	

    	// $('avpopover').hide();
    	
    };


    $scope.setClass = function(){
    	return $scope.side === 'right' ? 'right' : 'left';

    };
    

});

// .parents('.player-half')