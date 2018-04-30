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
var $funciones_generales = {
	validaciones: function($formulario) {
		var $_this = this;
		var $valores = [
				"data-curp",
				"data-curp2",
				"data-curp3",
				"data-curp4",
				"data-nss",
				"data-curp-validate",
				"data-rfc",
				"data-min",
				"data-folio",
				"data-letras",
				"data-letras-acentos",
				"data-numeros",
				"data-confirm",
				"data-confirm2",
				"data-confirm3",
				"data-confirm4",
				"data-confirm5",
				"data-confirm6",
				"data-check-rcv",
				"data-check-av",
				"data-zeros",
				"data-cpzeros",
				"data-confirm-curp",
				"data-size",
				"data-not-null",
				"data-not-null-curp",
				"data-debito",
				"data-email",
				"data-email2",
				"data-password",
				"data-alfanumerico-space",
				"data-optional",
				"data-time",
				"data-usuario",
				"data-confirm-contrasenia",
				"data-confirm-contrasenia2",
				"data-contrasenia",
				"data-longitud-8-a-10",
				"data-numeros-10",
				"data-nom-usuario",
				"data-nss-imss",
				"data-rfc1",
				"data-personales-retiro",
				"data-personales-retiro-mat",
				"data-telefono",
				"data-celular",
				"data-celular1",
				"data-tel2",
				"data-tel",
				"data-cel2",
				"data-mail",
				"data-horarios"
		];
		var $status = 0;
		for (var $i = 0; $i < $valores.length; $i++) {
			$formulario.find("[" + $valores[$i] + "]:visible").each(function() {
				var $valido = false;
				var $mensaje = "";
				switch ($valores[$i]) {
				case "data-not-null":
					$valido = $_this.validacion_not_null($(this).val());
					$mensaje = "Ingresa un " + $(this).data("nombre") + " correcto";
					if ($(this).data("nombre") == "Fecha"				|| $(this).attr("id") == "ciaTelefonica"
						|| $(this).attr("id") == "contrasena"			|| $(this).attr("id") == "pregunta"
						|| $(this).attr("id") == "respuesta"			|| $(this).attr("id") == "confirmaContrasenia"
						|| $(this).attr("id") == "contrasenaant"		|| $(this).attr("id") == "calleDP"
						|| $(this).attr("id") == "coloniaDP"			|| $(this).attr("id") == "entidadFederativaDP"
						|| $(this).attr("id") == "calleDL"				|| $(this).attr("id") == "coloniaDL"
						|| $(this).attr("id") == "entidadFederativaDL"	|| $(this).attr("id") == "listaAfores"
						|| $(this).attr("id") == "fechaNacimiento"   	|| $(this).attr("id") == "calle"
						|| $(this).attr("id") == "colonia"   			|| $(this).attr("id") == "entidadFederativa"
						|| $(this).attr("id") == "curp"					|| $(this).attr("id") == "sucursalData"
						|| $(this).attr("id") == "nacimiento"
					)
						$mensaje = "Ingresa una " + $(this).data("nombre") + " correcta";
					if ($(this).attr("id") == "ladaYtel")
						$mensaje = "Ingresa un n\u00famero de tel\u00e9fono o un n\u00famero de celular correcto";
					break;
				case "data-not-null-curp":
					$valido = $_this.validacion_not_null($(this).val());
					$mensaje = "La CURP es requerida para continuar con el tr\u00E1mite. Te sugerimos intentarlo de nuevo. ";
					break;
				case "data-letras":
					$valido = $_this.validacion_letras_formato($(this).val());
					$mensaje = "Ingresa un " + $(this).data("nombre") + " correcto";
					break;
				case "data-letras-acentos":
					$valido = $_this.validacion_letras_acentos_formato($(this).val());
					$mensaje = "Ingresa un " + $(this).data("nombre") + " correcto";
					break;
				case "data-password":
					$valido = $_this.validacion_alfanumerico_formato($(this).val());
					$mensaje = "Ingresa un " + $(this).data("nombre") + " correcto";
					break;
				case "data-contrasenia":
					$valido = $_this.validacion_not_null($(this).val());
					if (!$valido) {
						$mensaje = "Ingresa una " + $(this).data("nombre") + " correcta";
					} else {
						$valido = $_this.validacion_data_longitud_8_a_10($(this).val());
						if (!$valido) {
							$mensaje = "La " + $(this).data("nombre") + " debe contener de 8 a 10 caracteres";
						} else {
							$valido = $_this.validacion_contrasenia($(this).val());
							$mensaje = "Ingresa una " + $(this).data("nombre") + " correcta";
						}
					}
					break;
				case "data-usuario":
					$valido = $_this.validacion_letras_numeros_letrasSinAcentos($(this).val());
					$mensaje = "Ingresa un " + $(this).data("nombre") + " correcto";
					break;
				case "data-alfanumerico-space":
					$valido = $_this.validacion_alfanumerico_space_formato($(this).val());
					$mensaje = "Ingresa un " + $(this).data("nombre") + " correcto";
					break;
				case "data-time":
					$valido = $_this.validacion_time_formato($(this).val());
					$mensaje = "Ingresa un " + $(this).data("nombre") + " correcto";
					break;
				case "data-curp":
					$valido = $_this.validacion_curp($(this).val());
					$mensaje = "Formato de CURP incorrecto";
					break;
				case "data-curp2":
					$valido = $_this.validacion_curp($(this).val());
					$mensaje = "Lo sentimos, la CURP que ingresaste no es correcta, verif&iacute;cala o bien contacta a tu AFORE para mayor informaci\u00F3n.";
					break;
				case "data-curp3":
					$valido = $_this.validacion_curp($(this).val());
					$mensaje = "Lo sentimos, la CURP que ingresaste no es correcta, verif&iacute;cala o bien contacta a tu AFORE para mayor informaci\u00F3n.";
					break;
				case "data-curp4":
					$valido = ($(this).val().length > 0 && $(this).val().length == 18);
					if($valido) {
						$valido = $_this.validacion_curp($(this).val());
					}
					$mensaje = "Los datos que ingresaste no cumplen con el formato, verif&iacute;calos";
					break;
				case "data-nss":
					if($_this.validacion_not_null($(this).val())){
						$valido = (($(this).val().length==11) && ($_this.validacion_nss_zero($(this).val())));
						if(!$valido){
							$mensaje = "Formato de NSS incorrecto.";
						}
					}else{
						$valido = false;
						$mensaje = "El NSS es requerido para continuar con el tr&aacute;mite. Te sugerimos intentarlo de nuevo.";							
					}
					break;
				case "data-curp-validate":
					// Primero valida que el formato de CURP sea correcto
					if ($_this.validacion_curp($(this).val())) {
						$valido = $domiciliaForm.validacion_curp($(this).val());
						$mensaje = "La CURP que ingresaste no es correcta";
					} else {
						$valido = $_this.validacion_curp($(this).val());
						$mensaje = "Formato de CURP incorrecto";
					}
					break;
				case "data-rfc":
					$valido = $_this.validacion_rfc($(this).val());
					$mensaje = "Formato de RFC incorrecto";
					break;
				case "data-rfc1":
					$valido = $(this).val().length >= 10 || $(this).val().length <= 13;
					if($valido) {
						$valido = $_this.validacion_rfc1($(this).val());
					}
					$mensaje = "Los datos que ingresaste no cumplen con el formato, verif&iacute;calos";
					break;
				case "data-debito":
					var value = "";

					if ($("#hde_cuenta").val() == "") {
						value = $(this).val();
					} else {
						value = $("#hde_cuenta").val();
					}

					$valido = $_this.validacion_tarjeta_debito_formato(value);
					$mensaje = "El formato de la tarjeta de d\u00e9bito es incorrecto";
					break;
				case "data-folio":
					$valido = $_this.validacion_numeros_formato($(this).val()) && $(this).val().length == 20;
					$mensaje = "Formato de Folio incorrecto";
					break;
				case "data-no-content":
					$valido = $_this.validacion_no_contener($("#hde_cuenta").val());
					$mensaje = "El formato de la tarjeta de d\u00e9bito es incorrecto";
					break;
				case "data-numeros":
					var optionalProperty = $(this).attr("data-optional");
					$valido = $_this.validacion_numeros_formato($(this).val()) || (typeof optionalProperty !== typeof undefined && optionalProperty !== "");
					$mensaje = "Ingrese un " + $(this).data("nombre") + " correcto";
					break;
				case "data-numeros-10":
					var optionalProperty = $(this).attr("data-optional");
					$valido = $_this.validacion_numeros_formato_10($(this).val()) || (typeof optionalProperty !== typeof undefined && optionalProperty !== "");
					$mensaje = "Ingrese un " + $(this).data("nombre") + " correcto";
					break;
				case "data-size":
					var $textoFinal = " caracteres";
					var optionalProperty = $(this).attr("data-optional");
					if ($(this).attr("data-numeros") == 0 || $(this).attr("data-debito") == 0)
						$textoFinal = " d\u00edgitos";
					$valido = $_this.validacion_size($(this).val(), $(this).data("size"));
					$valido = ((typeof optionalProperty !== typeof undefined && optionalProperty !== "") && $(this).val().length == 0) || $valido;
					$mensaje = "El " + $(this).data("nombre") + " debe contener " + $(this).data("size") + $textoFinal;
					break;
				case "data-min":
					$valido = ($(this).val() >= $(this).data("min") && $(this).val() <= $(this).data("max"));
					$mensaje = $(this).data("content");
					break;
				case "data-optional":
					$valido = true;
					break;
				case "data-fecha-posterior":
					$valido = ($_this.resta_fechas($(this).val()));
					$mensaje = "La fecha ingresada debe ser al menos 5 d\u00edas mayor a la actual";
					break;
				case "data-confirm":
					$valido = $(this).val() == $("#confirmaCorreo").val();
					$mensaje = "Las direcciones de correo electr\u00f3nico no coinciden";
					if (!$valido) {
						$("#confirmaCorreo").addClass("invalid_data");
						$("#confirmaCorreo").parents(".form-group:first").find("span.text_error").remove();
						$("#confirmaCorreo").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#confirmaCorreo").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
					} else if ($("#confirmaCorreo").parents(".form-group").find("span.text_error").data("check") == $i) {
						$("#confirmaCorreo").removeClass("invalid_data");
						$("#confirmaCorreo").parents(".form-group:first").find("span.text_error").remove();
					}
					break;
				case "data-confirm2":
					$valido = $(this).val() == $("#confirmaCorreo").val();
					$mensaje = "Lo sentimos, no coincide el Nuevo correo electrÃ³nico con la confirmaciÃ³n de correo";
					if (!$valido) {
						$("#confirmaCorreo").addClass("invalid_data");
						$("#confirmaCorreo").parents(".form-group:first").find("span.text_error").remove();
						$("#confirmaCorreo").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#confirmaCorreo").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
					} else if ($("#confirmaCorreo").parents(".form-group").find("span.text_error").data("check") == $i) {
						$("#confirmaCorreo").removeClass("invalid_data");
						$("#confirmaCorreo").parents(".form-group:first").find("span.text_error").remove();
					}
					break;
				case "data-confirm3":
					if($(this).val() != ""){
						$valido = $(this).val() == $("#confirmaCelular").val();
						$mensaje = "Los n&uacute;meros de tel&eacute;fono celular no coinciden";
						if (!$valido) {
							$("#confirmaCelular").addClass("invalid_data");
							$("#confirmaCelular").parents(".form-group:first").find("span.text_error").remove();
							$("#confirmaCelular").parents(".form-group:first").append($_this.mensaje($mensaje));
							$("#confirmaCelular").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
						} else if ($("#confirmaCelular").parents(".form-group").find("span.text_error").data("check") == $i) {
							$("#confirmaCelular").removeClass("invalid_data");
							$("#confirmaCelular").parents(".form-group:first").find("span.text_error").remove();
						}
					}
					break;
				case "data-confirm4":
					$valido = !($(this).val() == "" && $("#telefonoCelular").val() == "");
					$mensaje = "Debe capturar al menos un tel&eacute;fono";
					break;
				case "data-confirm5":
					
					
					$valido = !($(this).val() == "" && $("#siefore2").val() == "" && $("#siefore3").val() == "" 
						&& $("#siefore4").val() == "" && $("#siefore5").val() == "" && !$("#checkp").prop("checked"));
					$mensaje = "Debe capturar al menos una siefore";
					if (!$valido) {
						$("#siefore1").addClass("invalid_data");
						$("#siefore1").parents(".form-group:first").find("span.text_error").remove();
						$("#siefore1").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#siefore1").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
						
						$("#siefore2").addClass("invalid_data");
						$("#siefore2").parents(".form-group:first").find("span.text_error").remove();
						$("#siefore2").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#siefore2").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
						
						$("#siefore3").addClass("invalid_data");
						$("#siefore3").parents(".form-group:first").find("span.text_error").remove();
						$("#siefore3").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#siefore3").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
						
						$("#siefore4").addClass("invalid_data");
						$("#siefore4").parents(".form-group:first").find("span.text_error").remove();
						$("#siefore4").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#siefore4").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
						
						$("#siefore5").addClass("invalid_data");
						$("#siefore5").parents(".form-group:first").find("span.text_error").remove();
						$("#siefore5").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#siefore5").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
						
					} else if ($("#siefore1").parents(".form-group").find("span.text_error").data("check") == $i) {
						$("#siefore1").removeClass("invalid_data");
						$("#siefore1").parents(".form-group:first").find("span.text_error").remove();
						
						$("#siefore2").removeClass("invalid_data");
						$("#siefore2").parents(".form-group:first").find("span.text_error").remove();
						
						$("#siefore3").removeClass("invalid_data");
						$("#siefore3").parents(".form-group:first").find("span.text_error").remove();
						
						$("#siefore4").removeClass("invalid_data");
						$("#siefore4").parents(".form-group:first").find("span.text_error").remove();
						
						$("#siefore5").removeClass("invalid_data");
						$("#siefore5").parents(".form-group:first").find("span.text_error").remove();
					}
					break;
				case "data-confirm6":
					$valido = !($(this).val() == "" && $("#telefonoCelular").val() == "");
					$mensaje = "Debe capturar al menos un tel&eacute;fono";
					if($valido) {
						$valido = !($(this).val() == $("#telefonoCelular").val());
						$mensaje = "El tel&eacute;fono fijo y el tel&eacute;fono celular es el mismo, por favor capturar un tel&eacute;fono diferente";
					}
					break;
				case "data-check-rcv":
					$valido = (!($(this).val() == "" &&  $("#checkRcv").prop("checked")))&&
							  (!($(this).val() != "" && !$("#checkRcv").prop("checked")));
					$mensaje = "Debe seleccionar una siefore";
					if($(this).val() == "--"){
						$valido = false;
						$mensaje = "Debe seleccionar una siefore disponible";
					}
					if (!$valido) {
						$("#siefore1").addClass("invalid_data");
						$("#siefore1").parents(".form-group:first").find("span.text_error").remove();
						$("#siefore1").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#siefore1").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
					} else if ($("#siefore1").parents(".form-group").find("span.text_error").data("check") == $i) {
						$("#siefore1").removeClass("invalid_data");
						$("#siefore1").parents(".form-group:first").find("span.text_error").remove();
					}
					break;
				case "data-check-av":
					$valido = (!($(this).val() == "" &&  $("#checkAv").prop("checked")))&&
							  (!($(this).val() != "" && !$("#checkAv").prop("checked")));
					$mensaje = "Debe seleccionar una siefore";
					if($(this).val() == "--"){
						$valido = false;
						$mensaje = "Debe seleccionar una siefore disponible";
					}
					if (!$valido) {
						$("#siefore2").addClass("invalid_data");
						$("#siefore2").parents(".form-group:first").find("span.text_error").remove();
						$("#siefore2").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#siefore2").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
					} else if ($("#siefore2").parents(".form-group").find("span.text_error").data("check") == $i) {
						$("#siefore2").removeClass("invalid_data");
						$("#siefore2").parents(".form-group:first").find("span.text_error").remove();
					}
					break;
				case "data-zeros":
					$valido = ($_this.validacion_tel_zero($(this).val()));
					$mensaje = $(this).data("nombre") + " no v&aacute;lido";
					break;
				case "data-cpzeros":
					$valido = ($_this.validacion_cp_zero($(this).val()));
					$mensaje = $(this).data("nombre") + " no v&aacute;lido";
					break;
				case "data-confirm-contrasenia":
					$valido = $(this).val() == $("#confirmaContrasenia").val();
					$mensaje = "Las contraseÃ±as no coinciden";
					if (!$valido) {
						$("#confirmaContrasenia").addClass("invalid_data");
						$("#confirmaContrasenia").parents(".form-group:first").find("span.text_error").remove();
						$("#confirmaContrasenia").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#confirmaContrasenia").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
					} else if ($("#confirmaContrasenia").parents(".form-group").find("span.text_error").data("check") == $i) {
						$("#confirmaContrasenia").removeClass("invalid_data");
						$("#confirmaContrasenia").parents(".form-group:first").find("span.text_error").remove();
					}
					break;
				case "data-confirm-contrasenia2":
					$valido = $(this).val() == $("#confirmaContrasenia").val();
					$mensaje = "Lo sentimos, no coincide la Nueva contraseÃ±a con la confirmaciÃ³n de contraseÃ±a";
					if (!$valido) {
						$("#confirmaContrasenia").addClass("invalid_data");
						$("#confirmaContrasenia").parents(".form-group:first").find("span.text_error").remove();
						$("#confirmaContrasenia").parents(".form-group:first").append($_this.mensaje($mensaje));
						$("#confirmaContrasenia").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
					} else if ($("#confirmaContrasenia").parents(".form-group").find("span.text_error").data("check") == $i) {
						$("#confirmaContrasenia").removeClass("invalid_data");
						$("#confirmaContrasenia").parents(".form-group:first").find("span.text_error").remove();
					}
					break;
				case "data-confirm-curp":
					var aux = false;
					aux = $_this.validacion_curp($(this).val());
					aux2 = $_this.validacion_curp($("#confirmaCurp").val());

					if (($("#confirmaCurp").val() != "") && (aux != false) && (aux2 != false)) {
						$valido = $(this).val() == $("#confirmaCurp").val();
						$mensaje = "Las claves curp no coinciden";
						if (!$valido) {
							$("#confirmaCurp").addClass("invalid_data");
							$("#confirmaCurp").parents(".form-group:first").find("span.text_error").remove();
							$("#confirmaCurp").parents(".form-group:first").append($_this.mensaje($mensaje));
							$("#confirmaCurp").parents(".form-group:first").find("span.text_error").attr('data-check', $i);
						} else if ($("#confirmaCurp").parents(".form-group").find("span.text_error").data("check") == $i) {
							$("#confirmaCurp").removeClass("invalid_data");
							$("#confirmaCurp").parents(".form-group:first").find("span.text_error").remove();
						}
					} else if (($("#confirmaCurp").val() == "") && (aux != false) && (aux2 == false)) {
						$mensaje = "";
					} else if (($(this).val() == "") && ($("#confirmaCurp").val() != "") && (aux == false) && (aux2 != false)) {
						$mensaje = "Ingresa un " + $(this).data("nombre") + " correcto";
					} else if (($(this).val() != "") && ($("#confirmaCurp").val() != "") && (aux != false) && (aux2 == false)) {
						$mensaje = "";
					} else {
						$mensaje = "Formato de CURP incorrecto";
					}
					break;
				case "data-email":
					$valido = $_this.validacion_email_formato($(this).val());
					$mensaje = "Formato de correo electr\u00f3nico incorrecto";
					break;
				case "data-email2":
					if ($(this).val() == '') {
						$valido = false;
						$mensaje = "Te informamos que el correo electrÃ³nico es necesario para recuperar tu contraseÃ±a";
					} else {
						$valido = $_this.validacion_email_formato($(this).val());
						$mensaje = "Formato de correo electr\u00f3nico incorrecto";
					}
					break;
				case "data-nom-usuario":
					$valido = $_this.validacion_nombre_usuario($(this).val());
					$mensaje = "Ingresa un usuario correcto";
					break;
				case "data-nss-imss":
					$mensaje = "Los datos que ingresaste no cumplen con el formato, verif&iacute;calos";
					if(!$("#checkboxNSS").prop("checked")) {
						$valido = (($(this).val().length==11) && ($_this.validacion_nss_zero($(this).val())));
					} else {
						$valido = true;
					}
					break;
				case "data-personales-retiro":
					$valido = ($(this).val().length > 0 && $(this).val().length <= 50);
					if($valido) {
						$valido = $_this.validacion_letras_acentos_formato($(this).val());
						if($valido) {
							$valido = $_this.validacion_letras_formato($(this).val());
						}
					}
					$mensaje = "Los datos que ingresaste no cumplen con el formato, verif&iacute;calos";
					break;
				case "data-personales-retiro-mat":
					if($(this).val().length == 0) {
						$valido = true;
					} else {
						$valido = ($(this).val().length > 0 && $(this).val().length <= 50);
						if($valido) {
							$valido = $_this.validacion_letras_acentos_formato($(this).val());
							if($valido) {
								$valido = $_this.validacion_letras_formato($(this).val());
							}
						}
						$mensaje = "Los datos que ingresaste no cumplen con el formato, verif&iacute;calos";
					}
					break;
				case "data-telefono":
					if($("#tel").val() == "" && $("#cel").val() == ""){
						$mensaje = "Por favor ingrese un telÃ©fono fijo o un celular de contacto.";
						$valido = false;
					}else{
						if($("#tel").val().length != 10 && $("#tel").val() != ""){
							$mensaje = "El nÃºmero telefÃ³nico debe contener 10 nÃºmeros.";
							$valido = false;
						}else{
							if($("#tel").val() == $("#cel").val()){
								$mensaje = "Los nÃºmeros de telÃ©fono fijo y celular deben ser distintos.";
								$valido = false;
							}else{
								if($("#tel").val() != $("#tel2").val()){
									$mensaje = "El nÃºmero telefÃ³nico proporcionado no corresponde con la confirmaciÃ³n.";
									$valido = false;
								}else{
									$valido = true;
								}
							}
						}
					}
					break;
				case "data-celular":
					if($("#cel").val() == "" && $("#tel").val() == ""){
						$mensaje = "Por favor ingrese un telÃ©fono o un celular de contacto.";
						$valido = false;
					}else{
						if($("#cel").val().length != 10 && $("#cel").val() != ""){
							$mensaje = "El nÃºmero celular debe contener 10 nÃºmeros.";
							$valido = false;
						}else{
							if($("#tel").val() == $("#cel").val()){
								$mensaje = "Los nÃºmeros de telÃ©fono fijo y celular deben ser distintos.";
								$valido = false;
							}else{
								if($("#cel").val() != $("#cel2").val()){
									$mensaje = "El nÃºmero celular proporcionado no corresponde con la confirmaciÃ³n.";
									$valido = false;
								}else{
									$valido = true;
								}
							}
						}
					}
					break;
				case "data-celular1":
					if($("#cel").val() == "") {
						$mensaje = "Por favor ingrese el telÃ©fono celular de contacto.";
						$valido = false;
					} else if($("#cel").val().length != 10 && $("#cel").val() != "") {
						$mensaje = "El telÃ©fono celular debe contener 10 nÃºmeros.";
						$valido = false;
					} else {
						$valido = true;
					}
					break;
				case "data-tel2":
					if($("#tel").val() != $("#tel2").val()){
						$mensaje = "El nÃºmero no corresponde al telÃ©fono fijo.";
						$valido = false;
					}else{
						$valido = true;
					}
					break;
				case "data-tel":
					if($("#tel").val().length != 10 && $("#tel").val() != "") {
						$mensaje = "El telÃ©fono fijo debe contener 10 nÃºmeros.";
						$valido = false;
					} else {
						$valido = true;
					}
					break;
				case "data-cel2":
					if($("#cel").val() != $("#cel2").val()){
						$mensaje = "El nÃºmero no corresponde al celular.";
						$valido = false;
					}else{
						$valido = true;
					}
					break;
				case "data-mail":
					if($("#mail2").val() == "") {
						$mensaje = "El campo de Confirmar tu correo electrÃ³nico es obligatorio. Favor de ingresarlo.";
						$valido = false;
					} else {
						if($("#mail").val() != $("#mail2").val()){
							$mensaje = "El correo electrÃ³nico no corresponde con la confirmacion.";
							$valido = false;
						}else{
							$valido = true;
						}
					}
					break;
				case "data-horarios":
					$valido = true;
					if($("#horarioContactoInicio").val() == $("#horarioContactoFin").val()) {
						$mensaje = "El horario DE debe ser distinto al horario HASTA.";
						$valido = false;
					} else {
						var stHI = $("#horarioContactoInicio").val().substring(0, 2);
						var stHF = $("#horarioContactoFin").val().substring(0, 2);
						if(parseInt(stHI) > parseInt(stHF)) {
							$mensaje = "El horario DE debe ser menor al horario HASTA.";
							$valido = false;
						}
					}
				}

				$(this).val($_this.quitar_espacios_inicio_fin($(this).val()));
				if ($(this).attr("id") == "ladaYtel" || $(this).attr("id") == "telefonoCelular"){
					$(this).removeClass("invalid_data");
					$(this).parents(".form-group:first")
					.find("span.text_error").remove();
				}
				var span = "";
				if (!$valido) {
					++$status;
					$(this).addClass("invalid_data");
		
					if($(this).attr("id") == "exterior" || $(this).attr("id") == "pais" || $(this).attr("id") == "codigoPostal"){
						$(this).parent("div").find("span.text_error").remove();
					}else{
						$(this).parents(".form-group:first").find("span.text_error").remove();
					}
					if ($(this).attr("id") == "valorQuincena1" || $(this).attr("id") == "valorQuincena2"){
						$(this).parents(".form-group:first").append($_this.mensajeFechaErronea($mensaje));
					}else{
						if($(this).attr("id") == "exterior" || $(this).attr("id") == "pais" || $(this).attr("id") == "codigoPostal"){
							$(this).after($_this.mensaje($mensaje));
						}else{
							$(this).parents(".form-group:first").append($_this.mensaje($mensaje));
						}
					}
					if($(this).attr("id") == "exterior" || $(this).attr("id") == "pais" || $(this).attr("id") == "codigoPostal"){
						$(this).parent("div").find("span.text_error").attr('data-check', $i);
					}else{
						$(this).parents(".form-group:first").find("span.text_error").attr('data-check', $i);
					}
				} else if ($(this).parents(".form-group").find("span.text_error").data("check") == $i) {
					$(this).removeClass("invalid_data");
					span = $(this).parents(".form-group:first").find("span.text_error").clone();
					if($(this).attr("id") == "exterior" || $(this).attr("id") == "pais" || $(this).attr("id") == "codigoPostal"){
						$(this).parent("div").find("span.text_error").remove();
					}else{
						$(this).parents(".form-group:first").find("span.text_error").remove();
					}
				}

				if (($(this).attr("id") == "horarioContacto1" && $("#horarioContacto1").val() != "")
						|| ($(this).attr("id") == "horarioContacto2" && $("#horarioContacto2").val() != "")) {
					$(this).removeClass("invalid_data");
					if ($(this).attr("id") == "horarioContacto2" && $("#horarioContacto1").hasClass("invalid_data")) {
						$(this).parents(".form-group:first").append(span);
					}
				}
			});
		}
		return ($status == 0) ? true : false;
	},
	validacion_not_null: function() {
		if (!arguments[0])
			return false;
		return true;
	},
	validacion_curp: function() {
		return (arguments[0].match(/^([a-z|A-Z]{4})([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([a-z|A-Z]{6})([0-9A-Z]{1})([0-9]{1})$/i)) ? true : false;
	},
	validacion_rfc: function() {
		return (arguments[0].match(/^([A-Z|a-z|&amp;]{3}\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)|([02468][048]|[13579][26])0229)(\w{2})([A|a|0-9]{1})$|^([A-Z|a-z]{4}\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)|([02468][048]|[13579][26])0229)((\w{2})([A|a|0-9]{1})){0,3}$/i)) ? true : false;
	},
	validacion_rfc1: function() {
		return (arguments[0].match(/^([A-Z|a-z|&amp;]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z|\d]{3})?$/i)) ? true : false;
	},
	validacion_email_formato: function() {
		return (arguments[0].match(/^[A-Z0-9_,\.-]+@[A-Z0-9_,\.-]+\.[A-Z]{1,4}/i)) ? true : false;
	},
	validacion_time_formato: function() {
		return (arguments[0].match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/i)) ? true : false;
	},
	validacion_data_longitud_8_a_10: function() {
		return (arguments[0].match(/^.{8,10}$/i)) ? true : false;
	},
	validacion_nombre_usuario: function() {
		return (arguments[0].match(/^([a-z|A-Z|Ã±Ã‘|0-9|\._]{0,10})$/i)) ? true : false;
	},
	validacion_time: function() {
		var $this = arguments[0];
		var $event = arguments[1];
		var $validacion_extra = [0, 8, 9, 16, 17, 20, 58];
		for (var $i = 48; $i <= 57; $i++)
			$validacion_extra.push($i);
		
		var codeCharacter = $event.charCode || $event.keyCode;
		if (codeCharacter == 0 || codeCharacter == 229) {
			codeCharacter = $this.val().charCodeAt($this.val().length - 1);
        }
		
		if (jQuery.inArray(codeCharacter, $validacion_extra) === -1)
			return false;
		return true;
	},
	validacion_telefono: function() {
	},
	validacion_no_contener: function() {
		var reg = /000/;
		return arguments[0].match(reg) ? false : true;
	},
	validacion_nss_zero: function() {
		var reg = /00000000000/;
		return arguments[0].match(reg) ? false : true;
	},
	validacion_tel_zero: function() {
		var reg = /0000000000/;
		return arguments[0].match(reg) ? false : true;
	},
	validacion_cp_zero: function() {
		var reg = /00000/;
		return arguments[0].match(reg) ? false : true;
	},

	validacion_celular: function() {
	},
	validacion_size: function() {
		return (arguments[0].length == arguments[1]) ? true : false;
	},
	validacion_letras_formato: function() {
		return (arguments[0].match(/^([a-zA-ZÃ±Ã‘\s])*$/)) ? true : false;
	},
	validacion_letras_numeros_letrasSinAcentos: function() {
		return (arguments[0].match(/^([a-zA-Z0-9Ã±Ã‘\s])*$/)) ? true : false;
	},
	validacion_letras_acentos_formato: function() {
		return (arguments[0].match(/^([a-zA-ZÃ±Ã‘Ã¡Ã©Ã­Ã³ÃºÃÃ‰ÃÃ“ÃšÃ¤Ã«Ã¯Ã¶Ã¼Ã„Ã‹ÃÃ–Ãœ\s])*$/)) ? true : false;
	},
	validacion_alfanumerico_formato: function() {
		return (arguments[0].match(/^([a-zA-Z0-9Ã±Ã‘Ã¡Ã©Ã­Ã³ÃºÃÃ‰ÃÃ“ÃšÃ¤Ã«Ã¯Ã¶Ã¼Ã„Ã‹ÃÃ–Ãœ])*$/)) ? true : false;
	},
	validacion_contrasenia: function() {
		return (arguments[0].match(/^((?=.*[0-9])(?=.*[A-Z])(?=.*[#$%*Â¡!Â¿?/{}[\]=+\-_@;:]))[0-9a-zA-Z#$%*Â¡!Â¿?/{}[\]=+\-_@;:Ã±Ã‘Ã¡Ã©Ã­Ã³ÃºÃÃ‰ÃÃ“Ãš]{8,10}$/)) ? true : false;
	},
	validacion_alfanumerico_space_formato: function() {
		return (arguments[0].match(/^([a-zA-Z0-9Ã±Ã‘Ã¡Ã©Ã­Ã³ÃºÃÃ‰ÃÃ“ÃšÃ¤Ã«Ã¯Ã¶Ã¼Ã„Ã‹ÃÃ–Ãœ\s])*$/)) ? true : false;
	},
	validacion_numeros_formato: function() {
		return (arguments[0].match(/^[\d\s]*\d$/i)) ? true : (arguments[0] == "") ? true : false;
	},
	validacion_numeros_formato_10: function() {
		return (arguments[0].match(/^[\d]{10,20}$/i)) ? true : (arguments[0] == "") ? true : false;
	},
	validacion_tarjeta_debito_formato: function() {
		return (arguments[0].match(/^\d\d*\d$/i)) ? true : false;
	},
	quitar_espacios_inicio_fin: function() {
		var $expresionRegular = /^\s+|\s+$/g;
		return arguments[0].replace($expresionRegular, "");
	},
	validacion_letras: function() {
		var $this = arguments[0];
		var $event = arguments[1];
		var $validacion_extra = [0, 8, 9, 16, 17, 20];
		$validacion_extra.push(32, 209,241); /* dieresis, espacio, letras con acentos */
		for (var $i = 65; $i <= 90; $i++)
			$validacion_extra.push($i); /* mayusculas */
		for (var $i = 97; $i <= 122; $i++)
			$validacion_extra.push($i); /* minusculas */
		
		var codeCharacter = $event.charCode || $event.keyCode;
		if (codeCharacter == 0 || codeCharacter == 229) {
			codeCharacter = $this.val().charCodeAt($this.val().length - 1);
        }
		
		if (jQuery.inArray(codeCharacter, $validacion_extra) === -1)
			return false;
		return true;
	},
	validacion_letras_acentos: function() {
		var $this = arguments[0];
		var $event = arguments[1];
		var $validacion_extra = [0, 8, 9, 16, 17, 20];
		$validacion_extra.push(32, 193, 201, 205, 211, 218, 241, 209, 225, 233, 237, 243, 250, 228, 235, 239, 246, 252, 196, 203, 207, 214, 220); /* dieresis, espacio, letras con acentos */
		for (var $i = 65; $i <= 90; $i++)
			$validacion_extra.push($i); /* mayusculas */
		for (var $i = 97; $i <= 122; $i++)
			$validacion_extra.push($i); /* minusculas */

		var codeCharacter = $event.charCode || $event.keyCode;
		if (codeCharacter == 0 || codeCharacter == 229) {
			codeCharacter = $this.val().charCodeAt($this.val().length - 1);
        }
		
		if (jQuery.inArray(codeCharacter, $validacion_extra) === -1)
			return false;
		return true;
	},
	validacion_email: function() {
		var $this = arguments[0];
		var $event = arguments[1];
		var $validacion_extra = [0, 8, 9, 16, 17, 20];
		$validacion_extra.push(209, 241, 189, 16, 190, 81, 64, 95, 45, 46); /* Ã±, Ã‘ */
		for (var $i = 48; $i <= 57; $i++)
			$validacion_extra.push($i); /* 0 -9 */
		for (var $i = 65; $i <= 90; $i++)
			$validacion_extra.push($i); /* mayusculas */
		for (var $i = 97; $i <= 122; $i++)
			$validacion_extra.push($i); /* minusculas */
		
		var codeCharacter = $event.charCode || $event.keyCode;
		if (codeCharacter == 0 || codeCharacter == 229) {
			codeCharacter = $this.val().charCodeAt($this.val().length - 1);
        }
		
		if (jQuery.inArray(codeCharacter, $validacion_extra) === -1)
			return false;
		return true;
	},
	validacion_numeros: function() {
		var $this = arguments[0];
		var $event = arguments[1];
		var $validacion_extra = [0, 8, 9, 16, 17, 20];
		for (var $i = 48; $i <= 57; $i++)
			$validacion_extra.push($i);
		
		var codeCharacter = $event.charCode || $event.keyCode;
		if (codeCharacter == 0 || codeCharacter == 229) {
			codeCharacter = $this.val().charCodeAt($this.val().length - 1);
        }
		
		if (jQuery.inArray(codeCharacter, $validacion_extra) === -1)
			return false;
		return true;
	},
	validacion_debito: function() {
		var $this = arguments[0];
		var $event = arguments[1];
		var $validacion_extra = [0, 8, 9, 16, 17, 20];
		for (var $i = 48; $i <= 57; $i++)
			$validacion_extra.push($i);
		
		var codeCharacter = $event.charCode || $event.keyCode;
		if (codeCharacter == 0 || codeCharacter == 229) {
			codeCharacter = $this.val().charCodeAt($this.val().length - 1);
        }
		
		if (jQuery.inArray(codeCharacter, $validacion_extra) === -1)
			return false;
		return true;
	},
	validacion_alfanumerico: function() {
		var $this = arguments[0];
		var $event = arguments[1];
		var $validacion_extra = [0, 8, 9, 16, 17, 20];
		$validacion_extra.push(209, 241); /* Ã±, Ã‘ */
		for (var $i = 48; $i <= 57; $i++)
			$validacion_extra.push($i); /* 0 -9 */
		for (var $i = 65; $i <= 90; $i++)
			$validacion_extra.push($i); /* mayusculas */
		for (var $i = 97; $i <= 122; $i++)
			$validacion_extra.push($i); /* minusculas */
		
		var codeCharacter = $event.charCode || $event.keyCode;
		if (codeCharacter == 0 || codeCharacter == 229) {
			codeCharacter = $this.val().charCodeAt($this.val().length - 1);
        }
		
		if (jQuery.inArray(codeCharacter, $validacion_extra) === -1)
			return false;
		return true;
	},
	validacion_alfanumerico_space: function() {
		var $this = arguments[0];
		var $event = arguments[1];
		var $validacion_extra = [0, 8, 9, 16, 17, 20, 32];
		$validacion_extra.push(209, 241); /* Ã±, Ã‘ */
		for (var $i = 48; $i <= 57; $i++)
			$validacion_extra.push($i); /* 0 -9 */
		for (var $i = 65; $i <= 90; $i++)
			$validacion_extra.push($i); /* mayusculas */
		for (var $i = 97; $i <= 122; $i++)
			$validacion_extra.push($i); /* minusculas */
		
		var codeCharacter = $event.charCode || $event.keyCode;
		if (codeCharacter == 0 || codeCharacter == 229) {
			codeCharacter = $this.val().charCodeAt($this.val().length - 1);
        }
		
		if (jQuery.inArray(codeCharacter, $validacion_extra) === -1)
			return false;
		return true;
	},
	resta_fechas: function(f1) {
		var fechaActual = new Date($("#hde_current_date").val());
		var f2 = fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear();
		var aFecha1 = f1.split('/');
		var aFecha2 = f2.split('/');
		var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1]-1, aFecha1[2]);
		var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1]-1, aFecha2[0]);
		var dif = fFecha1 - fFecha2;
		var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
		return dias > 5;
	},
	status: false,
	mensaje: function() {
		return "<span class='text_error'>" + arguments[0] + "</span>";
	},
	mensajeFechaErronea: function() {
		return "<span class='text_error' style='display:inline-block'>" + arguments[0] + "</span>";
	}
};

$.fn.selectRange = function(start, end) {
    if(!end) end = start;
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};