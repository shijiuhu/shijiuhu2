function fibonacci(n) {
    // 一、递归解法
    // if (n == 1 || n == 2) return 1
    // if (n > 2) {
    //     return fibonacci(n - 1) + fibonacci(n - 2)
    // }

    // 二、循环解法
    let num1 = 1;
    let num2 = 1;
    for (let i = 2; i < n; i++) {
        num2 += num1;
        num1 = num2 - num1;
    }
    return num2;
}

console.log(fibonacci(5))