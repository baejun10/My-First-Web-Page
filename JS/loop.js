// 반복문

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var flag = 0;
while (true) {
    flag++;
    console.log(flag);
    if (flag > 10) break;
}

do {
    console.log(flag);
} while (flag > 10){
    flag--;
}
