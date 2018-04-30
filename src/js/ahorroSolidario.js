/**
 * Clase principal de la pantalla de Inicio de Ahorro Solidario.
 * 
 * Contiene los metodos de inicializacion de elementos de la pantalla de
 * consulta, ademas de las funciones que manejan el contenido y despliegues
 * dinamicos dentro de las pantallas.
 * 
 * @author Jonathan Diaz
 * @version 1.0
 * @created 04/04/2016.
 * 
 */
$(document).ready(function() {

	$("#fm_ahorro_solidario a.btn.btn-success.btn-lg").removeAttr("disabled");

	/**
	 * Evento que realiza las validaciones del login en el portal.
	 */
	$("form#fm_ahorro_solidario a#submitForm").click(function(event) {
		var $form = $(this).parents("#fm_ahorro_solidario");
		$funciones_generales.validaciones($form);
		event.preventDefault();

		if ($(".invalid_data").length == 0) {
			$("form#fm_ahorro_solidario a#submitForm").attr("disabled", "true");
			$form.submit();
		}
	});

	/**
	 * Evento que redirecciona al portal de inicio de ahorro solidario.
	 */
	$("a#btn-dialog-error").click(function(event) {
		window.location.replace('ahorroSolidarioInicio.do');
	});

});
