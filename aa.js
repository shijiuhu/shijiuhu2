// console.log(namespace)
// console.log(namespace['a'])
// console.log(Object.assign({}, namespace['c']))

function namespace(oNamespace, sPackage) {
    let tmpWrap = oNamespace;
    sPackage.split('.').forEach(item => {
        console.log(item, '--------------------------', tmpWrap[item])
        tmpWrap[item] = Object.assign({}, tmpWrap[item]);
        tmpWrap = tmpWrap[item]
        console.log(JSON.stringify(tmpWrap))
        console.log(JSON.stringify(oNamespace))
    });
    return oNamespace;
}

let oNamespace = {a: {test: 1, b: 2}}
let sPackage = 'a.b.c.d'
namespace(oNamespace,sPackage)