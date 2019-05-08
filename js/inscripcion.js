var tiempo = {},
	inscripcion = {},
	grupo,
	// mails = inscripcion.mails,
	curso = {},
	meses = 1,
	descuento = 0,
// var precioHoras = 0;
// var horasSemana = 0;
	precioTotal = 0,
	precioDescuento = 1,

//var curso_en = "";
	comienzo,
	grupo_es,
	nombre,
	apellidos,
	fechaNacimiento,
	nacionalidad,
	email,
	telf,
	lengua,
	nivel,
	idioma = "Español";

//detectar idioma

$(document).ready(function(){
	$(".idiomas").click(function(){
		idioma = $(".idiomas .idioma-activo").text();
	});
});

// quitar idioma al hacer scroll

// $(window).scroll(function() {
// 	if ($(this).scrollTop() > 250) {
// 		$(".idiomas").hide();
// 	} else {
// 		$(".idiomas").show();
// 	}
// });

//calendario comienzo del curso

$('#comienzo').datepicker({
	weekStart: 1,
	todayBtn: true,
    language: "es",
    orientation: "bottom left",
    daysOfWeekDisabled: "0,6",
    daysOfWeekHighlighted: "1",
    format: "dd/mm/yy",
    todayHighlight: true
});


//navegador en el slider

$(".datos_avance ul li").click(function(){
	$(this).addClass('paso_activo').siblings().removeClass('paso_activo');
	$(".paso_activo").prevAll().addClass("rellenar_puntos");
});


//Label se pasa arriba
$(".personales label input, .contacto label input, .otros_datos label input").keyup(function(){
	$(this).siblings().css({"top":"0","opacity":".9"})
});
$("#c_contenido").keyup(function(){
	$(this).siblings().css({"top":"0","opacity":".9"})
});

//input de número de semanas
(function () {
	var numInput = $("#tiempo_curso"),
	tipocurso,
	numAct = 0;

	$(".botones .mas").on("click",function() {
		tipocurso = $("#grupo").val();
		if ((tipocurso === "gExt") || (tipocurso === "oneExt")|| (tipocurso === "oneHom") || (tipocurso === "oneBeach") || (tipocurso === "oneDele")) {
			$("#tiempo_curso").attr("value","4").attr("step","4").attr("min","4");
			numAct = parseInt(numInput.val());
			numInput.val(parseInt(numAct)+4);
			numAct = 0;
		} else {
			$("#tiempo_curso").attr("value","1").attr("step","1").attr("min","1");
			numAct = parseInt(numInput.val());
			numInput.val(parseInt(numAct)+1);
			numAct = 0;
		}
	});

	$(".botones .menos").on("click",function() {
		tipocurso = $("#grupo").val();
		if ((tipocurso === "gExt") || (tipocurso === "oneExt")|| (tipocurso === "oneHom") || (tipocurso === "oneBeach") || (tipocurso === "oneDele")) {
			$("#tiempo_curso").attr("value","4").attr("step","4").attr("min","4");
			numAct = parseInt(numInput.val());
		 	numInput.val(parseInt(numAct)-4);
		  	numAct = 0;
		} else {
			$("#tiempo_curso").attr("value","1").attr("step","1").attr("min","1");
			numAct = parseInt(numInput.val());
		 	numInput.val(parseInt(numAct)-1);
		  	numAct = 0;
		}
	});	
})();


// $('input').bootstrapNumber({
// 	upClass: 'danger',
// 	downClass: 'success',
// 	center: true
// });



// ------------------ formulario ----------------------

//paso 1

$(".elegir input, .elegir select").blur(function(){
	if ($(this).hasClass("f_fill")){
		validateFill($(this));
	} else if ($(this).hasClass("f_fecha")){
		$(this).addClass("validado");
		return true;
	}

	if((!$(".elegir input").hasClass("no_validado")) && ($("#comienzo").hasClass("validado")) ){
		grupo_es = $("#grupo").val();
		tiempo = $("#tiempo_curso").val();
		comienzo = $("#comienzo").val();
		$(".siguiente").addClass("habilitado");
		$(".habilitado").click(function() {$(".paso_2").click(); $(".siguiente").removeClass("habilitado");});
	}
});

$("#grupo").blur(function () {
	var tipocurso = $("#grupo").val();
	if ((tipocurso === "gExt") || (tipocurso === "oneExt")) {
		$("#tiempo_curso").attr("value","4").attr("step","4").attr("min","4").val(4);
	} else {
		$("#tiempo_curso").attr("value","1").attr("step","1").attr("min","1").val(1);
	}
});

	
//paso 2

$(".personales input").blur(function(){
	if ($(this).hasClass("f_nombre")){validateName($(this));}
	else if ($(this).hasClass("f_fill")){validateFill($(this));}
	
	if((!$(".personales input").hasClass("no_validado")) && ($("#nacionalidad").hasClass("validado")) ){
		nombre = $("#nombre").val();
		apellidos = $("#apellido").val();
		fechaNacimiento = $("#fecha").val();
		nacionalidad = $("#nacionalidad").val();
		$(".siguiente").addClass("habilitado");
		$(".habilitado").click(function() {$(".paso_3").click(); $(".siguiente").removeClass("habilitado");});
	}
});

//paso 3

