
$(document).keydown(function(e){
    switch(e.which){
        case 39: {
            block.css('backgroundColor', 'blue');
            block.css('margin-left', posX+=100);
        }   break;
        case 37: {
            block.css('backgroundColor', 'red');
            block.css('margin-left', posX-=100);   
        }   break;
        case 40:    {
            block.css('margin-top', posY+=50);
        }   break;
        case 38:    {
            block.css('margin-top', posY-=50);
        }   
    }
})




