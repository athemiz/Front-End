var t1 = new Task(3, 9, 2018, 13, 10, 7, 11, 2018, 15, 10, "Caminhar", "Lazer");
var t2 = new Task(20, 9, 2018, 13, 10, 7, 15, 2018, 15, 10, "Trabalhar", "Trabalhar");

function mesAtual(){
	currentMonth();
	loadTaskMonth(t1);
	loadTaskMonth(t2);
}

function proximoMes(){
	nextMonth();
	loadTaskMonth(t1);
	loadTaskMonth(t2);
}

function anteriorMes(){
	previousMonth();
	loadTaskMonth(t1);
	loadTaskMonth(t2);
}

function primeiraSemana(){
	firstWeek();
}

function proximaSemana(){
	nextWeek();
}

function anteriorSemana(){
	previousWeek();
}

mesAtual();