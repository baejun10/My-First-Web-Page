// 함수

function multiply(a, b) {
    return a * b;
}
// 익명함수
var multi = function (a, b) {
    return a * b;
};
// 화살표 익명함수 중괄호 없으면 return 안써도 됨
var test = (a, b) => a + b;

console.log(multiply(2, 3));
console.log(multi(2, 3));
console.log(test(2, 3));

// var, let, const 변수
// 호이스팅

word = "hello";
var word;
// 호이스팅으로 맨 위로 올라감. 따라서 위처럼 입력 가능

// words = "let"; 오류 선언 미리해야함
let words;
words = "let";

console.log(word);

const c = "abc";
// const 불변

// const로 선언된 변수에 할당된 객체
const student = {
    grade: 1,
    class: 3,
};
// 재할당 불가
// student = {
//     number: 1,
//     grade: "A",
// };

console.log(student);
