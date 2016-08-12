function displayAbbreviations() {
    var abbreviations = document.getElementsByTagName('abbr');
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    for (i=0; i<abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        var definition = current_abbr.getAttribute('title');
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement('dl');
    //for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
    for (key in defs) {
        var defintion = defs[key];  //取addr的title
        var dtitle = document.createElement('dt');  //创建<dt></dt>
        var dtitle_text = document.createTextNode(key); //创建文本
        dtitle.appendChild(dtitle_text);    //将文本插入<dt></dt>中间
        var ddesc = document.createElement('dd');   //创建dd
        var ddesc_text =  document.createTextNode(defintion);   //创建文本（addr的title）
        ddesc.appendChild(ddesc_text);  //将文本插入<dd></dd>中间
        dlist.appendChild(dtitle);  //将<dt></dt>插入dl中
        dlist.appendChild(ddesc);  //将<dd></dd>插入dl中
    }
    var header = document.createElement('h2');  //创建h2元素
    var header_text = document.createTextNode('Abbreviations'); //创建文本
    header.appendChild(header_text);    //将文本插入至<h2></h2>中
    document.body.appendChild(header);  //将h2插入文档中
    document.body.appendChild(dlist);  //将dl插入文档中
}
displayAbbreviations(); //函数调用