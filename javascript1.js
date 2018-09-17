// 변수, 연산자, 함수와 클래스, 형변환, Jquery, 조건문 if, switch, 반복문 for, while 자바스크립트 core 문법
// 변수: 데이터를 읽고 쓰고 보관하는 장소 var 변수이름 = 저장 데이터(값); 상수는 대문자 그 이외는 소문자 
// 전역변수: 어디서든 접근해서 사용 가능한 데이터를 담는 변수
// 지역변수: 특정 영역에서만 사용 가능 함수 내부에 만들어지는 변수
// 매개변수(파라미터): 함수 외부에서 함수 내부로 데이터를 전달하기 위한 용도로 사용하는 변수
// 멤버변수(프로퍼티): 클래스 내부에서 만들어지며 주로 객체에서 사용하는 정보를 담는 변수  

var age = 55, name = "heendok";


// var 변수이름 = data; (Number, String, Boolean, Function, Class, Class Instance, undefined, null 변수에 저장할 수 있는
// 데이터 종류는 8가지 정도된다 undefined는 변수는 선언했지만 값이 아직 할당되지 않은 상태)
// 함수(function) function showMenu(){} var func = showMenu;
// 클래스(function) function MyClass(){} var myClass = MyClass; 
// 객체(object) function MyClass(){} var myClass = new MyClass();
// undefined가 저장되어 있다면 변수를 만든 후 초기화하지 않은 상태, 변수 선언 후 값을 대입하지 않는 경우, 함수 인자값 없이 함수를 호출할 경우
// 존재하지 않는 객체의 프로퍼티에 접근하는 경우
// null : 아무것도 참조하지 않고 있다라는 의미 주로 객체를 담을 변수를 초기화할 때 많이 사용 
/* var data1 = 0; 숫자 변수 초기화 var data2 = " "; 문자 변수 초기화 var data3 = false; 논리형 변수 초기화 var data4 = null; 객체 변수 초기화 1
var data4 = null;
.......
data4 = new MyClass();
undefined는 변수의 기본 초기값이며 null은 객체를 담을 변수를 초기화 할 때 사용하는 값이다  */
/* var a = data; 	var b = a; 변수 b에 변수 a가 저장되는 것이 아니라 변수 b에 변수 a에 들어있는 값이 복사된다 	var c = a + data + b; 
변수값 변경: var를 붙이지 않은 상태에서 변수에 값을 대입해주면 된다 var 변수이름 = data; 변수이름 = 신규데이터1;  변수이름 = 신규데이터2;  
var data1 = 19; data1 = 20; data1 = 30;
변수값이 자동으로 읽혀지는 경우
1. 우측에 변수를 두는 경우(변수에 들어있는 값이 읽혀 다른 변수에 대입하는 경우) 데이터 중 숫자, 문자, 논리 데이터만이 복사되며 배열, 함수, 객체
데이터 등은 실제 데이터가 들어있는 주소가 복사된다 var name = "Uijungbu"; var temp = name; name변수에 들어 있는 값이 복사돼 temp 변수에 대입된다 
2. 함수 호출 시 변수를 매개변수(파라미터)값으로 사용하는 경우 
function test1(userName){
	alert("userName =" + userName);
}
var name = "Uijungbu";
test1(name);
3. 연산자와 함께 사용하는 경우 var num1 = 10; var num2 = 20; var result = num1 + num2; alert(result);
document.write() method는 Web Page에 HTML Tag를 출력해 주는 기능을 한다 변수는 데이터보관, 코드 내용 변경, 중복되느 데이터가 있는 경우 해결하기 위함
변수 내부에 어떤 값이 저장돼 있는지 확인 방법
1. alert(data); 특정 정보를 사용자에게 메시지 창으로 알려준다 
2. document.write(data[, data.....]); document 객체에서 제공하는 write()기능은 HTML 문서의 body 영역에 <div>와 같은 Tag내용을 출력해 준다 
객체는 수많은 기능이 포장돼 있는 상자이다 document.write("name=",name, "age=", age); document.write("name=" +name+ "age=" +age+"<br>");
3. console.log(data[,data.....]) 전문 디버깅 도구이다  

array(배열):  기본: var 변수이름 = [data[, data2,......]];   var 변수이름 = new arr(data[.....]); 
var userName = ["korea", "japan", "china", "vietnam", "indoneshia"];
for (var i = 0; i < userName.length; i++)
document.write("userName["+i+"] =" + userName[i], <br>);
배열을 반복문과 함께사용하면 능력이 더 뛰어나 진다 
변수의 종류
1. 전역변수: 모든 곳에서 사용하는 데이터를 담는 변수 어디서든 접근해서 사용가능 
<script>
	var globalV = '전역변수';   // 이 위치의 변수는 모두 전역변수이다 
	window.onload = function(){
		global2 = "전역변수";  // 함수 내부에 var 없이 변수에 값을 대입하면 전역변수로 만들어진다 global2="전역변수";는 window.global2="전역변수"와 같다 
	}
비교) function func1(){
			var local1 = "지역변수";  // var 지역변수가된다 
	}
</script>
2. 지역변수: 특정 영역에서만 사용 가능 주로 함수 내부에 만들어지는 변수이다 
<script>
	var globalV = "전역변수";
	window.onload = function(){
		var local1 = "지역변수"; 오직 onload() 함수 영역에서만 사용가능 
	};
	function func1(){
		var local1 = "지역변수"; local1은 func1()에서만 사용 가능 
	};
	function func2(){
		document.write(globalV);
	};
</script>
3. 매개변수: parameter라고한다 주로 함수 외부에서 함수 내부로 데이터를 전달 할 때 사용한다 매개변수는 지역변수와 마찬가지로 함수 내부에서만 사용 가능 
var를 사용하지 않고 변수를 만든다 
<script>
	var globalV = "전역변수";
	window.onload= function(){
		var local1 = "지역변수";
		func1(100, 200);
	};
	function func1(num1, num2){ //num1, num2가 매개변수
		var local1 = "지역변수";
		document.write("매개변수 num1="+num1+", num2="num2);
	};
</script>
4. 멤버변수: 클래스에서 만들어지고 사용된다 
<script>
	function MyClass(){
		this.name = "멤버변수";  //name이 멤버변수이다 이 변수는 MyClass라는 클래스에서 만들어지고 사용된다 그래서 멤버변수라한다 
	};
	MyClass.prototype.showName=function(){ //멤버함수 또는 메서드라한다 
		document.write("name = ", this.name);
	};
	var objClass = new MyClass();
	objClass.showName();
</script>

문자열 연산자 	+
복합 연산자 	+=, -=, /=, %=
증감 연산자 	++, --
조건 연산자 	==, >, <, !, >=, <=, !=, ===
논리 연산자 	&&, ||
접근 연산자 	.
나머지 연산자를 이용해 숫자 7이 홀수인지 짝수인지 나타내시오 
var result = 7%2
if(result === 0)
	alert("짝수");
else
	alert("홀수");
	
무언가를 반복하기 위해 사용하는 for문 
구문 중복을 없애기 위해 사용하는 함수 
연산자를 비교적 짧게 표현하는 클래스 등이 사용하는 문법이 복합 연산자이다 

복합연산자 a=a+10을 간결하게 표현 
var a = 5;               var a = 5;
a+= 10; 					a=a+10;
document.write("a= " + a);
증감연산자 하나의 변수에 숫자하나를 더하거나 빼는 구문을 간편하게 표현 
a=a+1을 a++ 또는 ++a로 표현 var a=10; a=a+1; 과 같음 a++;
전위 연산자 ++변수,  후위 연산자 변수++
var a = 0; 			var a = 0;
++a; 					a++;
alert("a="+a); 		alert("a=" +a);
위의 내용은 둘 다 같다 그러나 다음에 오는 차이점(전위연산자와후위연산자를 사용한 결과값을 다른 변수에 대입하는 경우)은 다른 결과를 난타낸다 
var a = 1;
var b = ++a;
정답은 a=2, b=2이다 이유는 자바스크립트 엔진이 해석 전 내용을  해석 후 내용으로 변형해 해석하기 때문
해석 전 
var a = 1;
var b = ++a;
해석 후 
var a = 1;
a = a+1;
var b = a;
즉 전위 연산자를 사용하는 변수는 자기 자신을 먼저 증가시키기 때문에 a와 b가 같은 값이 된다 

var a = 1;
var b = a++;
정답은 a=2, b=1이다 이유는 자바스크립트 엔진이 해석 전 내용을  해석 후 내용으로 변형해 해석하기 때문
해석 전 
var a = 1;
var b = a++;
해석 후 
var a = 1;
var b = a;
a = a+1;
즉 후위 연산자를 사용하는 변수는 값을 먼저 좌측 변수에 넘겨준 후 자기 자신을  증가시키기 때문에 a와 b가 다른 값이 된다(후위 연산자를 더 많이 사용한다) 
연산자 우선 순위 
(). []  													괄호, 대괄호
!,~,++,--  우 -> 좌로 계산 						부정, 증감연산자 
*,/,% 							
+,-
<<,>>,>>> 										비트 단위의 시프트 연산자 
<,<=,>,>= 											관계연산자 
==,!==
&  													비트 단위의 논리곱 연산자 
^ 														비트 단위의 논리 부정 연산자 
| 														비트 단위의 논리합 연산자 
&& 													논리 곱 연산자 
|| 														논리 합 연산자 
?:         우 -> 좌로 계산  						조건부 연산자 
=,+=,-=,*=,/=,%=,<<=,>>=,&=,^=,~= 		대입, 할당 연산자 
대부분의 프로그램은 괄호를 이용한다 var result = 12+58-(10*8);

함수: 특정 기능을 하는 구문을 독립된 부품으로 만들어 언제든지 필요로 할 때 사용하는 기능 

함수이름             매개변수(함수에 따라 있을 수도 없을 수도 있음)
		여러개의 변수+연산자+형변환+조건문+반복문을 활용해 
		만들어진특정 기능을 하는 구문(알고리즘)
리턴값(리턴값 역시 함수에 따라 있을 수도 없을 수도 있음)

함수 사용 
먼저 특정 기능을 하는 코드 구문을 담을 빈 함수를 만든다
function print99dan(){
	이곳에 특정 기능을 하는 구문이 위치한다 
} 
다음으로 특정 구구단을 출력하는 구문(알고리즘)을 함수 내부에 작성한다 
function print99dan(dan){
	document.write(dan+" * 1 = " +(dan*1), "<br>");
	document.write(dan+" * 2 = " +(dan*2), "<br>");
					.....
}
다음으로 함수 호출을 한다
print99dan(3);
print9dan(7); 
함수 호출은?
alert()
document.write()
console.log()
함수가 호출되어 실행되기 시작하면 함수 내부는 함수 외부에서 접근할 수 없게 된다 
				<script>   																				
	<script>			function 함수A(매개변수){
	Tag로 감싸져   	여러개의 변수+연산자+형변환+조건문+반복문을 활용해 
	있는 부분이 		만들어진특정 기능을 하는 구문(알고리즘)				 
	함수외부				[rerurn 값;]
	</script>		}			
				</script>
이때 함수 외부에서 내부로 값을 전달하는 방법이 딱 하나 있는데 바로 매개변수를 이용하는 것이다 일종의 외부 데이터를 함수 내부로 전달하는 매개체 역할을 하는 변수이다 
함수호출 -> 함수A(data); ->매개변수 
[return 값;]   => 함수 내부 정보를 함수 외부로 보내고 싶다면 리턴을 이용한다 
function sum(a, b){
	var result a+b;
	return result;
}
var data = sum(10, 20);   => 최종적으로 함수 호출 결과가 우측에 오는 것과 같게 된다 var data = 30; 
함수의 종류: 1. 자바스크립트 코어함수(라이브러리)  2. 사용자 정의함수

클래스란 연관있는 변수와 함수를 하나로 묶을 때 사용하는 문법이다 

함수 : 함수는 특정 기능을 하는 구문을 재사용하기 위해 사용하는 문법   		클래스 : 클래스는 연관있는 변수와 함수를 그룹짓거나 재사용하기 위해 사용하는 문법 
 
 	특정 기능을 하는 알고리즘 또는 구문  															함수,함수, 함수, 함수, 함수, 함수, 함수, 함수,.....

TabPanel Class
var 선택된 탭메뉴 항목; 
var 오버된 탭메뉴 항목;
var 전체 탭메뉴 목록;
var 천체 탭 패널 목록;
function 탭 메뉴 선택 처리 기능(){
	
}
function 탭 메뉴 오버 처리 기능(){
	
}
function 탭 패널 활성화 기능(){
	
}
함수 방식을 이용한 클래스 
function Calculator(){
	this.add = function(a, b){
		alert('두 수의 합은 ' +(a+b)+ "입니다.");
	}
	this.sub = function(a, b){
		alert('두 수의 차는 ' +(a-b)+ "입니다.");
	}
	this.mul = function(a, b){
		alert('두 수의 곱은 ' +(a*b)+ "입니다.");
	}
	this.div = function(a, b){
		alert('두 수의 나눈 값은 ' +(a/b)+ "입니다.");
	}
}

함수를 사용하기 위해 함수 호출을 해줘야 하듯 클래스를 사용하려면 인스턴스라는 것을 생성해야 한다 이때 new라는 키워드를 사용한다 
var tabMenu = new TabMenu();
new를 이용해 인스턴스를 만드는 구문을 만든다 다른 말로는 객체라한다 
일반 변수, 함수를 클래스 내부에 들어 있는 변수, 함수와 구분하기 위해 클래스 내부에 있는 변수를 프로퍼티라고 부르며 함수를 메서드라한다 

클래스 
	var 변수 = 값;  // 클래스 내부에 만드는 변수를 프로퍼티 또는 멤버변수라 부른다

클래스
function 함수(){
	.......               // 클래스 내부에 만드는 함수를 메서드 또는 멤버함수라 한다 
}    

클래스 내부에 들어 있는 함수(메서드)를 호출하는 방법 
함수와 마찬가지로 클래스 역시 클래스 외부에서 클래스 내부의 변수(프로퍼티)와 함수(메서드)를 마음대로 접근할 수 없다 
<script>
	클래스 
	var 프로퍼티1 = 값;
	var 프로퍼티2 = 값;
	function 메서드1(){
		// 기능
	}
</script>	
객체 외부에서 객체 내부에 들어 있는 프로퍼티와 메서드에 접근하는 방법은 오직 하나 접근 연산자인 점(.)을 사용한다 
인스턴스.프로퍼티 
인스턴스.메서드()

function Calculator(){
	this.add = function(a, b){
		alert("두 수의 합은 " +(a+b)+ "입니다.");
	}
	this.sub = function(a, b){
		alert("두 수의 차는 " +(a-b)+ "입니다.");
	}
	this.mul = function(a, b){
		alert("두 수의 곱은 " +(a*b)+ "입니다.");
	}
	this.div = function(a, b){
		alert("두 수의 나눈 값은 " +(a/b)+ "입니다.");
	}
} 

클래스 내부를 살펴보면 총 4개의 사칙연산 함수가 포장돼 있다 add() 함수를 사용하고 싶다면 다음과 같은 순서를 거친다 
1. 인스턴스 만들기 
계산기에 들어 있는 함수를 사용하려면  new라는 키워드를 이용해 게산기 클래스의 인스턴스를 만들어야 한다 
var cal1 = new Calculator();
2. 접근 연산자를 이용한 함수(메서드) 호출
접근 연산자를 이용해 원하는 기능인 add()함수에 접근해서 호출해 줍니다 
var cal1 = new Calculator();
cal1.add(10, 40);

document.write();  .(점)앞에 영단어가 있고 점 뒤에 함수 호출을 의미하는 괄호가 있는 것을 보니 .(점)이 접근 연산자 입니다 
document는 객체이고 이 안에는 수 많은 기능(함수)이 있습니다 이 중에서 write()라는 함수를 호출합니다 
영단어조합 + .(점) + 함수 이름();

형변환: 숫자를 문자로 변환한다거나 또는 문자를 숫자로 변환하는 작업을 말한다   
var 변수 = window.prompt("입력 메시지 박스에 출력할 메시지", "기본 입력값");
var age = window.prompt('나이를 입력해 주세요");
age = age + 50;
alert("결과값은 = ", + age);
위의 age 변수에는 문작 입력된다 이러때 형변환은?
var age = window.prompt("나이를 입력해 주세요?");
age = parseInt(age) + 30;
alert("결과값은= " + age);
형변환 		변경주체 				변경방식
암시적 		자바스크립트 엔진 	자동
명시적  		개발자 					수동
var result = 2 + true;
alert(result);  // result = 3 true는 1이다 
명시적 형변환 
1. 문자를 숫자로 형변환하는 방법 
변환 결과 	사용 함수 		예
정수형 		parseInt() 		var value = "123.56"; parseInt(value);   // 결과 124
				Number() 		var value = "123"; Number(value);   // 결과 123 
실수형 		parseFloat()		var value = "123.456";  parseFloat(value);  // 결과 123.456
				Number 			var value = "123.456"; Number(value);  // 결과 123.456
2. 숫자를 문자로 현변환하는 방법
일반문자형  String 			var value = 15;  String(value);   // 결과 "15"
16진수문자형  Number.toString()  var value = 15;  value.toString(16);   // 결과 "f"
실수문자형 	Number.toFixed() 	var value = 123.456;  value.toFixed(2);   // 결과 123.46 반올림됨

var test1 = 12;
var result = test1.toString(16);
document.write("result = " + result);
위의 예는 HTML 요소의 스타일 속성 중 배경색 등과 같은 색 속성을 변경할 때 주로 사용한다 
배경색을 빨간색으로 
<script>
	$(document).ready(function(){
		var bgColor = 0xF00;
		$("body").css("background-color", "#" + bgColor.toString(16));
	})
</script>

1초마다 한 번씩 배경색을 랜덤하게 변경해 주세요
$(document).ready(function(){
	setInterval(function(){
	var color = Math.random()* 0xffffff;  // 0 ~ ffffff 사이의 랜덤 색 만들기 결과는 10진수 실수
	color = parseInt(color);
	color = color.toString(16);
	$("body").css("background-color", "#" + color); 
	}, 1000);
});

*/
