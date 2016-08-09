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

//在现有元素后插入一个新元素的函数
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

//动态生成占位图和占位标题文字
function preparePlaceholder() {
    var placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', 'img/placeholder.jpg');
    placeholder.setAttribute('alt', '这是一张占位的图片');
    var description = document.createElement('p');
    description.setAttribute('id', 'description');
    var desctext = document.createTextNode('这是一张占位的图片');
    description.appendChild(desctext);
    var gallery = document.getElementById('imagegallery');
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

//点击链接之后切换图片和文字标题
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

//点击获取图片和文字标题
function showPic(whichpic) {
    if (!document.getElementById('placeholder')) {
        return false;
    }
    //var source = whichpic.href;   //HTML-DOM的写法
    var source = whichpic.getAttribute('href'); //获取元素属性
    var placeholder = document.getElementById('placeholder');   //获取元素
    if (placeholder.nodeName != "IMG") {    //判断节点是否为图片类型
        return false;
    }
    //placeholder.src = source;   //HTML-DOM的写法
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

//页面加载完毕后执行下面两个函数
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);