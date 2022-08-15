// function namespace(oNamespace, sPackage) {
//     let tmpWrap = oNamespace;
//     sPackage.split('.').forEach(item => {
//         tmpWrap = tmpWrap[item] = Object.assign({}, tmpWrap[item]);
//     });
//     return oNamespace;
// }

let oNamespace = { a: { test: 1, b: 2 } }
let sPackage = 'a.b.c.d'
namespace(oNamespace, sPackage)

function namespace(oNamespace, sPackage) {
    let tmpWrap = oNamespace;
    let str = sPackage.split('.')
    for (let i = 0; i < str.length; i++) {
        if(typeof tmpWrap[str[i]] != 'object') {
            tmpWrap[str[i]] = {}
        }
        tmpWrap = tmpWrap[str[i]]
    }
    console.log(JSON.stringify(oNamespace))
    return oNamespace;
}