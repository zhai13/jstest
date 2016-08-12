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
    //for...in ������ڱ���������߶�������ԣ���������߶�������Խ���ѭ����������
    for (key in defs) {
        var defintion = defs[key];  //ȡaddr��title
        var dtitle = document.createElement('dt');  //����<dt></dt>
        var dtitle_text = document.createTextNode(key); //�����ı�
        dtitle.appendChild(dtitle_text);    //���ı�����<dt></dt>�м�
        var ddesc = document.createElement('dd');   //����dd
        var ddesc_text =  document.createTextNode(defintion);   //�����ı���addr��title��
        ddesc.appendChild(ddesc_text);  //���ı�����<dd></dd>�м�
        dlist.appendChild(dtitle);  //��<dt></dt>����dl��
        dlist.appendChild(ddesc);  //��<dd></dd>����dl��
    }
    var header = document.createElement('h2');  //����h2Ԫ��
    var header_text = document.createTextNode('Abbreviations'); //�����ı�
    header.appendChild(header_text);    //���ı�������<h2></h2>��
    document.body.appendChild(header);  //��h2�����ĵ���
    document.body.appendChild(dlist);  //��dl�����ĵ���
}
displayAbbreviations(); //��������