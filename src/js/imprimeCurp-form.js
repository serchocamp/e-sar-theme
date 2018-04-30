/**
 * Clase principal de la pantalla de Imprime Tu Codigo CURP.
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

/**
 * Inicia eventos cuando el documento HTML esta listo.
 */
$(document).ready(function() {

	$("form#fm_imprimeCurp a#submitForm").click(function(event) {
		event.preventDefault();
		inicializaEventos();

		var $form = $(this).parents("#fm_imprimeCurp");
		$funciones_generales.validaciones($form);

		if ($(".invalid_data").length == 0) {
			var executeForm = function($buttonSubmit) {
				$form.submit();
			};

			validateRecaptcha(executeForm, $("form#fm_imprimeCurp a#submitForm"));
		}
	});

	$("a#fileDownload").click(function(event) {
		event.preventDefault();
		// Deshabilita boton
		$("a#fileDownload").attr("disabled", "true");

		$.fileDownload("executeDownloadPDF.do")
		.done(function(response) {
			// Habilita boton
			$("a#fileDownload").removeAttr("disabled");
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			// Habilita boton
			$("a#fileDownload").removeAttr("disabled");
			console.log("Request: " + JSON.stringify(jqXHR));
		});
	});

});

/**
 * Inicializa los eventos de la pantalla.
 */
function inicializaEventos() {
	// Obtiene correo
	var emailForm = $("#correo").val();
	// Obtiene correo
	var emailConfirmForm = $("#confirmaCorreo").val();

	// Remueve las etiquetas de invalidate
	$("#correo").removeClass("invalid_data");
	$("#correo").parents(".form-group:first").find("span.text_error").remove();
	$("#confirmaCorreo").removeClass("invalid_data");
	$("#confirmaCorreo").parents(".form-group:first").find("span.text_error").remove();

	// Valida si el campo es vacio
	if (emailForm != "") {
		$("#correo").attr("data-not-null", "0");
		$("#correo").attr("data-email", "0");
		$("#correo").attr("data-confirm", "0");
		$("#confirmaCorreo").attr("data-not-null", "0");
		$("#confirmaCorreo").attr("data-email", "0");

	} else if (emailConfirmForm != "") {
		$("#correo").attr("data-not-null", "0");
		$("#correo").attr("data-email", "0");
		$("#correo").attr("data-confirm", "0");
		$("#confirmaCorreo").attr("data-not-null", "0");
		$("#confirmaCorreo").attr("data-email", "0");

	} else {
		$("#correo").removeAttr("data-not-null");
		$("#correo").removeAttr("data-email");
		$("#correo").removeAttr("data-confirm");
		$("#confirmaCorreo").removeAttr("data-not-null");
		$("#confirmaCorreo").removeAttr("data-email");
	}
}

var captchaResponse = "";

var onloadCallback = function() {
	grecaptcha.render('captcha', {
		"sitekey" : "6LezowgTAAAAAGc7jtZ4HIVUrw-MjS5ZD2lHpwhG",
		"callback" : function(response) {
			$("div#captcha").children().children("div").attr("class", "");
			captchaResponse = response;
		},
		"expired-callback" : function() {
			captchaResponse = "";
		}
	});
};