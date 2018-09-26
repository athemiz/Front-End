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

var weekday;

//alert(firstDay);

function currentMonth(){
	firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	fday = firstDay.toString().split(" ")[0];
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];
	pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5 : ( fday=="Sat" ? 6 : 7 ) ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("btn2").onclick = nextMonth;
	document.getElementById("btn1").innerHTML="Mensal";
	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	document.getElementsByClassName("vazio")[0].classList.remove("vazio-semana");
	document.getElementsByClassName("dias")[0].classList.remove("dias-semana");
	document.getElementsByClassName("dias")[0].classList.add("dias-mes");
	var obj = document.getElementsByClassName("dia");

	for (i=0; i<7; i++) {
		obj[i].classList.add('dia-mes');
		obj[i].classList.remove('dia-semana');
	}

	for(i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	for(i=1; i<=42-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'>"+i+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}
}

function nextMonth(){
	firstDay = new Date(date.getFullYear(), date.getMonth() + contador, 1);
	fday = firstDay.toString().split(" ")[0];
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1 + contador, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];
	pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5 : ( fday=="Sat" ? 6 : 7 ) ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	var obj = document.getElementsByClassName("dia");

	for (i=0; i<7; i++) {
		obj[i].classList.add('dia-mes');
	}

	for(i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	for(i=1; i<=42-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'>"+i+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	contador++;
}

function previousMonth(){
	firstDay = new Date(date.getFullYear(), date.getMonth() + contador - 2, 1);
	fday = firstDay.toString().split(" ")[0];
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1 + contador - 2, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];
	pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5 : ( fday=="Sat" ? 6 : 7 ) ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );
	
	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	var obj = document.getElementsByClassName("dia");

	for (i=0; i<7; i++) {
		obj[i].classList.add('dia-mes');
	}

	for(i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	for(i=1; i<=42-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'>"+i+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	contador--;
}

function firstWeek(){
	firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	fday = firstDay.toString().split(" ")[0];
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];
	pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5 : ( fday=="Sat" ? 6 : 7 ) ) ) ) ) );


	document.getElementById("btn2").onclick = nextWeek;
	document.getElementById("btn1").innerHTML="Semanal";
	document.getElementById("calendar").innerHTML="";
	document.getElementsByClassName("dias")[0].classList.remove("dias-mes");
	document.getElementsByClassName("dias")[0].classList.add("dias-semana");
	document.getElementsByClassName("vazio")[0].classList.add("vazio-semana");
	var obj = document.getElementsByClassName("dia");

	for (i=0; i<obj.length; i++) {
		obj[i].classList.add('dia-semana');
		obj[i].classList.remove('dia-mes');
	}


	document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='border-style:none'></div>";

	for(i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
	}

	for(i=1; i<=7-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+i+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
	}

	weekday=7-pulos;

	for(i=0; i<200; i++){
		if(i<80){
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+"0"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
		else{
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}
}

function nextWeek(){
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];

	document.getElementById("btn1").innerHTML="Semanal";
	document.getElementById("calendar").innerHTML="";
	document.getElementsByClassName("dias")[0].classList.remove("dias-mes");
	document.getElementsByClassName("dias")[0].classList.add("dias-semana");
	document.getElementsByClassName("vazio")[0].classList.add("vazio-semana");
	var obj = document.getElementsByClassName("dia");

	for (i=0; i<obj.length; i++) {
		obj[i].classList.add('dia-semana');
		obj[i].classList.remove('dia-mes');
	}


	document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='border-style:none'></div>";

	for(i=weekday+1; i<weekday+8; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+i+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
	}
	weekday+=7;

	for(i=0; i<200; i++){
		if(i<80){
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+"0"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
		else{
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}
}

firstWeek();
//currentMonth();