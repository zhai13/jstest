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

//页面加载完毕后执行下面两个函数
addLoadEvent(getHTTPObject);
addLoadEvent(getNewContent);