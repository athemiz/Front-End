var t0 = new Task(1, 9, 2018, 13, 10, 1, 9, 2018, 15, 10, "Caminhar", "Lazer");
var t1 = new Task(3, 9, 2018, 13, 10, 7, 11, 2018, 15, 10, "Caminhar", "Lazer");
var t2 = new Task(20, 9, 2018, 13, 10, 20, 9, 2018, 15, 10, "Projeto", "Trabalhar");
var t3 = new Task(20, 7, 2018, 13, 10, 20, 9, 2018, 15, 10, "Malhar", "Exercitar");
var t4 = new Task(20, 9, 2018, 13, 10, 20, 9, 2018, 15, 10, "Estudar", "Estudar");
var t5 = new Task(3, 9, 2018, 13, 10, 7, 11, 2018, 15, 10, "Correr", "Exercitar");

function mesAtual(){
	currentMonth();
	loadTaskMonth(t1);
	loadTaskMonth(t2);
	loadTaskMonth(t3);
	loadTaskMonth(t4);
	loadTaskMonth(t2);
	loadTaskMonth(t4);
	loadTaskMonth(t2);
	loadTaskMonth(t4);
	loadTaskMonth(t5);
}

function proximoMes(){
	nextMonth();
	loadTaskMonth(t0);
	loadTaskMonth(t1);
	loadTaskMonth(t2);
	loadTaskMonth(t3);
	loadTaskMonth(t4);
	loadTaskMonth(t2);
	loadTaskMonth(t4);
	loadTaskMonth(t2);
	loadTaskMonth(t4);
	loadTaskMonth(t5);
}

function anteriorMes(){
	previousMonth();
	loadTaskMonth(t0);
	loadTaskMonth(t1);
	loadTaskMonth(t2);
	loadTaskMonth(t3);
	loadTaskMonth(t4);
	loadTaskMonth(t2);
	loadTaskMonth(t4);
	loadTaskMonth(t2);
	loadTaskMonth(t4);
	loadTaskMonth(t5);
}

function primeiraSemana(){
	firstWeek();
	loadTaskWeek(t0);
	loadTaskWeek(t1);
	loadTaskWeek(t2);
	loadTaskWeek(t3);
	loadTaskWeek(t4);
	loadTaskWeek(t2);
	loadTaskWeek(t4);
	loadTaskWeek(t2);
	loadTaskWeek(t4);
	loadTaskWeek(t5);
}

function proximaSemana(){
	nextWeek();
	loadTaskWeek(t0);
	loadTaskWeek(t1);
	loadTaskWeek(t2);
	loadTaskWeek(t3);
	loadTaskWeek(t4);
	loadTaskWeek(t2);
	loadTaskWeek(t4);
	loadTaskWeek(t2);
	loadTaskWeek(t4);
	loadTaskWeek(t5);
}

function anteriorSemana(){
	previousWeek();
	loadTaskWeek(t0);
	loadTaskWeek(t1);
	loadTaskWeek(t2);
	loadTaskWeek(t3);
	loadTaskWeek(t4);
	loadTaskWeek(t2);
	loadTaskWeek(t4);
	loadTaskWeek(t2);
	loadTaskWeek(t4);
	loadTaskWeek(t5);
}

mesAtual();