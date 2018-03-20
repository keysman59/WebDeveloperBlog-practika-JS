function fun1() {
	var rng=document.getElementById('r1');
	// далее мы создаем переменную с параграфом, которая будет получать значение для нашего параграфа
	var p=document.getElementById('one');
	// подгружаем данные в параграф
	p.innerHTML=rng.value;
}