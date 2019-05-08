var crearCookie = function (key, value) {

    expires = new Date();
    expires.setTime(expires.getTime() + 604800000);
    cookie = key + "=" + value + ";expires=" + expires.toUTCString();
    return document.cookie = cookie;
}

var leerCookie = function (key) {
    keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    if (keyValue) {
        return keyValue[2];
    } else {
       
        return null;
    }
}

$(document).ready(function () {
    //debugger;
    $(".cookies").hide();
   
    $("#cerrar").on("click", function () {
       
        crearCookie("cookie" + document.domain,"politica Aceptada")

        $(".cookies").hide();
    })


    if (leerCookie("cookie" + document.domain)=="politica Aceptada"){

    }else{
        $(".cookies").show();
    }

});
