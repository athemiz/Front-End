var date = new Date();
var firstDay;
var lastDay; 
var day;
var month;
var end;
var year;
var pulos;
var contador;
var i;
var weekday;
var twiceNext=false;
var twicePrevious=false;

//alert(firstDay);

function currentMonth(){
	firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	fday = firstDay.toString().split(" ")[0];
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];

	contador = 1;
	pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("btn1").innerHTML="Mensal";
	document.getElementById("btn2").onclick = nextMonth;
	document.getElementById("btn4").onclick = previousMonth;
	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	document.getElementsByClassName("vazio")[0].classList.remove("vazio-semana");
	document.getElementsByClassName("dias")[0].classList.remove("dias-semana");
	document.getElementsByClassName("dias")[0].classList.add("dias-mes");

	var obj = document.getElementsByClassName("dia");
	for (i=0; i<obj.length; i++) {
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
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];

	pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	var obj = document.getElementsByClassName("dia");
	for (i=0; i<obj.length; i++) {
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
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];

	pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );
	
	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	var obj = document.getElementsByClassName("dia");
	for (i=0; i<obj.length; i++) {
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
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];

	contador = 0;
	pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;
	document.getElementById("btn2").onclick = nextWeek;
	document.getElementById("btn4").onclick = previousWeek;
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
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+"0"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
		else{
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}
}

function nextWeek(){
	firstDay = new Date(date.getFullYear(), date.getMonth() + contador, 1);
	fday = firstDay.toString().split(" ")[0];
	lastDay = new Date(date.getFullYear(), date.getMonth() + contador +1, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];

	var reset=false;
	pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;
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

	if(weekday==0){
		reset=true;
		for(i=0; i<pulos; i++){
			document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}

		for(i=weekday+1; i<weekday+8-pulos; i++){
			if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+i+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}
	else{
		for(i=weekday+1; i<weekday+8; i++){
			if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+i+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}

	if(reset) weekday+=(7-pulos);
	else weekday+=7;

	if(weekday>=end){
		weekday=0;
		contador++;
	}

	for(i=0; i<200; i++){
		if(i<80){
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+"0"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
		else{
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}

	if(twiceNext){
		twiceNext=false;
		nextWeek();
	}
	twicePrevious=true;
}

function previousWeek(){
	firstDay = new Date(date.getFullYear(), date.getMonth() + contador, 1);
	lastDay = new Date(date.getFullYear(), date.getMonth() + contador + 1, 0);
	day = lastDay.toString().split(" ")[0];
	month = lastDay.toString().split(" ")[1];
	end = lastDay.toString().split(" ")[2];
	year = lastDay.toString().split(" ")[3];

	var reset=false;
	pulos = day=="Sun" ? 6 : ( day=="Mon" ? 5 : ( day=="Tue" ? 4: ( day=="Wed" ? 3 : ( day=="Thu" ? 2 : ( day=="Fri" ? 1 : 0 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;
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

	if(weekday<=0){
		contador--;
		lastDay = new Date(date.getFullYear(), date.getMonth() + contador +1, 0);
		day = lastDay.toString().split(" ")[0];
		month = lastDay.toString().split(" ")[1];
		end = lastDay.toString().split(" ")[2];
		year = lastDay.toString().split(" ")[3];

		reset=true;
		pulos = day=="Sun" ? 6 : ( day=="Mon" ? 5 : ( day=="Tue" ? 4: ( day=="Wed" ? 3 : ( day=="Thu" ? 2 : ( day=="Fri" ? 1 : 0 ) ) ) ) );
		mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );
		weekday=end;
		
		document.getElementById("mes").innerHTML=mes;
		document.getElementById("ano").innerHTML=year;
	}

	if(weekday==end){
		for(i=weekday-(7-pulos)+1; i<=weekday; i++){
			document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+i+"</div>";
		}

		for(i=0; i<pulos; i++){
			document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}

	else{
		for(i=weekday-6; i<=weekday; i++){
			if(i<=end && i>0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'>"+i+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}


	for(i=0; i<200; i++){
		if(i<80){
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+"0"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}

		else{
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+i/8+":00"+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}

	if(reset) weekday-=(7-pulos);
	else{
		weekday-=7;
		reset=false;
	}

	if(twicePrevious){
		twicePrevious=false;
		previousWeek();
	}
	twiceNext=true;
}

currentMonth();