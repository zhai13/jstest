function styleHeaderSiblings() {
    var headers = document.getElementsByTagName('h1');
    var elem;
    for (var i=0; i<headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);  //�ĵ��е���һ���ڵ������nextSibling���ҳ���
        addClass(elem, 'intro');    //��Ԫ�ظ���һ��class��
    }
}
function addClass(emelemt,value) {
    if (!emelemt.className) {   //�����ǰԪ��û��class���ͽ���intro����Ϊclass�����Ӹ���ǰԪ��
        emelemt.className = value;
    } else {
        emelemt.className +=" ";    //�����ǰԪ����class�����ڴ�class����׷�ӡ�intro��class��
        emelemt.className +=value;
    }
}
function getNextElement(node) {
    if (node.nodeType == 1) {   //���ֵԪ�ؽڵ㣬ֱ�ӷ���Ԫ�ؽڵ�
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);    //��������ӽڵ�ͼ���������һ���ӽڵ�
    }
    return null;
}
window.onload = styleHeaderSiblings;    //ҳ�������Ϻ�ִ��