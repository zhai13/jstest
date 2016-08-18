var para = document.getElementById('example');
console.log(para.style.color);
console.log(para.style.fontFamily);
//总结，通过style属性获得样式有很大的局限性，他只能获得内嵌样式
//margin-top,在js读取style属性应为，marginTop（技巧，将'-'去掉，'-'后面第一个字母大写，驼峰式写法）