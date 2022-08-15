function commonParentNode(oNode1, oNode2) {
    while (true) {
        if (oNode1.contains(oNode2)) {
            return oNode1;
        }
        oNode1 = oNode1.parentNode;
    }
}

// 下面这个其实就是上面的变化，递归调用，都是固定住一个，循环另一个，当然，循环前要先看循环的是否包含固定的
function commonParentNode(oNode1, oNode2) {
    if (oNode1.contains(oNode2)) {
        return oNode1;
    } else {
        return commonParentNode(oNode1.parentNode, oNode2);
    }
}

// 下面这种方法不对，比如，如果oNode1或oNode2是另对方的父节点，这样很明显就不对
function commonParentNode(oNode1, oNode2) {
    let parent1 = oNode1.parentNode;
    let parent2 = oNode2.parentNode;
    if (parent1 === parent2) {
        return parent1
    } else {
        commonParentNode(parent1, parent2)
    }
}