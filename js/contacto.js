var c_nombre,
	c_apellidos,
	c_email,
	c_telf,
	c_contenido;

//detectar idioma

$("#enviar_form").click(function(){
	c_nombre = $("#c_nombre").val();
	c_apellidos = $("#c_apellidos").val();
	c_email = $("#c_email").val();
	c_telf = $("#c_telf").val();
	c_contenido = $("#c_contenido").val();

	var contactoStim = "<html><body><p>" +
		"Nombre: " + c_nombre + " " + c_apellidos + "<br/>" + 
		"email: " + c_email + "</br>" + 
		"telefono: " + c_telf + "</br>" + 
		"Texto: " + c_contenido + "</br>"; 
	var data = {
		destinatario: "info@spanishteachersmalaga.com",
	    asunto: 'STIM - Contacto',
	    mensaje: contactoStim
	};
	console.log(contactoStim);
	mandarmail(data);
	window.google_trackConversion({
		google_conversion_id: 123456789, 
		google_conversion_label: "tYfTCOG-oWwQ8Km5nQM", 
		google_remarketing_only: true,
		google_conversion_format: "3"
	});
})

//MANDAR MAILS  -   esto es super inseguro

var mandarmail=function (data){
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: data,
		success: function() {
			console.log("mail a stim mandado");
			$("#contacto_form .contacto").hide();
			$(".contacto_enviado").show();
		},
		error: function() {
			console.log("mail a stim no enviado");
		}
	});
}










