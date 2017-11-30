for(var i=0;i<10;i++){
	document.write(i);
}
while (true){
	document.write('Hello World');
	proceed=prompt('Do you wish to continue?');
	if(proceed=='no')break;
	else if(proceed=='yes');
}

var i = 0;
do{
	document.write(++i)
	proceed=prompt('Do you wish to continue?')=='yes'?true:false;
}while(proceed==true)