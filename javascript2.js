/* 초보자를 위한 jQuery
jQuery
	1. DOM 	
		DOM 객체의 필수 프로퍼티와 메서드
		노드 추가, 삭제, 찾기, 이동시키기
		스타일 추가, 수정, 값 구하기
		속성 추가, 수정, 값 구하기
		이벤트 등록, 제거, 발생시키기
		위치, 크기와 관련된 프로퍼티와 메서드
	2. Ajax
		jQuery에서는 더욱 쉽게 Ajax를 사용할 수 있다 XML, CSV, JSON
	3. 플러그인
		필요한 것은 이미 만들어져 있을 것이다 
	4. 효과 
		애니메이션 효과를 아주 쉽고 다양하게 줄 수 있다 

<body>
	<div>
		<p>이 문서는 jQuery를 사용하는 이유를 설명하기 위해 만든 예제이다.</p>
		<p>질문: 스크립트를 이용해 문서에서 #menu2의 li 태그 스타일 속성 중 글자색을 모두 아쿠아색으로 변경해 주세요.</p>
	</div>
	<ul class="menu" id="menu1">
		<li>menu1-1</li>
		<li>menu1-2</li>
		<li>menu1-3</li>
		<li>menu1-4</li>
		<li>menu1-5</li>
		<li>menu1-6</li>
		<li>menu1-7</li>
	</ul>
	<ul class="menu" id="menu2">
		<li>menu2-1</li>
		<li>menu2-2</li>
		<li>menu2-3</li>
		<li>menu2-4</li>
		<li>menu2-5</li>
		<li>menu2-6</li>
		<li>menu2-7</li>
	</ul>
</body>	

1. 자바스크립트로만 만든 코드
<script>
	window.onload = function(){
		// 먼저 #menu2를 찾는다
		var menu2 = document.getElementById("menu2");
		// #menu2의 태그 중 li 태그를 찾는다 
		var liList = menu2.getElementsByTagName("li");
		// li태그에 하나씩 접근해 글자색을 바꾼다 
		for(var i = 0; i < liList.length; i++){
			var li = liList[i];
			li.style.color = "#";
		} 
	}
</script>
DOM(Document Object Model)에서 제공하는 기능 getElementbyId(), getElementsByTagName(), li.style.color()
DOM은 수 많은 클래스로 이루어져 있다 

2. jQuery version
<script>
	$(document).ready(function(){
		$("#menu2 li").css("color", "#");
	});
</script>

jQuery 준비
1. jQuery를 사용하려면 jQuery 기능이 들어있는 library를 연결해야 한다 
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script> 
2. ready() 메서드 라는 jQuery 기능을 이용해 초기 시작점을 정해야 한다 

<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script>
	$(document).ready(function(){
		// 여기에 노드를 다루는 코드를 넣으면 된다 
		alert("환영합니다.")
	})
</script>
jQuery를 이용한 노드 찾기
var $ 변수이름 = $("CSS 선택자");  // $()함수의 역할은 선택자에 해당하는 노드를 찾아주는 역할 "CSS 선택자"는 찾고 싶은 선택자를 
만들어 $()함수의 매개변수 값으로 넣어주면 된다 var $ 변수이름 은 $()함수에서 리턴해 주는 값을 저장하기 위한 변수 
이벤트 등록
$대상.on("이벤트이름", 이벤트리스너);   또는  $대상. 단축이벤트메서드(이벤트리스너);
<script>
	$(document).ready(function(){
		$("#btnCheck").on("click",function(){
			alert("환영합니다.");
		});
		// 또는 
		$("#btnCheck").click(function(){
			alert("환영합니다.");
		});
	})
</script>
스타일 설정
설정 내용이 하나인 경우 $대상.css("스타일 이름", 값);
설정 내용이 여러 개인 경우
$대상.css({
	"스타일이름": "값"[,
	"스타일이름", "값", ...
	]
});
<script>
	$(document).ready(function(){
		$("#btnCheck").on("click", function(){
			$("#panel").css("border", "2px solid #f00");
		});
</script>

조건문
if
switch : if로 만듷어진 다중 조건처리를 비교적 간결하게 처리할 수 있는 조건문
1단 if
if(조건식){
	조건식이 참일 때 실행하는 구문;
	....
}

2단 if
if(조건식){
	조건식이 참일 때 실행할 구문;
	....
} else {
	조건식이 거짓일 때 실행할 구문;
	....
}

3단 if
if(조건식){
	// 하나 또는 여러 개의 문장ㅇ르 작성할 수 있다 
	조건식이 참일 때 실행할 구문;
	....
} else if(조건식2){
	실행구문2(조건식1이 거짓이고 조건식2가 참일 경우)
} else if(조건식2){
	실행구문2(조건식1이 거짓이고 조건식2가 참인 경우)
} else if(조건식3){
	실행구문3(조건식2가 거짓이고 조건식3이 참인 경우)
}

논리 연산자 && 모두 참일 경우만 참(and), ||  여러 개의 비교 연산자를 묶을 때 사용하는 연산자 
if(조건식)
for(초기값; 조건식; 증감)    -> 조건식이라고 쓰여진 곳에 논리 및 비교 연산자가 들어 갈 것이다 
whilr(조건식)

if 사용시 주의 사항
var value = 5;
if(value > 10);
	alert("10보다 작은 값을 입력해주세요?");
위의 내용은 실행이 된다 왜 일까? if(value > 10);이다 맨 마지막에 ; 이 들어가서 실행된다 ;는 없애야 한다 
실행 구문을 중괄호({})로 감싸지 않는 경우
var value = "test";
if(value == test)
	alert("안녕하세요?")
	alert(환영합니다.);
조건에 맞는 실행 구문이 여러개 있는데 중괄호({})로 감싸지 않았고 ""을 씌우지 않은 부분이 있다 

var userID = window.prompt("사용자 아이디는?");
var userPW = window.prompt("사용자 패스워드는?");
if(userID === "heendok" && userPW === "12345")
	alert("환영합니다.");
else if(userID != "heendok")
	alert("사용자 아이디를 잘못 입력했습니다.");
else
	alert("패스워드를 잘못 입력했습니다."); 

코드 재사용성, 중복 코드 제거, 코드 단순화를 두고 만들어진 기능이 많다 
조건부 연산자 : 주로 2단계 if를 좀 더 간결하게 표현하고자 할 때 사용 
(조건식) ? 실행구문1 : 실행구문2;   // (조건식) ? 조건식이 참일 때 실행되는 구문: 조건식이 거짓일 때 실행되는 구문;
var value = window.prompt("수를 입력해 주세요.");
value = parseInt(value);
(value%2 == 0) ? alert("짝수입니다.") : alert("홀수입니다.");

조건문 switch : if는 switch 대신 사용할 수 있지만 switch는 오직 특별한 경우에만 if 대신 사용할 수 있다
switch는 주로 여러 개의 조건을 처리해야 하는 복잡한 다중 if ~ else 대신 사용한다 
switch(변수 또는 값){
	case 값1 :
		실행구문1;
		break;
	case 값2 :
		실행구문2;
		break;	
	......
	default :
		모든 조건이 일치하지 않을 때 실행되는 구문;
} 
if 구문 중에 조건식에 >, <, >=, <=, != 와 같은 비교 연산자를 사용한 경우는 switch로 변경할 수 없다 
if 구문 중 조건식이 특정 값과 일치하는 경우(==)만 switch로 변경할 수 있다 
1에서 10사이의 랜덤 수를 생성하는 방법 : parseInt(Math.random()*10) + 1

 

*/