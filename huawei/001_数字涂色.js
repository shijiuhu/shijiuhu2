var numberColor = function (n, array) {
    let sortArray = array.sort((a, b) => a - b)
    const temp = new Array(n).fill(0)

    if (sortArray[0] == 1) {
        sortArray.splice(0, 1)
        temp.splice(0, 1)

        console.log(sortArray)
        console.log(temp)
    }

    let count = 0
    for (let i = 0; i < sortArray.length; i++) {
        if (temp[i] > 0) {
            continue
        } else {
            for (let j = i; j < sortArray.length; j++) {
                if (sortArray[j] % sortArray[i] == 0) {
                    temp[j]++
                }
            }
            count++
        }
    }
    console.log(count)
}

// const n = 10
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const n = 3
const array = [1, 4, 6]
numberColor(n, array)
