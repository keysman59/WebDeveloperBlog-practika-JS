
// Функция, которая будет срабатывать при нажатии fun1
function fun1() {
	var chbox;
	chbox = document.getElementById('one');

	// Проверка элемента осуществляется проверкой состояния элемента, т.е элемент checked
	// Данная запись возвращает значение true, если элемент отмечен галочкой, а false, если не активен. 
	//Соответственно данную запись можно использовать при проверке условия. 

	if (chbox.checked) {
		alert('Выбран');
	} else {
		alert('Не выбран');
	}
}