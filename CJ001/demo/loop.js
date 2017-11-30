for (var i = 0; i < 10; i++){
	document.write(i);
}

while (true){
	document.write('Hello World');
	proceed = prompt ('Do you wish to coontinue');
	if (proceed == 'yes') break;
}

var i = 0;
do{
	document.write(++i);
	proceed = prompt('Do you wish to coontinue?') == 'yes' ? true : false;
} while (proceed == true);