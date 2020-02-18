// jQuery Custom functions

$(function() {
    // Create the dropdown menu for mobile devices based on ul#menuglowne
    var $menu = $("ul#menuglowne > li");
    
    $("<select />").appendTo(".menumobile");
    $("<option />", {
        "selected": "selected",
        "value"   : "",
        "text"    : "-- Open navigation --"
    }).appendTo(".menumobile select");

    $menu.each(function() {
        var $this = $(this);
        var hasChildren = $this.find("ul"),
        children = $this.find("li");

        if (hasChildren.length) {
            $("<optgroup />", {
                "label": $this.find("> a").text()
            }).appendTo(".menumobile select");

            children.each(function() {
                $("<option />", {
                    "value"   : $(this).find("a").attr("href"),
                    "text": " - " + $(this).text()
                }).appendTo("optgroup:last");
            });
        } else {
            $("<option />", {
                "value"   : $this.find("a").attr("href"),
                "text"    : $this.text()
            }).appendTo(".menumobile select");
        }
    });

    $(".menumobile select").change(function() {
        window.location = $(this).find("option:selected").val();
    });
});

$(function() {
    //cache
    $header = $('#header');
    //initializing bxSlider for home page slideshow
    $('#mainslider').bxSlider({
        speed:400,
        pagerSelector:$('.pager-container'), //just for centering bullets
        auto:true,
        pause:4000, //slideshow duration
        onSlideBefore:function($slideElement, oldIndex, newIndex){ //when the slide is about to change- animate #header's bg
            $header.animate({
                backgroundPush: '1000' //just push it away for a pretty big distance...
            }, 400, function() {
                $header.css({
                    'background-color':'#'+$slideElement.data('color'), //...change color...
                    'background-image':'url(images/'+$slideElement.data('image')+')', //...background image...
                    'background-position': 'center top' // ...and bring it back to the center
                });
            });
        }
    });
}); //closing ready() function

$(function() {
    //initializing bxSlider for blog's header
    $('#blogslider').bxSlider({
        auto: true,
        pause:5000,
        controls:false,
        pager: true
    });
}); //closing ready() function


$(function() {
    //initializing bxSlider for medic page
    $('.galslide-imgs').bxSlider({
        auto: true,
        pause:5000,
        controls:false,
        pager: false
    });
}); //closing ready() function

$(function() {
    //initializing bxSlider for gallery on home page
    $('.gallery-slider').bxSlider({
        auto: true,
        pause:6000,
        controls:true,
        pager: false,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 300,
        slideMargin: 20
    });
}); //closing ready() function

$(function() {
    //initializing bxSlider for second gallery on home page
	//medics
    $('.bscroll').bxSlider({
        auto: true,
        pause:4000,
        controls:true,
        pager: false,
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 1,
        slideWidth: 140,
        slideMargin: 20
    });
}); //closing ready() function

$(function() {
    //initializing bxSlider for third gallery on home page
	//homepage data slider
    $('.homeData').bxSlider({
        auto: false,
        pause:10000,
        controls:true,
        pager: false,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 300,
		slideHeight: 300,
        slideMargin: 0
    });
}); //closing ready() function


$(function() {
    //initializing bxSlider for third gallery on home page
	//homepage data slider
    $('.testimoniale').bxSlider({
        auto: true,
        pause:10000,
        controls:true,
        pager: false,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 300,
		slideHeight: 300,
        slideMargin: 0
    });
}); //closing ready() function


$(function() {
    //initializing bxSlider for gallery on home page
    $('.fotos').bxSlider({
        auto: true,
        pause:6000,
        controls:true,
        pager: false,
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 1,
        slideWidth: 190,
		slideHeight: 190,
        slideMargin: 20
    });
}); //closing ready() function

/*$(function() {
    //initializing bxSlider for home page testimonials
    $('.testimonials-slider').bxSlider({
        auto: true,
        pause:3000,
        controls:false,
        pager: false,
        mode:'vertical',
        adaptiveHeight:true
    });
}); //closing ready() function*/

$(function() {
    //initializing colorbox for google maps modal box
    if ( $("#map").is('*') ) { //check if the element exists
    	var latlng = new google.maps.LatLng(44.449924, 26.081618);
        var myOptions = { zoom: 13, center: latlng, mapTypeId: google.maps.MapTypeId.TERRAIN };
        var map = new google.maps.Map(document.getElementById("map"), myOptions);
    	
    	var optMarker = { position: latlng, map: map }
    	var marker = new google.maps.Marker(optMarker);
    	
    	$(".openmap").colorbox({
            inline:true,
            scrolling:false,
            innerWidth:700,
            innerHeight:450,
            maxHeight:'90%',
            maxWidth:'90%',
            href : '#map'
        });
        //end: colorbox
    }
	
}); //closing ready() function

