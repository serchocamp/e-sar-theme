$(document).ready(function(){
	$("form#fm_comprobante a#submitForm").click(function(event){
		var $form = $(this).parents("#fm_comprobante");
		$funciones_generales.validaciones($form);
		event.preventDefault();		

		if ($(".invalid_data").length == 0) {
			var executeForm = function ($buttonSubmit) {
				$form.submit();
			}; 
			
			validateRecaptcha(executeForm, $("form#fm_comprobante a#submitForm"));
		}
	});	   
	
	$("a#fileDownload").click(function (event) {
		event.preventDefault();
		
		$("a#fileDownload").attr("disabled", "true");
		$.fileDownload("comprobantePDFDownload.do")
        .done(function () { 
        	$("a#fileDownload").removeAttr("disabled"); 
        }).fail(function () { 
        	$("a#fileDownload").removeAttr("disabled");
        	alert('A ocurrido un error al descargar el comprobante!'); 
        });
	});
});