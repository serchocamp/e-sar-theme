$(document).ready(function(){
	$("form#fm_presolicitud a#submitForm").click(function(event){
		var $form = $(this).parents("#fm_presolicitud");
		$funciones_generales.validaciones($form);
		event.preventDefault();	
		
		if ($(".invalid_data").length == 0) {
			
			var executeForm = function ($buttonSubmit) {
				$form.submit();
			}; 
			
			validateRecaptcha(executeForm, $("form#fm_presolicitud a#submitForm"));
		} 
	});	   
	
	
	
	
	$("#buttonErrorhorario").click(function(){
		
		window.location = "index.do";
	});
	
});