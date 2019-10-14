var global={};

global.fuzzyQuery = function(input,list,data){
    const oTxt = document.getElementById(input);
    const oList = document.getElementById(list);
    renderFruits(data)
    circulation()
    oTxt.addEventListener('input',function () {
        const keyWord = oTxt.value;
        // var fruitList = searchByIndexOf(keyWord,fruits);
        console.log(data);
        const fruitList = searchByRegExp(keyWord, data);
        renderFruits(fruitList);
        circulation()

    })
    oTxt.addEventListener('focus',function () {
        oList.style.display = 'block';
    })
    document.addEventListener('click',function (ev) {
        console.log(ev.target)
        if(ev.target.id===input){
            return;
        }
        // oList.stopPropagation();
        oList.style.display = 'none';

    })
    oTxt.addEventListener('keydown',function (e) {
        if(e.keyCode === 13){
            const keyWord = oTxt.value;
            // var fruitList = searchByIndexOf(keyWord,fruits);
            console.log('2'+data);
            const fruitList = searchByRegExp(keyWord, data);
            renderFruits(fruitList);
        }
    })
    function renderFruits(list){
        if(!(list instanceof Array)){
            return ;
        }
        oList.innerHTML = '';
        var len = list.length;
        var item = null;
        for(var i=0;i<len;i++){
            item = document.createElement('li');
            item.innerHTML = list[i];
            oList.appendChild(item);
        }
    }

    //循环列表元素绑定点击事件
    function circulation() {
        var son = oList.childNodes;
        for(var i =0;i<son.length;i++){
            son[i].addEventListener('click',function (e) {
                oTxt.value = e.target.innerText;
                oList.style.display = 'none';
                e.stopPropagation();
            })
        }
    }
//模糊匹配的时候如果不区分大小写，可以使用toLowerCase()或者toUpperCase()转换之后去匹配。
//模糊查询1:利用字符串的indexOf方法
    function searchByIndexOf(keyWord, list){
        if(!(list instanceof Array)){
            return ;
        }
        var len = list.length;
        var arr = [];
        for(var i=0;i<len;i++){
            //如果字符串中不包含目标字符会返回-1
            if(list[i].indexOf(keyWord)>=0){
                arr.push(list[i]);
            }
        }
        return arr;
    }
//正则匹配
    function searchByRegExp(keyWord, list){
        if(!(list instanceof Array)){
            return ;
        }
        var len = list.length;
        var arr = [];
        var reg = new RegExp(keyWord);
        for(var i=0;i<len;i++){
            //如果字符串中不包含目标字符会返回-1
            if(list[i].match(reg)){
                arr.push(list[i]);
            }
        }
        return arr;
    }
}