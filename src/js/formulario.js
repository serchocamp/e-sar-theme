/**
 * Clase que contiene funciones generales para la validacion de los formularios.
 * 
 * Contiene los metodos de que validan los campos de los formularios en base a su tipo,
 * pueden ser solo texto, solo numericos, etc.
 * 
 * @author ESAR
 * @version 1.0
 * @created 08/07/2015.
 * 
 */
var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-68265486-1']);
	_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

var siguientePaso = function(event, $obj) {
	var $columna_padre = $obj.parent(".col-md-3.column.number");

	if (!$columna_padre.hasClass("checked")) {
		$columna_padre.prev(".col-md-3.column.number").addClass("checked")
				.removeClass("active").find("span").html("<i class='fa fa-check'></i>");
		$columna_padre.addClass("active");
		$columna_padre.nextAll(".col-md-3.column.number").removeClass("checked");
	}

	$ultimoClick = $columna_padre.index() + 1;
	$("[id^=form_paso]").hide();
	$("#form_paso" + ($columna_padre.index() + 1)).show(0, '', function() {
		if ($columna_padre.index() == 2) {
			$("#muestraPeriodo").trigger("change");
			$("#muestramas").trigger("change");
		}
	});
	event.preventDefault();
};

var pasoAnterior = function(event, $obj) {
	var $columna_padre = $obj.parent(".col-md-3.column.number");
	$("[id^=form_paso]").hide();
	$ultimoClick = $columna_padre.index();
	$("#form_paso" + ($columna_padre.index())).show();
	event.preventDefault();
};

var RecaptchaOptions = {
	theme : 'clean'
};

function validateRecaptcha(callback, $buttonSubmit) {

	$buttonSubmit.attr("disabled", "true");

	var challenge = $("#recaptcha_challenge_field").val();
	var response = $("#recaptcha_response_field").val();

	var dataJSON = JSON.stringify({
		challenge : challenge,
		response : response
	});

	$.ajax({
		method : "POST",
		url : "validateCaptcha.do",
		contentType : "application/json; charset=utf-8",
		data : dataJSON,
	})
	.success(function(response) {
		$("div#recaptcha_area").parent().parent().children("span.text_error").remove();

		// callback($buttonSubmit); //FOR TEST

		if (response.status == true) {
			$("div#recaptcha_area").css("border-color", "");
			callback();
		} else {
			$buttonSubmit.removeAttr("disabled");
			$("div#recaptcha_area").css("border-color", "#F00");
			$("div#recaptcha_area").parent().parent()
					.append("<span class='text_error'>Captcha inv&aacute;lido</span>");
			$("a#recaptcha_reload_btn").children().trigger("click");
		}
	});
}

