function fun1() {
	var rng=document.getElementById('r1');
	// далее мы создаем переменную с параграфом, которая будет получать значение для нашего параграфа
	var i1=document.getElementById('i1');
	// подгружаем данные в параграф
	i1.value=rng.value;
}