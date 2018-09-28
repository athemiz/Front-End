var date = new Date();
var contador;
var weekday;
var twiceNext=false;
var twicePrevious=false;

function currentMonth(){
	var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	var fday = firstDay.toString().split(" ")[0];
	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	var month = lastDay.toString().split(" ")[1];
	var end = lastDay.toString().split(" ")[2];
	var year = lastDay.toString().split(" ")[3];

	contador = 1;
	var pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("btn1").innerHTML="Mensal";
	document.getElementById("btn2").onclick = proximoMes;
	document.getElementById("btn4").onclick = anteriorMes;
	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	document.getElementsByClassName("vazio")[0].classList.remove("vazio-semana");
	document.getElementsByClassName("dias")[0].classList.remove("dias-semana");
	document.getElementsByClassName("dias")[0].classList.add("dias-mes");

	var obj = document.getElementsByClassName("dia");
	for (var i=0; i<obj.length; i++) {
		obj[i].classList.add('dia-mes');
		obj[i].classList.remove('dia-semana');
	}

	for(var i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	for(var i=1; i<=42-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes' id='"+"dia-"+i+"'>"+"<p>"+i+"</p>"+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}
}

function nextMonth(){
	var firstDay = new Date(date.getFullYear(), date.getMonth() + contador, 1);
	var fday = firstDay.toString().split(" ")[0];
	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1 + contador, 0);
	var month = lastDay.toString().split(" ")[1];
	var end = lastDay.toString().split(" ")[2];
	var year = lastDay.toString().split(" ")[3];

	var pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	var obj = document.getElementsByClassName("dia");
	for (var i=0; i<obj.length; i++) {
		obj[i].classList.add('dia-mes');
	}

	for(var i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	for(var i=1; i<=42-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes' id='"+"dia-"+i+"'>"+"<p>"+i+"</p>"+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	contador++;
}

function previousMonth(){
	var firstDay = new Date(date.getFullYear(), date.getMonth() + contador - 2, 1);
	var fday = firstDay.toString().split(" ")[0];
	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1 + contador - 2, 0);
	var month = lastDay.toString().split(" ")[1];
	var end = lastDay.toString().split(" ")[2];
	var year = lastDay.toString().split(" ")[3];

	var pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );
	
	document.getElementById("calendar").innerHTML="";
	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;

	var obj = document.getElementsByClassName("dia");
	for (var i=0; i<obj.length; i++) {
		obj[i].classList.add('dia-mes');
	}

	for(var i=0; i<pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	for(var i=1; i<=42-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes' id='"+"dia-"+i+"'>"+"<p>"+i+"</p>"+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-mes'></div>";
	}

	contador--;
}

function firstWeek(){
	var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	var fday = firstDay.toString().split(" ")[0];
	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	var month = lastDay.toString().split(" ")[1];
	var end = lastDay.toString().split(" ")[2];
	var year = lastDay.toString().split(" ")[3];

	contador = 0;
	var pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;
	document.getElementById("btn2").onclick = proximaSemana;
	document.getElementById("btn4").onclick = anteriorSemana;
	document.getElementById("btn1").innerHTML="Semanal";
	document.getElementById("calendar").innerHTML="";

	document.getElementsByClassName("dias")[0].classList.remove("dias-mes");
	document.getElementsByClassName("dias")[0].classList.add("dias-semana");
	document.getElementsByClassName("vazio")[0].classList.add("vazio-semana");
	
	var obj = document.getElementsByClassName("dia");
	for (var i=0; i<obj.length; i++) {
		obj[i].classList.add('dia-semana');
		obj[i].classList.remove('dia-mes');
	}

	document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='border-style:none'></div>";

	for(var i=1; i<=pulos; i++){
		document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' id=dia-"+i+"></div>";
	}

	for(var i=1; i<=7-pulos; i++){
		if(i<=end) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='justify-content: center;' id=dia-"+(pulos+i)+">"+i+"</div>";
		else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
	}

	weekday=7-pulos;

	for(var i=0; i<200; i++){
		if(i<80){
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+"0"+i/8+":00"+"</div>";
			else if(i%8>pulos) {
				var element=document.getElementById("dia-"+(i%8));
				if(element) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' id='"+element.innerHTML+"-"+parseInt(i/8)+"'></div>";
				else "<div class='col-auto lista-semana'></div>";
			}
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
		else{
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+i/8+":00"+"</div>";
			else if(i%8>pulos) {
				var element=document.getElementById("dia-"+(i%8));
				if(element) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' id='"+element.innerHTML+"-"+parseInt(i/8)+"'></div>";
				else "<div class='col-auto lista-semana'></div>";
			}
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}
}

function nextWeek(){
	var firstDay = new Date(date.getFullYear(), date.getMonth() + contador, 1);
	var fday = firstDay.toString().split(" ")[0];
	var lastDay = new Date(date.getFullYear(), date.getMonth() + contador +1, 0);
	var day = lastDay.toString().split(" ")[0];
	var month = lastDay.toString().split(" ")[1];
	var end = lastDay.toString().split(" ")[2];
	var year = lastDay.toString().split(" ")[3];

	var reset=false;
	var pulos = fday=="Sun" ? 0 : ( fday=="Mon" ? 1 : ( fday=="Tue" ? 2 : ( fday=="Wed" ? 3 : ( fday=="Thu" ? 4 : ( fday=="Fri" ? 5: 6 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;
	document.getElementById("btn1").innerHTML="Semanal";
	document.getElementById("calendar").innerHTML="";

	document.getElementsByClassName("dias")[0].classList.remove("dias-mes");
	document.getElementsByClassName("dias")[0].classList.add("dias-semana");
	document.getElementsByClassName("vazio")[0].classList.add("vazio-semana");

	var obj = document.getElementsByClassName("dia");
	for (var i=0; i<obj.length; i++) {
		obj[i].classList.add('dia-semana');
		obj[i].classList.remove('dia-mes');
	}

	document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='border-style:none'></div>";

	if(weekday==0){
		reset=true;
		for(var i=0; i<pulos; i++){
			document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}

		for(var i=weekday+1; i<weekday+8-pulos; i++){
			if(i<=end && !reset) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='justify-content: center;' id=dia-"+(i-weekday)+">"+i+"</div>";
			else if(i<=end && reset) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='justify-content: center;'  id=dia-"+(pulos+i-weekday)+">"+i+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}
	else{
		for(var i=weekday+1; i<weekday+8; i++){
			if(i<=end && !reset) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='justify-content: center;' id=dia-"+(i-weekday)+">"+i+"</div>";
			else if(i<=end && reset) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='justify-content: center;' id=dia-"+(pulos+i-weekday)+">"+i+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}

	if(reset) weekday+=(7-pulos);
	else weekday+=7;

	if(weekday>=end){
		weekday=0;
		contador++;
	}

	for(var i=0; i<200; i++){
		if(i<80){
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+"0"+i/8+":00"+"</div>";
			else if(i%8>0) {
				var element=document.getElementById("dia-"+(i%8));
				if(element) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' id='"+element.innerHTML+"-"+parseInt(i/8)+"'></div>";
				else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
			}
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
		else{
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+i/8+":00"+"</div>";
			else if(i%8>0) {
				var element=document.getElementById("dia-"+(i%8));
				if(element) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' id='"+element.innerHTML+"-"+parseInt(i/8)+"'></div>";
				else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
			}
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
	var firstDay = new Date(date.getFullYear(), date.getMonth() + contador, 1);
	var lastDay = new Date(date.getFullYear(), date.getMonth() + contador + 1, 0);
	var day = lastDay.toString().split(" ")[0];
	var month = lastDay.toString().split(" ")[1];
	var end = lastDay.toString().split(" ")[2];
	var year = lastDay.toString().split(" ")[3];

	var reset=false;
	var pulos = day=="Sun" ? 6 : ( day=="Mon" ? 5 : ( day=="Tue" ? 4: ( day=="Wed" ? 3 : ( day=="Thu" ? 2 : ( day=="Fri" ? 1 : 0 ) ) ) ) );
	var mes = month=="Jan" ? "Janeiro" : ( month=="Feb" ? "Fevereiro" : ( month=="Mar" ? "Março" : ( month=="Apr" ? "Abril" : ( month=="May" ? "Maio" : ( month=="Jun" ? "Junho" : ( month=="Jul" ? "Julho" : ( month=="Aug" ? "Agosto" : ( month=="Sep" ? "Setembro" : ( month=="Oct" ? "Outubro" : ( month=="Nov" ? "Novembro" : "Dezembro" ) ) ) ) ) ) ) ) ) );

	document.getElementById("mes").innerHTML=mes;
	document.getElementById("ano").innerHTML=year;
	document.getElementById("btn1").innerHTML="Semanal";
	document.getElementById("calendar").innerHTML="";

	document.getElementsByClassName("dias")[0].classList.remove("dias-mes");
	document.getElementsByClassName("dias")[0].classList.add("dias-semana");
	document.getElementsByClassName("vazio")[0].classList.add("vazio-semana");
	
	var obj = document.getElementsByClassName("dia");
	for (var i=0; i<obj.length; i++) {
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
		for(var i=weekday-(7-pulos)+1; i<=weekday; i++){
			document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='justify-content: center;' id=dia-"+(i-(weekday-(7-pulos)))+">"+i+"</div>";
		}

		for(var i=0; i<pulos; i++){
			document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}

	else{
		for(var i=weekday-6; i<=weekday; i++){
			if(i<=end && i>0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='justify-content: center;' id=dia-"+(i+7-weekday)+">"+i+"</div>";
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}
	}

	for(var i=0; i<200; i++){
		if(i<80){
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+"0"+i/8+":00"+"</div>";
			else if(i%8>0) {
				var element=document.getElementById("dia-"+(i%8));
				if(element) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' id='"+element.innerHTML+"-"+parseInt(i/8)+"'></div>";
				else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
			}
			else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
		}

		else{
			if(i%8==0) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' style='color: gray;'>"+i/8+":00"+"</div>";
			else if(i%8>0) {
				var element=document.getElementById("dia-"+(i%8));
				if(element) document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana' id='"+element.innerHTML+"-"+parseInt(i/8)+"'></div>";
				else document.getElementById("calendar").innerHTML+="<div class='col-auto lista-semana'></div>";
			}
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