$(document).ready(function() {
	var $ultimoClick = 1;
	var $valorTarjeta = [];

	$("[id^=form_paso] .btn-success").click(function(event) {
		var $form = $(this).parents("[id^=form_paso]");
		if ($funciones_generales.validaciones($form)) {
			switch ($form.attr("id")) {
			case "form_paso1":
				var $obj = $(".enlace_form:eq(1)");
				siguientePaso(event, $obj);
				break;
			case "form_paso2":
				var $obj = $(".enlace_form:eq(2)");
				siguientePaso(event, $obj);
				break;
			case "form_paso3":
				var $obj = $(".enlace_form:eq(3)");
				siguientePaso(event, $obj);
				break;
			}
		}
		event.preventDefault();
	});

	$("[id^=form_paso] .anterior").click(function(event) {
		var $form = $(this).parents("[id^=form_paso]");
		switch ($form.attr("id")) {
		case "form_paso2":
			var $obj = $(".enlace_form:eq(1)");
			pasoAnterior(event, $obj);
			break;
		case "form_paso3":
			var $obj = $(".enlace_form:eq(2)");
			pasoAnterior(event, $obj);
			break;
		case "form_paso4":
			var $obj = $(".enlace_form:eq(3)");
			pasoAnterior(event, $obj);
			break;
		}
		event.preventDefault();
	});

	$(".menu-number a.enlace_form").click(function(event) {
		var $actual = $(".col-md-3.column.number.active")
				.next(".col-md-3,.column,.number").index();
		var $nuevo = $(this).parent(".col-md-3.column.number").index();
		var $form = $("[id^=form_paso]");
		if ($funciones_generales.validaciones($form)) {
			if ((($nuevo + 1) - $actual === 1)) {
				if ($nuevo > 0 && $nuevo - $ultimoClick < 1) {
					$("#domnotificaciones div.row").remove();
					$("#domnotificaciones").hide();
	
					$("#form_paso" + $nuevo + " .btn-success").trigger("click");
				}
			} else {
				if ($(this).parents(".col-md-3.column.number").hasClass("checked")
						|| $(this).parents(".col-md-3.column.number").hasClass("active")) {
					$("#domnotificaciones div.row").remove();
					$("#domnotificaciones").hide();
	
					$("[id^=form_paso]").hide();
					var $pos = $(this).parents(".col-md-3.column.number").index() + 1;
					$("#form_paso" + $pos).show();
					$ultimoClick = $(this).parents(".col-md-3.column.number").index() + 1;
				}
			}
		}
		event.preventDefault();
	});

	$('[data-letras],[data-alfanumerico],[data-numeros],[data-alfanumerico-space],[data-letras-acentos]')
			.blur(function() {
		$(this).val($funciones_generales.quitar_espacios_inicio_fin($(this).val()));
		$(this).val($(this).val().toUpperCase());
	});
	
	$('[data-letras],[data-letras-acentos],[data-numeros],[data-numeros-10],[data-email],[data-folio],[data-alfanumerico],[data-password],[data-time],[data-alfanumerico-space],[data-debito]')
			.keydown(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			$(this).selectRange($(this).val().length);
		}
	});

	$('[data-letras]').keypress(function(event) {
		if (!$funciones_generales.validacion_letras($(this), event))
			event.preventDefault();
	});
	
	$('[data-letras]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_letras($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$('[data-letras-acentos]').keypress(function(event) {
		if (!$funciones_generales.validacion_letras_acentos($(this), event))
			event.preventDefault();
	});
	
	$('[data-letras-acentos]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_letras_acentos($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$('[data-numeros]').keypress(function(event) {
		$(this).selectRange($(this).val().length);
		if (!$funciones_generales.validacion_numeros($(this), event))
			event.preventDefault();
	});
	
	$('[data-numeros]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_numeros($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$('[data-numeros-10]').keypress(function(event) {
		if (!$funciones_generales.validacion_numeros($(this), event))
			event.preventDefault();
	});
	
	$('[data-numeros-10]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_numeros($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});
	
	$('[data-email]').keypress(function(event) {
		if (!$funciones_generales.validacion_email($(this), event))
			event.preventDefault();
	});
	
	$('[data-email]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_email($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$('[data-folio]').keypress(function(event) {
		if (!$funciones_generales.validacion_numeros($(this).val(), event))
			event.preventDefault();
	});
	
	$('[data-folio]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_numeros($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$('[data-alfanumerico]').keypress(function(event) {
		if (!$funciones_generales.validacion_alfanumerico($(this), event))
			event.preventDefault();
	});
	
	$('[data-alfanumerico]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_alfanumerico($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$('[data-password]').keypress(function(event) {
		if (!$funciones_generales.validacion_alfanumerico($(this), event))
			event.preventDefault();
	});
	
	$('[data-password]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_alfanumerico($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$('[data-time]').keypress(function(event) {
		if (!$funciones_generales.validacion_time($(this), event))
			event.preventDefault();
	});
	
	$('[data-time]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_time($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$('[data-alfanumerico-space]').keypress(function(event) {
		if (!$funciones_generales.validacion_alfanumerico_space($(this), event))
			event.preventDefault();
	});
	
	$('[data-alfanumerico-space]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_alfanumerico_space($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$('[data-debito]').keypress(function(event) {
		if (!$funciones_generales.validacion_debito($(this), event))
			event.preventDefault();
	});
	
	$('[data-debito]').keyup(function(event) {
		if (navigator.userAgent.match(/Android/i)) {
			if(!$funciones_generales.validacion_debito($(this), event)) {
            	$(this).val($(this).val().substr(0, ($(this).val().length - 1)));
            } else {
            	$(this).val();
            }
        }
	});

	$("#sl-tarjeta").change(function() {
		$(".popover.fade.right.in").remove();
		if ($(this).val() == 1) {
			$("#tx_debito").show();
			$("#tx-interbancaria").hide();
			$("#tx_debito").val("");
			$("#tx-interbancaria").val("");
			$valorTarjeta = [];
			$("#hde_cuenta").val("");
		} else {
			//
			$("#tx-interbancaria").prev(".popover").remove();
			$("#tx_debito").hide();
			$("#tx-interbancaria").show();
			$("#tx_debito").val("");
			$("#tx-interbancaria").val("");
			$valorTarjeta = [];
			$("#hde_cuenta").val("");
		}
		$("#tx_debito").removeClass("invalid_data");
		$("#tx_debito").parent(".form-group").find("span.text_error").remove();
		$("#tx-interbancaria").removeClass("invalid_data");
		$("#tx-interbancaria").parent(".form-group").find("span.text_error").remove();
	});

	$("#montoIncremento").parents(".input-group").hide();
	$("#labelIncrementoMonto").hide();

	$("#tipoIncremento").change(function() {
		if ($(this).val() == 'Porcentaje') {
			$("#porcentajeIncremento").show();
			$("#montoIncremento").parents(".input-group").hide();
			$("#labelIncrementoMonto").hide();
			$("#porcentajeIncremento").val("");
			$("#montoIncremento").val("");
		} else {
			$("#montoIncremento").parents(".input-group").show();
			$("#labelIncrementoMonto").show();
			$("#porcentajeIncremento").hide();
			$("#porcentajeIncremento").val("");
			$("#montoIncremento").val("");
		}
		$("#montoIncremento").removeClass("invalid_data");
		$("#montoIncremento").parents(".form-group").find("span.text_error").remove();
		$("#porcentajeIncremento").removeClass("invalid_data");
		$("#porcentajeIncremento").parents(".form-group").find("span.text_error").remove();
	});

	$("#horarioContacto2").change(function() {
		if ($(this).val() != '' && $("#horarioContacto1").val() != '') {
			$("#horarioContacto").val($("#horarioContacto1").val() + "-" + $(this).val());
		}
	});

	$('#muestraPeriodo').change(function(e) {
		if ($('#muestraPeriodo').val() == 0) {
			$('#masPeriodoUnico').hide();
			$('#masPeriodoSemanal').hide();
			$('#masPeriodoQuincenal').hide();
			$('#masPeriodoMensual').hide();

			$('#fechaDescuento').val("");
			$('#valorSemanal').val("");
			$('#valorQuincena1').val("");
			$('#valorQuincena2').val("");
			$('#valorMensual').val("");

		} else if ($('#muestraPeriodo').val() == 1) {
			$('#masPeriodoUnico').show();
			$('#masPeriodoSemanal').hide();
			$('#masPeriodoQuincenal').hide();
			$('#masPeriodoMensual').hide();

			$('#fechaDescuento').val("");
			$('#valorSemanal').val("");
			$('#valorQuincena1').val("");
			$('#valorQuincena2').val("");
			$('#valorMensual').val("");

		} else if ($('#muestraPeriodo').val() == 2) {
			$('#masPeriodoSemanal').show();
			$('#masPeriodoUnico').hide();
			$('#masPeriodoQuincenal').hide();
			$('#masPeriodoMensual').hide();

			$('#fechaDescuento').val("");
			$('#valorSemanal').val("");
			$('#valorQuincena1').val("");
			$('#valorQuincena2').val("");
			$('#valorMensual').val("");

		} else if ($('#muestraPeriodo').val() == 3) {
			$('#masPeriodoQuincenal').show();
			$('#masPeriodoUnico').hide();
			$('#masPeriodoSemanal').hide();
			$('#masPeriodoMensual').hide();

			$('#fechaDescuento').val("");
			$('#valorSemanal').val("");
			$('#valorQuincena1').val("");
			$('#valorQuincena2').val("");
			$('#valorMensual').val("");

		} else if ($('#muestraPeriodo').val() == 4) {
			$('#masPeriodoUnico').hide();
			$('#masPeriodoSemanal').hide();
			$('#masPeriodoQuincenal').hide();
			$('#masPeriodoMensual').show();

			$('#fechaDescuento').val("");
			$('#valorSemanal').val("");
			$('#valorQuincena1').val("");
			$('#valorQuincena2').val("");
			$('#valorMensual').val("");
		}
		limpiaFechasPeriodicidad();
	});

	var limpiaFechasPeriodicidad = function() {
		$("#fechaDescuento").removeClass("invalid_data").parents(".form-group")
				.find("span.text_error").remove();
		$("#valorSemanal").removeClass("invalid_data").parents(".form-group")
				.find("span.text_error").remove();
		$("#valorQuincena1").removeClass("invalid_data").parents(".form-group")
				.find("span.text_error").remove();
		$("#valorQuincena2").removeClass("invalid_data").parents(".form-group")
				.find("span.text_error").remove();
		$("#valorMensual").removeClass("invalid_data").parents(".form-group")
				.find("span.text_error").remove();
	};

	$('[data-debito]').keydown(function(event) {

		if ($valorTarjeta.length < 16) {
			if ((event.keyCode >= 48 && event.keyCode <= 57)
					|| (event.keyCode >= 96 && event.keyCode <= 105)) {

				if (event.keyCode >= 96 && event.keyCode <= 105) {
					event.keyCode -= 48;
				}

				$valorTarjeta.push(String.fromCharCode(event.keyCode));
				if (ocultarNumeros($(this), 1, event))
					event.preventDefault();
			}
		}
		if (event.keyCode == 8) {
			if (ocultarNumeros($(this), 0, event))
				event.preventDefault();
		}
		if (event.keyCode >= 36 && event.keyCode <= 38)
			event.preventDefault();
	});

	var ocultarNumeros = function() {
		if ($valorTarjeta.length > 4) {
			if (arguments[1] == 0)
				$valorTarjeta.splice($valorTarjeta.length-1, 1);
			var $aux = $valorTarjeta;
			var $aux2 = $aux.toString();
				$aux2 = $aux2.replace(/,/g, '');
			var $resta = $valorTarjeta.length - 4;
			var $inicio = $aux2.substr(0, $resta);
			var $fin = $aux2.substr($aux2.length-4, $aux2.length);
			var $ocultos = "";
			for (var $i = 0; $i<$inicio.length; $i++)
				$ocultos += "*";
			arguments[0].val($ocultos + $fin);
			$("#hde_cuenta").val($aux2);

			return true;
		}
		if (arguments[1] == 0)
			$valorTarjeta.splice($valorTarjeta.length-1, 1);

		var $ax = $valorTarjeta;
		var $ax2 = $ax.toString();
		$ax2 = $ax2.replace(/,/g, '');
		$("#hde_cuenta").val($ax2);

		return false;
	};

	$('[data-debito]').click(function(event) {
		setCaretPosition($(this).attr("id"), $(this).val().length);
	});

	function setCaretPosition(elemId, caretPos) {
		var el = document.getElementById(elemId);
		el.value = el.value;
		if (el !== null) {
			if (el.createTextRange) {
				var range = el.createTextRange();
				range.move('character', caretPos);
				range.select();
				return true;
			} else {
				if (el.selectionStart
						|| el.selectionStart === 0) {
					el.focus();
					el.setSelectionRange(caretPos, caretPos);
					return true;
				}
				else {
					el.focus();
					return false;
				}
			}
		}
	}

	$("#telCelular").blur(function() {
		if ($(this).val()) {
			$("#ladaYtel").removeAttr("data-not-null")
					.removeClass("invalid_data")
					.parents(".form-group").find(".text_error ").remove();
		} else {
			$("#ladaYtel").attr("data-not-null", "0");
		}
	});
	
	$('[noPaste="true"]').bind('paste', function (e) {
		e.preventDefault();
	});
});

