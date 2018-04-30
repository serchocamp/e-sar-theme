$(document).ready(function() {
	
	var fecha = new Date();
	var anio = fecha.getFullYear();
	
	$.datepicker.regional['es'] = {
			prevText : '<Ant',
			nextText : 'Sig>',
			monthNames : [
					'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
					'Junio', 'Julio', 'Agosto', 'Septiembre',
					'Octubre', 'Noviembre', 'Diciembre'
			],
			monthNamesShort : [
					'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
					'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
			],
			dayNamesMin : [ 'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S\u00E1' ],
			dateFormat : 'dd/mm/yy',
			startDate : 'today',
			maxDate : new Date(),
			changeYear : true,   // separa el campo del anio
			changeMonth : true // separa el campo del mes
			
		};

		$.datepicker.setDefaults($.datepicker.regional['es']);
		$('#nacimiento').datepicker({
				yearRange : '1915:' + anio,
				dialog    : new Date(),
				showOn: "both",
				buttonText: "glyphicon glyphicon-calendar",
				buttonImage: "input-group-addon",
				buttonImageOnly: false
		}).datepicker("setDate", new Date('01/01/1980'));
		
	$("form#fm_preregistro a#submitForm").click(function(event) {	
		var $form = $(this).parents("#fm_preregistro");
		$funciones_generales.validaciones($form);
		event.preventDefault();
		if ($(".invalid_data").length == 0) {
			$("form#fm_preregistro a#submitForm").attr("disabled", "true");
			$form.submit();
		}
	});
});