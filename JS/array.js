// 배열 Array - 배열은 객체-> 키:인덱스, 값:요소
var mbti = ["INFP", "ENFJ", "INTJ"];
console.log(mbti[0]);
console.log(mbti.length);

mbti[3] = "ESFP";
// 값 append
console.log(mbti);

mbti[3] = "ISTJ";
// 3번 덮어쓰기
console.log(mbti);

//push() 배열 마지막에 추가
mbti.push("ESFP");
console.log(mbti);
// pop() 마지막 원소 리턴 후 삭제
console.log(mbti.pop());

//unshift() 앞쪽에 추가
console.log(mbti.unshift("ESFP"));
//shift() 맨 앞 원소 삭제 후 리턴
console.log(mbti.shift());
// 스프레드 문법
var newMBTI = ["ESFP", ...mbti, "ESTJ", "ISFJ"];
console.log(newMBTI);

//slice()
console.log(mbti);
console.log(mbti.slice(0, 2));
console.log(mbti);
console.log(mbti.slice(-2)); // 뒤에서부터 2개

// join()
console.log(mbti.join());
console.log(mbti.join("-"));

//sort() 정렬
console.log(mbti.sort())
console.log(mbti.sort().reverse()); // 내림차순