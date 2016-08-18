var para = document.getElementById('example');
console.log(para.style.color);  //获取样式
console.log(para.style.fontFamily); //font-family驼峰写法
para.style.color = 'black'; //设置颜色样式（如果有样式则为覆盖，否则为添加）
para.style.fontSize = '30px';   //添加一个属性样式
