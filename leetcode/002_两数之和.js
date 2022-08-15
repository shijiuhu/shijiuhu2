// // 时间复杂度：O(n^2)
// // 空间复杂度：O(1)
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const x = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] == target - x) {
//                 console.log([i, j])
//                 return [i, j]
//             }
//         }
//     }
//     console.log([])
//     return []
// }
// const nums = [2, 3, 5, 6, 7, 12]
// const target = 9
// twoSum(nums, target)

// 解法2：
// 时间复杂度：O(n)
// 空间复杂度：O(n)
// 空间换时间
// var twoSum = function(nums, target) {
//     const map = new Map()
//     nums.forEach((num, i) => map.set(num, i))
//     for (let i = 0; i < nums.length; i++) {
//         const x = nums[i];
//         if (map.has(target - x)) {
//             const index = map.get(target - x)
//             if (i != index) {
//                 console.log([i, index])
//                 return [i, index]
//             }
//         }
//     }
//     console.log([])
//     return []
// };
// const nums = [2, 3, 5, 6, 7, 12]
// const target = 9
// twoSum(nums, target)

// 方法三：一遍遍历 + 哈希查找
// 时间复杂度：O(n)
// 空间复杂度：O(n)
// 空间换时间
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            const index = map.get(target - nums[i])
            console.log([i, index])
            return [i, index]
        }
        map.set(nums[i], i)
    }
    console.log([])
    return []
};
const nums = [2, 3, 5, 6, 7, 12]
const target = 9
twoSum(nums, target)