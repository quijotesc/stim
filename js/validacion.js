//-----------      ----------     FUNCIONES     -----------      ----------     

// -----------   VALIDACIONES 



function validateName(nombre1) { 
    var re = /^[A-Za-z ÑñáéíóúÁÉÍÓÚ\s]+$/;
    var nombre = nombre1.val();

    if(re.test(nombre)) {nombre1.addClass("validado").removeClass("no_validado");}
    else {nombre1.addClass("no_validado").removeClass("validado");}
   
    return re.test(nombre); 
}
function validateFill(fill1) { 
    var fill = fill1.val();

    if(fill !="" ) {fill1.addClass("validado").removeClass("no_validado"); return true;}
    else {fill1.addClass("no_validado").removeClass("validado"); return false;} 
}

function validateEmail(email1) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = email1.val();

	if (re.test(email)) {email1.addClass("validado").removeClass("no_validado");}
	else {email1.addClass("no_validado").removeClass("validado");}
    
    return re.test(email);
}
function confirmEmail(email1) {

    var email = email1.val();
    var premail = $("#email").val();

	if (email === premail) {email1.addClass("validado").removeClass("no_validado"); return true;}
	else {email1.addClass("no_validado").removeClass("validado"); return false;}
}
function validatePhone(telf1) {
    var re = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    var telf = telf1.val();

	if (re.test(telf)) {telf1.addClass("validado").removeClass("no_validado");}
	else {telf1.addClass("no_validado").removeClass("validado");}
    
    return re.test(email);
}


