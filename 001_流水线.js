var pipelineTime = function (x, y) {
    let arrayM = x.split(" ").map(item => parseInt(item))
    let arrayN = y.split(" ").map(item => parseInt(item))
    let m = arrayM[0]
    let n = arrayM[1]
    let sum = 0
    if (n <= m) {
        for (let c of arrayN) {
            sum = Math.max(c, sum)
        }
    } else {
        arrayN.sort((a, b) => a - b)
        // 当m小于n时，需要每次把最小的一个删除，值累加，然后数组重新排序，循环
        let tempArray1 = []
        let tempArray2 = []
        while(arrayN.length > m) {
            sum = sum + arrayN[0]
            for (let i = 0; i < m; i++) {
                tempArray1[i] = arrayN[i] - arrayN[0]
            }
            for(let i = m; i < arrayN.length; i++) {
                tempArray2[i-m] = arrayN[i]
            }
            tempArray1.shift()
            arrayN = [...tempArray1, ...tempArray2]
            tempArray1 = []
            tempArray2 = []
        }
        if(arrayN.length == m) { // 当m和n相等时，可以直接取最后一项，也就是最大项
            sum = sum + arrayN[m - 1]
        }
    }
    console.log(sum)
}

// const x = readline()
// const y = readline()
const x = '3 5'
const y = '8 4 3 2 10'
pipelineTime(x, y)

