function styleHeaderSiblings() {
    var headers = document.getElementsByTagName('h1');
    var elem;
    for (var i=0; i<headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);  //文档中的下一个节点可以用nextSibling查找出来
        addClass(elem, 'intro');    //给元素附加一个class名
    }
}
function addClass(emelemt,value) {
    if (!emelemt.className) {   //如果当前元素没有class名就将‘intro’作为class名附加给当前元素
        emelemt.className = value;
    } else {
        emelemt.className +=" ";    //如果当前元素有class名就在此class名后追加‘intro’class名
        emelemt.className +=value;
    }
}
function getNextElement(node) {
    if (node.nodeType == 1) {   //如果值元素节点，直接返回元素节点
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);    //如果存在子节点就继续查找下一个子节点
    }
    return null;
}
window.onload = styleHeaderSiblings;    //页面加载完毕后执行