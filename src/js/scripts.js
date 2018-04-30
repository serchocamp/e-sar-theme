// Tolltip form

$(function() {
	$('[data-toggle="popover"]').popover();
	$('[data-toggle="tooltip"]').tooltip();
});

$().ready(function() {
	$('#muestramas').change(function(e) {
		if ($('#muestramas').val() == 2) {
			$('#masMontoGradual').show();
		} else if ($('#muestramas').val() == 1) {
			$('#masMontoGradual').hide();
		}
	});
});