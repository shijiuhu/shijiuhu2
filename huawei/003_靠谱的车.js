// 解法1：
const originPrice = 100
let count = 0
for (let i = 1; i <= originPrice; i++) {
    let strNumber = i + '' 
    if(strNumber.indexOf('4') != -1) {
        count++
    }
}
let realPrice = originPrice - count
console.log(realPrice)

// 解法2：
// // let n = Number(readLine());
// let n = Number("100");

// let ans = n;
// let temp = 0;
// let k = 0;    //进制内含4的个数
// let j = 1;    //4开头的数字

// while (n > 0) {
//     if (n % 10 > 4) {
//         temp += (n % 10 - 1) * k + j;
//     } else {
//         temp += (n % 10) * k;
//     }
//     //进制数内的含4个数
//     k = k * 9 + j;
//     j *= 10;
//     n = Math.floor(n / 10);
// }

// console.log(ans - temp);


