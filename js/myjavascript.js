function showPic(whichpic) {
    if (!document.getElementById('placeholder')) {
        return false;
    }
    var source = whichpic.getAttribute('href'); //获取元素属性
    var placeholder = document.getElementById('placeholder');   //获取元素
    if (placeholder.nodeName != "IMG") {    //判断节点是否为图片类型
        return false;
    }
    placeholder.setAttribute('src', source);    //设置元素属性
    if (document.getElementById('description')) {
        var text = whichpic.getAttribute('title') ? whichpic.getAttribute('title') : "";    //三元表达式
        var description = document.getElementById('description');
        if (description.firstChild.nodeType == 3) { //判断节点属性是否为文本节点
            description.firstChild.nodeValue = text;    //设置文本节点属性的值
        }
    }
    return true;
}
function prepareGallery() {
    var imagegallery = document.getElementById('imagegallery');
    if (!imagegallery) {
        return false;
    }
    var links = imagegallery.getElementsByTagName('a');
    for (var i=0; i<links.length; i++){
        links[i].onclick = function() {
            return !showPic(this);  //取消连接被点击时的默认行为
        }
    }
}
//页面加载完毕后执行函数
function addLoadEvent(func) {
     var oldonload = window.onload;
     if (typeof window.onload != 'function') {
         window.onload = func;
     } else {
         window.onload = function() {
             oldonload();
             func();
         }
     }
 }
addLoadEvent(prepareGallery);