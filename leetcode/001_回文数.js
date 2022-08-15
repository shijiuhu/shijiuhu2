var huiwenNumber = function (number) {
    if (number < 0) {
        console.log(number + '不是回文数')
        return false
    }

    const array = (number + '').split('')
    for (let i = 0; i < array.length/2; i++) {
        if (array[i] != array[array.length - 1 -i]) {
            console.log(number + '不是回文数')
            return false
        }
    }
    console.log(number + '是回文数')
    return true
}

const number = 1221
huiwenNumber(number)