$(function() {
//initializing colorbox for gallery slider
    
    $('.fotos li[class!="bx-clone"] a').colorbox({
		rel:'cboxElement',
        maxHeight:'100%',
        maxWidth:'100%',
		previous:'Poza anterioara',
		next:'Poza urmatoare',
		close:'Inchide',
		overlayClose:'false',
		current:'Imaginea {current} din {total}'
    });
    
}); //closing ready() function

$(function() {
    if ( $("#contact_map").is('*') ) { //check if the element exists

    //initializing google maps in contact page
        var latlng = new google.maps.LatLng(44.449924, 26.081618);
        var myOptions = { zoom: 13, center: latlng, mapTypeId: google.maps.MapTypeId.TERRAIN };
        var map = new google.maps.Map(document.getElementById("contact_map"), myOptions);
        
        var optMarker = { position: latlng, map: map }
        var marker = new google.maps.Marker(optMarker);
        
        $(".change-marker").click(function(e){
            e.preventDefault();
            var lat = parseFloat($(this).data("lat"));
            var lng = parseFloat($(this).data("lng"));

                  if ( marker ) {
                    var newLatLng = new google.maps.LatLng(lat, lng); 
                    marker.setPosition(newLatLng);
                    map.panTo(newLatLng);
                  } 

        });
    }
    
}); //closing ready() function
            

$(function() {
//setting up function for accordion
    var allPanels = $('.accordion > dd').hide();
    $('.accordion > dd:first').addClass('active').show();
    
    $('.accordion > dt > a').click(function() {
        $target =  $(this).parent().next();
        if(!$target.hasClass('active')){
            allPanels.removeClass('active').slideUp("fast");
            $target.addClass('active').slideDown("fast");
        }
        return false;
    });
}); //closing ready() function


$(function() {
    //initializing custom dropdown plugin used in contact page
    if ( $('#cd-dropdown').length ) {
        $( '#cd-dropdown' ).dropdown( {
            gutter : 10,
            stack : false,
            slidingIn : 100,
        } );
    }
});


	
/* Show send to friend dialog */
$(function(){
	$('.meta-mail a').click(function(){
		$('.meta-mail-send').fadeIn(250);
		return false
	});
});

$(function(){$('.meta-mail-close').click(function(){
	$('.meta-mail-send').fadeOut(250);
	return false;
});});

/* contact form function
$(function(){

	var formErrors = 0;
	$("#commentform input[id!='email']").blur(function(){
				
		if($(this).val() === ""){
			alert('Va rugam sa introduceti numele dumneavoastra.');
		}
		return false;	
	});
	
	$("#commentform input#email").blur(function(){
		if($(this).val() === ""){			
			alert('Va rugam sa introduceti o adresa de email valida.');
			return false;
		}
		else{
			if (formErrors > 0) formErrors-=1;
			
			var atIndex = $(this).val().indexOf('@');
			var dotIndex = $(this).val().lastIndexOf('.');	
		
			if (atIndex<1||dotIndex-atIndex<2){
				alert('Va rugam sa introduceti o adresa de email valida.');
				return false;
			}
		}
		
		return false;
	});
	$("#commentform #submit").click(function(){
						
		$('input[type="text"]').blur();
		
		if(formErrors === 0){
		
			var dataString = 'name='+$("input#name").val()+'&email='+$("input#email").val()+'&message='+$("textarea#message").val();
			
			$.ajax({
      			type: "POST",
      			url: "submitForm.php",
      			data: dataString,
      			success: function(r) {	
					
					var thankyouMSG = '<p class="thankYou">Mesajul dumneavoastra a fost trimis. Un membru al echipei Intelident va va contacta in cel mai scurt timp posibil.<br /><strong class="colored">Va multumim!</strong></p>';
					$('#commentform').html(thankyouMSG);
				}
     		});
		
			return false;
		
		}
		
		else{
			alert("Va rugam sa completati toate campurile marcate cu rosu.");
			return false;
		}
		
		return false;
		
	});

});

 */

$(function() {

            $("#extruderRight").buildMbExtruder({
                position:"right",
                width:300,
                extruderOpacity:.8,
                textOrientation:"tb",
                onExtOpen:function(){},
                onExtContentLoad:function(){},
                onExtClose:function(){}
            });

            $.fn.changeLabel=function(text){
                $(this).find(".flapLabel").html(text);
                $(this).find(".flapLabel").mbFlipText();
            };



});







/**
 * custom jQuery extension for background image position's animation
 */
 
(function($) {
    $.extend($.fx.step,{
        backgroundPush: function(fx) {
            var now = parseInt(((fx.end - 50) * fx.pos * fx.pos) + 50) + '%'; //remove single fx.pos for linear animation
            fx.elem.style.backgroundPosition = now +' 0%';
        }
    });
})(jQuery);
