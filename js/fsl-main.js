require(
    [],    
    function() {
	setTimeout(function() {  $('.intro').removeClass('intro');   },1000);

        var parallaxScroll = function(){
            var scrolled = $(window).scrollTop();
            $('#blrain').css('top',(400-(2*scrolled))+'px');
            console.log((2400-(3*scrolled)));
            $('#blbox').css('top',(4150-(3*scrolled))+'px');
            
            //	    $('#blrain').css('top',(350-(scrolled*.25))+'px');
	    // $('#blbox').css('top',(0-(scrolled*.5))+'px');
	    // $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px'); 
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

        $(window).bind('scroll',function(e){  parallaxScroll(); });
        parallaxScroll();            
    });
