const buttonTag = document.getElementById('button-lucky');
buttonTag.addEventListener('click', buttonClick);

function buttonClick (){
	//console.log('button clicked');
	const n1 = Math.floor(Math.random() * 100);
	const n2 = Math.floor(Math.random() * 100);
	const messageTag = document.getElementById('message');
	messageTag.innerHTML = 'Your lucky numbers are '
		+ n1 + ' and ' + n2 + '.';
}
