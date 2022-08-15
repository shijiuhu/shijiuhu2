const temp = [
    { name: 'GET 张三'},
    { name: '李四' },
    { name: 'POST 小ddd华' },
    { name: '小松'},
    { name: 'PUT 张三'},
    { name: 'HEAD z嗷嗷四'},
    { name: 'PUTPUT 小华'},
    { name: 'GETPUT 小华'},
    { name: 'POST 小华'},
    { name: 'DELETE DELETE小松'},
]

// console.log([...temp])

// 方法一：
// temp.forEach((value, index) => {
//     value['newName'] = value['name'].replace(/^GET /, '').replace(/^POST /, '')
//         .replace(/^HEAD /, '').replace(/^PUT /, '').replace(/^DELETE /, '')
// })

// 方法二：这样更简洁
// temp.forEach((value, index) => {
//     value['newName'] = value['name'].replace(/^(GET |POST |HEAD |PUT |DELETE )/, '')
// })

// 方法三：和方法四其实一样，只是这里直接使用字符串而不使用数组，更简洁一些
// const str = 'GET |POST |HEAD |PUT |DELETE '
// const reg = new RegExp("^(" + str + ")");
// temp.forEach((value, index) => {
//     value['newName'] = value['name'].replace(reg, '')
// })

// 方法四：更加灵活，使用数组把变量抽取出来
const array = ['GET ', 'POST ', 'HEAD ', 'PUT ', 'DELETE ']
const str = array.join('|')
const reg = new RegExp("^(" + str + ")");
temp.forEach((value) => {
    // value['newName'] = value['name'].replace(reg, '')
    value.newName = value.name.replace(reg, '')
})

console.log(temp)