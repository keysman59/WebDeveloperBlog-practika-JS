// Более подробно анимацию можно изучить в разделе "https://learn.javascript.ru/js-animation"!!!

function myMove() {
	var elem = document.getElementById("myAnimation");
	var pos = 0;
	var id = setInterval(frame,10); // 1 аргумент фукнации сетинтервал это функция или строка для выполнения кода, 
								   //а 2 это интервал в мили сек.
	function frame() {
		if (pos == 350) { // 350 потому что наш квардар тоже занимает 50 px
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}