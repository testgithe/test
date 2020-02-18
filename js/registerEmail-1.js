// JavaScript Document



$(document).ready(function(){
						   
	$('#submitIt').click(function(e){
	
		var adresa = $(this).prev().val();
		
		if(adresa === ""){			
			alert('Va rugam sa introduceti o adresa de email valida.');
			return false;
		}
		else{
			
			var atIndex = adresa.indexOf('@');
			var dotIndex = adresa.lastIndexOf('.');	
		
			if (atIndex<1||dotIndex-atIndex<2){
				alert('Va rugam sa introduceti o adresa de email valida.');
				return false;
			}
		}
		
		var data = 'adresa='+adresa;
		$.ajax({
			type: "POST",
			url: "/registerEmail.php",
			data: data,
			success: function(r){				
				alert('Adresa dumneavostra de email a fost inregistrata.');
			}
		});
		
		e.preventDefault();
	
	});	
	
});