$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

var quitaAcentos = function(stringOriginal) {
	var characterEquivalence = {
		"225" : "a",
		"233" : "e",
		"237" : "i",
		"243" : "o",
		"250" : "u",
		"193" : "A",
		"201" : "E",
		"205" : "I",
		"211" : "O",
		"218" : "U",
		"220" : "U",
		"214" : "O",
		"207" : "I",
		"203" : "E",
		"196" : "A",
		"252" : "u",
		"246" : "o",
		"239" : "i",
		"235" : "e",
		"228" : "a"
	};

	for (var index = 0; index < stringOriginal.length; index++) {
		var character = stringOriginal.charAt(index);
		if (characterEquivalence.hasOwnProperty(character.charCodeAt())) {
			stringOriginal = stringOriginal.substr(0, index)
					+ characterEquivalence[character.charCodeAt()]
					+ stringOriginal.substr(index + 1, stringOriginal.length);
		}
	}

	return stringOriginal;
};

var entidadesFederativas = {
	"AS" : "1",
	"BC" : "2",
	"BS" : "3",
	"CC" : "4",
	"CL" : "5",
	"CM" : "6",
	"CS" : "7",
	"CH" : "8",
	"DF" : "9",
	"DG" : "10",
	"GT" : "11",
	"GR" : "12",
	"HG" : "13",
	"JC" : "14",
	"MC" : "15",
	"MN" : "16",
	"MS" : "17",
	"NT" : "18",
	"NL" : "19",
	"OC" : "20",
	"PL" : "21",
	"QT" : "22",
	"QR" : "23",
	"SP" : "24",
	"SL" : "25",
	"SR" : "26",
	"TC" : "27",
	"TS" : "28",
	"TL" : "29",
	"VZ" : "30",
	"YN" : "31",
	"ZS" : "32",
	"NE" : "33"
};
