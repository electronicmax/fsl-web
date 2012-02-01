require(
    [],    
    function() {
	setTimeout(function() {  $('.intro').removeClass('intro');   },1000);

        var parallaxScroll = function(){
            var scrolled = $(window).scrollTop();
	    $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	    $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	    $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px'); 
        };

        $('nav .welcome').bind('click', function() {
                                   console.log('click');
                                   $('html, body').animate({ scrollTop:0 }, 1000, parallaxScroll);
                                   return false;
                               });
        $('nav .webbox, #welcome div.next_arrow').bind('click', function() {
                                   $('html, body').animate({scrollTop:$('#webbox').offset().top }, 1000, parallaxScroll);
                                  return false;
                               });
        $('nav .about, #webbox div.next_arrow').bind('click', function() {
                             $('html, body').animate({scrollTop:$('#about').offset().top }, 1000, parallaxScroll);
                             return false;
                         });        
    });
