// 直接当成参数传递
function argsAsArray(fn, arr) {
    return fn && fn(...arr);
}

// 方法2：使用apply
// function argsAsArray(fn, arr) {
//     return fn.apply(this, arr);
// }

// 方法3：使用call
// function argsAsArray(fn, arr) {
//     return fn.call(this,arr[0], arr[1], arr[2])
// }
argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!'])