$(".contacto input").blur(function(){
	if ($(this).hasClass("f_mail")){validateEmail($("#email"));}
	else if ($(this).hasClass("f_mail2")) {confirmEmail($("#email2"));}
	else if ($(this).hasClass("f_telf")){validatePhone($("#telf"));}
	
	if((!$(".contacto input").hasClass("no_validado")) && ($("#telf").hasClass("validado")) ){
		email = $("#email").val();
		telf = $("#telf").val();
		$(".siguiente").addClass("habilitado");
		$(".habilitado").click(function() {$(".paso_4").click();});

		calculadora(grupo_es, tiempo, comienzo);
	}
});

//paso 4

$(".otros_datos input").blur(function(){
	validateFill($(this));
	
	if((!$(".otros_datos input").hasClass("no_validado")) && ($("#nivel").hasClass("validado")) ){
		lengua = $("#lengua").val();
		nivel = $("#nivel").val();
		$(".siguiente").addClass("habilitado");
		$(".habilitado").click(function() {$(".paso_5").click();});
		$(".datos_avance").css({"pointer-events": "auto", "cursor" : "pointer"});
	}
});


// Resumen de la compra

var resumen_compra = function(){
	 if (idioma === "Español") {
	 	curso = grupo.nombre;
		$("#resumen_compra").html("Quieres estudiar el curso <b>"+ curso + "</b>, desde el <b>"+ comienzo + "</b>, durante <b>"+ tiempo + " semanas</b>, que tiene un precio total de <b>" + precioTotal +" €</b>. " + 
									"Te enviaremos toda la información al email: <b>" + email + "</b>");
	} else if (idioma === "English") {
		curso = grupo.nombre_en;
	 	("#resumen_compra").html("You want to study <b>"+ curso + "</b>, from <b>"+ comienzo + "</b>, during <b>"+ tiempo + " weeks</b>, which have a total price of <b>" + precioTotal +" €</b>. " + 
							"We will send you all the information about your course to: <b>" + email + "</b>");
	}
	window.google_trackConversion({
		google_conversion_id: 867063024, 
		google_conversion_label: "RCKaCIKMzHAQ8Km5nQM", 
		google_remarketing_only: true,
		google_conversion_format: "3"
	});
}
$("#check_terminos").click(function () {
	if ($("#check_terminos").is(":checked")) {
		$("#customButton").addClass("habilitado").attr("disabled", false);
	} else {
		$("#customButton").removeClass("habilitado").attr("disabled", true);
	}
})






//  ------------- PAGO STRIPE   -----------------


// abre el form de checkout

$('#customButton').on('click', function(e) {
	console.log(inscripcion.mails.en.uno + comienzo + inscripcion.mails.en.dos);
	console.log(nombre + " " + apellidos + " " + comienzo + " " + tiempo + " " + precioTotal);
	// Open Checkout with further options
	stripehandler.open({
	  name: "Spanish Teachers In Malaga",
	  description: curso,
	  amount: precioTotal*100
	});
	e.preventDefault();
});


// cierra el checkout
$(window).on('popstate', function() {
	stripehandler.close();
});




//SET CHECKOUT PAGO CON TARJETA 

var pagoconfirmado = function () {

	console.log("pago confirmado"); 
	$(".success").addClass('paso_activo').siblings().removeClass('paso_activo');
	$(".datos_avance").hide();

	var mensajeStim = "<html><body><p>" +
		"Reserva del curso <b>" + curso + "</b> de <b>" + nombre + " " + apellidos + "</b>, comienza el <b>" + comienzo + "</b> durante <b>" + tiempo + " semanas</b><br/><br/>" + 
		"-Precio pagado: <b>" + precioTotal + "€</b><br/>" + 
		"-email: <b>" + email + "</b><br/>" + 
		"-fecha de nacimiento: <b>" + fechaNacimiento + "</b><br/>" + 
		"-nacionalidad: <b>" + nacionalidad + "</b><br/>" + 
		"-teléfono: <b>" + telf + "</b><br/>" + 
		"-lengua materna: <b>" + lengua + "</b><br/>" + 
		"-nivel de español: <b>" + nivel + "</b><br/><br/>" +
		"Yiiija!</p></body></html>";

	var mensajeReserva = "";
	var data = {};


	if (idioma === "Español") {

		mensajeReserva = "<html><body><p>" + inscripcion.mails.es.uno + comienzo + inscripcion.mails.es.dos + "</p></body></html>";

		
		data = {
		    destinatario: "info@spanishteachersmalaga.com" ,
		    asunto: '¡¡¡OTRA RESERVA!!!',
		    mensaje: mensajeStim,
			reservador: email,
		    asuntoR: "STiM - Spanish Course",
		    mensajeR: mensajeReserva
		};

	} else if (idioma === "English") {

		mensajeReserva = "<html><body><p>" + inscripcion.mails.en.uno + comienzo + inscripcion.mails.en.dos + "</p></body></html>";

		
		data = {
		    destinatario: "info@spanishteachersmalaga.com" ,
		    asunto: '¡¡¡OTRA RESERVA!!!',
		    mensaje: mensajeStim,
			reservador: email,
		    asuntoR: "STiM - Spanish Course",
		    mensajeR: mensajeReserva
		};

	}

	mandarmail(data);
	console.log(data.mensaje);

}

//MANDAR MAILS  -   esto es super inseguro

var mandarmail=function (data){
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: data,
		success: function() {
			console.log("mail a stim mandado");
		},
		error: function() {
			console.log("mail a stim no enviado");
		}
	});
}










