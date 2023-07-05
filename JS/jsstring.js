var greeting = "Hello!";
var farewell = "Bye!";
var myname = "배준범"
var sentence = greeting +'\n'+ farewell;
console.log(sentence); // 문자열 합쳐짐

console.log(farewell + 2); // 숫자가 문자로 변환됨

// 이스케이프 시퀀스
// var sentence = greeting +'\n'+ farewell;
var sentence = greeting +'\\'+ farewell;
console.log(sentence);
// var sentence = greeting +'\''+ farewell;
// var sentence = greeting +'\"'+ farewell;

//템플릿 리터럴 (ES6)
var a = `안녕하세요!
여러분~`;
// 멀티라인 텍스트 작업 가능, 이스케이프 시퀀스 필요 없음
console.log(a);

var price = 1000;
var b = `이 물건은 ${price} 원 입니다.`;
// 편하게 문자열 중간에 변수 추가
console.log(b)

// 문자열 함수
var abc = "I am Iron man";
// indexOf
var idx = abc.indexOf("man");
// 문자열 패턴의 인덱스 반환
console.log(idx);
console.log(abc.indexOf("I"));

//slice() 문자열 일부 자르기
console.log(abc.slice(0, 3));
console.log(abc.slice(0, 4));

// toUpperCase(), toLowerCase()
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// startsWith() 특정 문자열로 시작하는지 확인
console.log(abc.startsWith("I am"));
console.log(abc.startsWith("You are"));
//  endsWith() 특정 문자열로 끝나는지 확인
console.log(abc.endsWith("man"));
// includes() 포함하는지 확인
console.log(abc.includes("am"));