function showPic(whichpic) {
    var source = whichpic.getAttribute('href'); //获取元素属性
    var text = whichpic.getAttribute('title');
    var placeholder = document.getElementById('placeholder');   //获取元素
    var description = document.getElementById('description');
    placeholder.setAttribute('src', source);    //设置元素属性
    description.firstChild.nodeValue = text;    //设置文本节点属性的值
}