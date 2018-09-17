/* 반복문 for
for : 반복 횟수가 정해진 경우 사용한다 
while : 무한 반복하는 경우 사용한다 
단일 for 문
for(초깃값; 조건식; 증감){
	실행구문;
}
for(var i=0; i<10; i++){                // for(var i=1; i<=10; i++){
	document.write((i+1)+"<br>");  //    document.write(i + "<br>");
} 												}	

다중 for 문
for(초깃값; 조건식; 증감){
	실행구문;
	.....
	for(초깃값; 조건문; 증감){
		실행구문;
		.....
	}
}

var result = "";
for(var i = 1; i <= 10; i++){
	result += "*";
}
document.write("result = " + result);

https://github.com/heendokhuman/humanshia.git
https://github.com/heendokhuman/javascript.git

*/