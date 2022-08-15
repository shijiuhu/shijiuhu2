// let s = readLine();
// let s = "18:52"
// let s = "23:38"
// let s = "17:58"
// let s = "02:28"
// let s = "00:00"
let s = "33:33"

let errorTime = Number(s.substring(0, 2) + s.substring(3));
let num = [];
num[0] = s.charAt(0);
num[1] = s.charAt(1);
num[2] = s.charAt(3);
num[3] = s.charAt(4);
let time;
let min = Number.MAX_VALUE;    //小于错误时间的最小时间（第二天）
let minThan = Number.MAX_VALUE;    //大于错误时间的最小时间
for (let i = 0; i < 4; i++) {
    if (Number(num[i]) > 2) { //首位不能大于2
        continue;
    }
    for (let j = 0; j < 4; j++) {
        if (Number(num[i]) == 2 && Number(num[j]) > 3) {  //第一位为2时第二位则不能大于3
            continue;
        }
        for (let k = 0; k < 4; k++) {
            if (Number(num[k]) > 6) { //第三位不能大于6
                continue;
            }
            for (let l = 0; l < 4; l++) {
                time = Number(num[i] + num[j] + num[k] + num[l]);   //重构的时间
                if (time < errorTime) {
                    min = Math.min(min, time);
                } else if (time > errorTime) {
                    minThan = Math.min(minThan, time);
                }
            }
        }
    }
}
let res = "";
if (minThan == Number.MAX_VALUE) { //若重构的时间都小于错误时间，则时间为第二天时间
    res = addZeroPrefix(String(min));
} else {
    res = addZeroPrefix(String(minThan));
}

// 此种情况针对4个数字全部相同情形(即：00:00/11:11/22:22)，也可以在time < errorTime时加上等号
if (res == Number.MAX_VALUE) {
    res = s.substring(0, 2) + s.substring(3)
}

console.log(res.substring(0, 2) + ":" + res.substring(2));

function addZeroPrefix(str) {
    const strLength = str.length
    let finalStr = str
    switch(strLength) {
        case 3:
            finalStr =  '0' + str
            break
        case 2:
            finalStr = '00' + str
            break
        case 1:
            finalStr = '000' + str
            break
        default:
            break
    }
    return finalStr
}