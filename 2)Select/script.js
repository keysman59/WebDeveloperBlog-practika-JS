// Код проверки выбранной опции:
// 1. Мы должны получить элемент по идентификатору
// 2. Затем проверим его свойста selected index

// 4 минута
function fun1() {
	var sel = document.getElementById('mySelect').selectedIndex;
	var options= document.getElementById('mySelect').options;
	alert("Выбрана опция " +options[sel].text);
}

// рассматриваем ползунок range
