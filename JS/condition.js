// 제어문
// 1. 조건문
// 2. 반복문

var a = 3;

//if 문
if (a > 2) {
    console.log("a가 2보다 큽니다.");
} else if (a < 2) {
    console.log("a가 2보다 작습니다.");
} else {
    console.log("a가 2와 같습니다.");
}

// switch 문
switch (a) {
    case 2:
        console.log("a가 2와 같습니다.");;
        break;
    case 3:
        console.log('a가 3과 같습니다.');
        break;
    default:
        console.log("몰랑");
        break;
}
