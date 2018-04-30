$(document).ready (function (){
	$("form#fm_localizaAfore a#submitForm").click(function(event){
		var $form = $(this).parents("#fm_localizaAfore");
		$funciones_generales.validaciones($form);
		event.preventDefault();
		
		if ($(".invalid_data").length == 0 ) {
			
			var executeForm = function ($buttonSubmit) {
				$form.submit();
			}; 
			
			validateRecaptcha(executeForm, $("form#fm_localizaAfore a#submitForm"));
			
			
		} 
	});
	
	$("#muestraLocaliza").change(function(e){
        if($('#muestraLocaliza').val()==1){
          $('#verNSS').css("display", "");
          $('#verCURP').css("display", "none");
          
          $("#nss").attr("data-not-null", "true");
          $("#curp").removeAttr("data-not-null");
          
          $("#curp").removeClass("invalid_data");     
          $("#curp").val("");
          $("#curp").parents(".form-group:first").find("span.text_error").remove();
        }
        else if($('#muestraLocaliza').val()==2){
          $('#verNSS').css("display", "none");
          $('#verCURP').css("display", "");
          
          $("#curp").attr("data-not-null", "true");
          $("#nss").removeAttr("data-not-null");
          
          $("#nss").removeClass("invalid_data");
          $("#nss").val("");
          $("#nss").parents(".form-group:first").find("span.text_error").remove();
        }
    });

});