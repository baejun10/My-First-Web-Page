// DOM 접근
var el = document.getElementById("title");
console.log(el);
console.log(el.innerHTML);
console.log(el.innerText);

var el2 = document.getElementsByClassName("container");
console.log(el2);

// 이벤트
/*
    폼 이벤트 -제출, 초기화
    마우스 이벤트 - 클릭, 더블클릭, 마우스 이동
    키보드 이벤트 - keydown, keypress, keyup

*/
function myfunc (){
    alert('작동함');
}
el.addEventListener("click", myfunc);