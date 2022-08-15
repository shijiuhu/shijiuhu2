// let n = Number(readLine());   //总共棵树
// let m = Number(readLine());   //未成活的棵树
// let dead = readLine().split(" ").map(i=>parseInt(i));   //未成活的数
// let k = Number(readLine()); //补种的棵树


// let n = Number("10");   //总共棵树
// let m = Number("3");   //未成活的棵树
// let dead = "2 4 7".split(" ").map(i => parseInt(i));   //未成活的数
// let k = Number("1"); //补种的棵树

// let max = 0;

// for (let i = k - 1; i < m; i++) { //i为补种的最后一棵胡杨下标
//     if (i == k - 1) {
//         max = Math.max(max, dead[k] - 1);  //种最前面的k棵树
//     } else if (i == m - 1) {
//         max = Math.max(max, n - dead[i - k]);  //种最后面的k棵树
//     } else {
//         max = Math.max(max, dead[i + 1] - dead[i - k] - 1);  //种中间的k棵树
//     }
// }
// console.log(max);

// let n = Number("10");   //总共棵树
// let m = Number("3");   //未成活的棵树
// let dead = "2 4 7".split(" ").map(i => parseInt(i));   //未成活的数
// let k = Number("1"); //补种的棵树


let n = 10
let m = 4
let dead = [3, 4, 5, 9]
let k = 1

// 滑动窗口，首先知道补种也必须是连续的才有可能获得最大连续棵树，然后设定左右指针，保证中间有K棵树补种
let max = 0;
for (let i = 0; i <= m - k; i++) {
    let left = 0;
    let right = n;
    if (i > 0) {
        left = dead[i - 1];
    }

    if (i + k < m) {
        right = dead[i + k] - 1;
    }

    let temp = right - left;
    if (temp > max) {
        max = temp;
    }
}

console.log(max)

// 还有其他思路，https://www.nowcoder.com/discuss/960131?order=0&pos=24&page=1&source_id=discuss_center_0_nctrack&channel=-1&gio_id=-1653931251365
// 但是无论哪一个，我都没有完全明白，哎，实在是太笨了，想了几天了就是想不明白







