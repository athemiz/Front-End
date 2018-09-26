var date = new Date();
var firstDay;
var lastDay; 
var day;
var month;
var end;
var year;
var pulos;
var contador = 1;
var i;

//alert(firstDay);

function currentMonth(){
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];
	pulos = day=="Sun" ? 0 : ( day=="Mon" ? 1 : ( day=="Tue" ? 2 : ( day=="Wed" ? 3 : ( day=="Thu" ? 4 : ( day=="Fri" ? 5 : ( day=="Sat" ? 6 : 7 ) ) ) ) ) );

	document.getElementById("calendar").innerHTML="";

	for(i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto teste3'></div>";
	}

	for(i=1; i<=35-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto teste3'>"+i+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto teste3'></div>";
	}
}

function nextMonth(){
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1 + contador, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];
	pulos = day=="Sun" ? 0 : ( day=="Mon" ? 1 : ( day=="Tue" ? 2 : ( day=="Wed" ? 3 : ( day=="Thu" ? 4 : ( day=="Fri" ? 5 : ( day=="Sat" ? 6 : 7 ) ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;


	for(i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto teste3'></div>";
	}

	for(i=1; i<=35-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto teste3'>"+i+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto teste3'></div>";
	}

	contador++;
}

function previousMonth(){
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1 + contador - 2, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];
	pulos = day=="Sun" ? 0 : ( day=="Mon" ? 1 : ( day=="Tue" ? 2 : ( day=="Wed" ? 3 : ( day=="Thu" ? 4 : ( day=="Fri" ? 5 : ( day=="Sat" ? 6 : 7 ) ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );
	
	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	for(i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto teste3'></div>";
	}

	for(i=1; i<=35-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto teste3'>"+i+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto teste3'></div>";
	}

	contador--;
}

currentMonth();