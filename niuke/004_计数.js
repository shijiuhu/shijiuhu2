// 方法一：
function count(arr, item) {
    let count = 0
    arr.forEach(value => {
        if(value == item) {
            count++
        }    
    })
    return count
}
// 方法二：
// function count(arr, item) {
//     return arr.filter(el=> el == item).length
// }
count([1, 2, 4, 4, 3, 4, 3], 4)
