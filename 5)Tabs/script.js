// Для начала отределяем глоабальные переменные tab и tab content
var tab;
var tabContent; // в этих переменных будут содержаться элементы массива объектов с соответствующими классами

window.onload = function () {
	tabContent = document.getElementsByClassName('tabContent');
	tab=document.getElementsByClassName('tab');
	hideTabsContent(1);
}
function hideTabsContent(a) {
	for (var i=a; i<tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('whiteborder');
	}
}


/*
Данная функция отслеживает все клики мышью, которые происходят внутри области имеющей id = "tabs"
Далее проверяется элемент на который был клик. Если данные элемент имеет class="tab", то запускается цикл назначение которого
выяснить индекс элемента, на который совершили клик мышью в массиве tab. Очевидно, что данный порядковый номер можно использовать
для того, чтобы отобразить нужный элемент tabcontent, как только необходимый элемент найден цикл запустит функцию showTabContent
и будет остановлен с помощью breake;


 */
document.getElementsById('tabs').onclick=function (event) {
	var target=event.target;
	if (target.className=='tab') {
		for (var i; i<tav.length; i++) {
			if (target == tab[i]) {
				showTabsContent(i);
				break;
			}
		}
	}
}

/*
В первой строке мы проверяем наличие блока по которой мы совершили клик класса hide, при наличии данного класса вызывается
функция hideTabsContent, которая скрывает все блоки вкладок, затем активной вкладке добавляет класс whiteborder, также 
удаляется класс hide и добавляется класс show

*/

function showTabsContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		hideTabsContent(0);
		tab[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');

	}
}