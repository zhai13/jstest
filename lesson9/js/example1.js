function styleHeaderSiblings() {
    var headers = document.getElementsByTagName('h1');
    var elem;
    for (var i=0; i<headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);  //�ĵ��е���һ���ڵ������nextSibling���ҳ���
        addClass(elem, 'intro');
    }
}
function addClass(emelemt,value) {
    if (!emelemt.className) {
        emelemt.className = value;
    } else {
        emelemt.className +=" ";
        emelemt.className +=value;
    }
}
function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}
window.onload = styleHeaderSiblings;