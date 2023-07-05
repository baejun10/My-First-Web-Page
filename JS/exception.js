// 예외 처리
try {
    // 에러 가능성이 있는 코드
    throw new Error("error");
} catch (e) {
    // 에러 발생 시 실행
    console.log("에러 발생");
    console.log(e);
} finally {
    // 무조건 실행
    console.log("gogo");
}
