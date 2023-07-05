var a = 10;
let b = 20;
let num = a + b;
console.log(num);

/* 
1. 자료형
number, string, boolean, undefined, null, symbol
number: 정수, 실수 구분 X
string: 문자열 큰따옴표, 작은따옴표 상관 없음
2. 참조형

 */

// string
var name = "준범"
console.log(name)
var name2 = "'준범'"
console.log(name2)
var name3 = "\"준범\""
console.log(name3)

// boolean
var flag = true;
console.log(flag)
flag = false;
console.log(flag)

// undefined
var ab
console.log(ab)

// 객체
// 속성의 집합 데이터, 속성은 어떤 데이터타입이라도 할당 가능
// 속성의 정의 --> 속성명:속성값
var student = {
    grade : 1, 
    school : "korea univ."
};
console.log(student)
console.log(typeof(student));

// 객체의 값 호출
console.log(student.grade)
console.log(student['school']) 

var key = Object.keys(student);
// 객체의 키 호출
console.log(key);

// 객체에 새로운 속성 class 추가
student.class = 3;
console.log(student.class)
console.log(student['class']) // dictionary 처럼 호출도 가능

//비어있는 객체
var teacher = new Object();
teacher = {

};