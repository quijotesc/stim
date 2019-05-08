// -----------     CALCULADORA DE PRECIO

// calculadora de precios

var calculadora = function (grupo_es, tiempo1, comienzo1) {
	
	// calculadora de descuentos

		var calcdescuento = function(tiempo2, grupo2) {
			
			tiempo = tiempo2/meses;

			//descuento_es = grupo2.descuento.tiempo2,
			switch (grupo2) {
				
				case "gExt":
					if (tiempo==1) 			{ descuento=1; }
					else if (tiempo==2) 	{ descuento=0.975; }
					else if (tiempo==3) 	{ descuento=0.95; }
					else if (tiempo>=4) 	{ descuento=0.90; }
					break;
				case "gInt":
					if (tiempo==1) { descuento=1;}
					else if (tiempo==2) 	{ descuento=0.95; }
					else if (tiempo==3) 	{ descuento=0.9; }
					else if (tiempo>=4) 	{ descuento=0.85; }
					break
				case "oneInt":
					if (tiempo==1) { descuento=1;}
					else if (tiempo==2) 	{ descuento=0.975; }
					else if (tiempo==3) 	{ descuento=0.95; }
					else if (tiempo>=4) 	{ descuento=0.925; }
					break;
				case "oneExt":
					if (tiempo==1) { descuento=1;}
					else if (tiempo==2) 	{ descuento=0.975; }
					else if (tiempo==3) 	{ descuento=0.95; }
					else if (tiempo>=4) 	{ descuento=0.925; }
					break;
				case "oneDele":
					if (tiempo==1) { descuento=1;}
					else if (tiempo==2) 	{ descuento=0.975; }
					else if (tiempo==3) 	{ descuento=0.95; }
					else if (tiempo>=4) 	{ descuento=0.925; }
					break;
				case "gdele":
					if (tiempo==1) { descuento=1;}
					else if (tiempo==2) 	{ descuento=0.95; }
					else if (tiempo==3) 	{ descuento=0.90; }
					else if (tiempo>3 && tiempo<8)	{ descuento=0.85; }
					else if (tiempo>=8)		{ descuento=0.85;}
					break;
				case "oneHom":
					if (tiempo==1) { descuento=1;}
					else if (tiempo==2) 	{ descuento=0.975; }
					else if (tiempo==3) 	{ descuento=0.95; }
					else if (tiempo>=4) 	{ descuento=0.925; }
					break;
				case "oneBeach":
					if (tiempo==1) { descuento=1;}
					else if (tiempo==2) 	{ descuento=0.975; }
					else if (tiempo==3) 	{ descuento=0.95; }
					else if (tiempo>=4) 	{ descuento=0.925; }
					break;
				case "super30":
					if (tiempo==1) { descuento=1;}
					else if (tiempo==2) 	{ descuento=0.9; }
					else if (tiempo==3) 	{ descuento=0.85; }
					else if (tiempo>3 && tiempo<8)	{ descuento=0.8; }
					else if (tiempo>=8)		{ descuento=0.75;}
					break;
				case "super25":
					if (tiempo==1) { descuento=1;}
					else if (tiempo==2) 	{ descuento=0.9; }
					else if (tiempo==3) 	{ descuento=0.85; }
					else if (tiempo>3 && tiempo<8)	{ descuento=0.8; }
					else if (tiempo>=8)		{ descuento=0.75;}
					break;
				
			}



			// if (grupo2==="gInt") { 
			// 	if (tiempo==1) { descuento=1;}
			// 	else if (tiempo==2) 	{ descuento=0.9; }
			// 	else if (tiempo==3) 	{ descuento=0.85; }
			// 	else if (tiempo>=4) 	{ descuento=0.75; }
			// } else if (grupo2==="gExt") { 
			// 	if (tiempo==1) { descuento=1; }
			// 	else if (tiempo==2) 	{ descuento=0.9; }
			// 	else if (tiempo==3) 	{ descuento=0.875; }
			// 	else if (tiempo>=4) 	{ descuento=0.85; }
			// } else if (grupo2==="super30" || grupo2==="super25" || grupo2==="dele") { 
			// 	if (tiempo==1) { descuento=1;}
			// 	else if (tiempo==2) 	{ descuento=0.9; }
			// 	else if (tiempo==3) 	{ descuento=0.85; }
			// 	else if (tiempo>3 && tiempo<8)	{ descuento=0.8; }
			// 	else if (tiempo>=8)		{ descuento=0.75;}
			// }
			//  else if (grupo2==="oneInt" || grupo2==="oneExt") {
			// 	if (tiempo==1) { descuento=1;}
			// 	else if (tiempo==2) 	{ descuento=0.9; }
			// 	else if (tiempo==3) 	{ descuento=0.85; }
			// 	else if (tiempo>=4) 	{ descuento=0.8; }
			// }
			console.log(descuento);
			console.log(100-descuento*100+"% es el descuento");
			tiempo = tiempo*meses;
		}

// ---------------------------------
	grupo = inscripcion.elegir.curso[grupo_es];
	tiempo = tiempo1;
	comienzo = comienzo1;
	meses = grupo.mes;
	var precioHoras = grupo.precioHoras;
	var horasSemana = grupo.horasSemana;

	calcdescuento (tiempo, grupo_es);

	precioDescuento = precioHoras*descuento;
	
	console.log(precioDescuento+" euros por hora con descuento");
	console.log(precioHoras + "e/h x " + horasSemana + "h/smn x " + descuento + "% descuento x " + tiempo + "semanas");

	precioTotal = Math.round(precioHoras*horasSemana*descuento*tiempo*100)/100; 

	console.log(precioTotal+" euros en total por "+tiempo+" semanas en "+grupo.nombre);
	
	//resumen_elige(tiempo, curso, comienzo);
	resumen_compra();

	meses=1;
}





