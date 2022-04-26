
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
        
        //this function for selectrics
        if ($("select.styled-select").length) {
            $('select.styled-select').selectric();
        }
        
        if ($(".datepicker").length) {
            $( ".datepicker" ).datepicker({
              showOn: "button",
              buttonImage: "svgs/iconmonstr-calendar-1.svg",
              buttonImageOnly: true,
              buttonText: "Select date"
            });
        }
        
        $(".main-nav ul li").find("ul").parents("li").addClass("hasSubnav")
        
        
        if($("#carousel-wrap").length){
            $('.carousel-slides').slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 766,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: true,
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 1,
                            autoplay: true
                        }
                    }
                ]
            });
        }
        
        
        $('.phone-nav').click(function(){
            $('.nav-wrap').slideToggle(500);
            $('.main-nav > ul > li.hasSubnav').parent().find('.megamenu-wrap').slideUp();
        });

        $(".main-nav > ul > li.hasSubnav > a").on('click',function(e){
            e.preventDefault();
            $(this).parent().find(".megamenu-wrap").slideToggle();
        })
		
	})// End ready function.
	
    
    //this is for floorplan slider
    $(window).load(function(){
        // Begin common slider
        if ( $('#plan-slider').length == 0 ) return false

        $('#plan-slider').flexslider({
            animation:"slide",
            slideshow: true,
            directionNav: false,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            manualControls: '#sldier-custom-nav ul li',
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {
                var typeText = $('.flex-active-slide').find('.plan-text').html();
                $('.sldier-custom-nav-inner span').html(typeText);
            }
        })	

    	$('div.slider-wrap video').trigger('play');

    })

})(jQuery)
