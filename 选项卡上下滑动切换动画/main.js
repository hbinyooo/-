function switchList() {
    const item = document.getElementById('main-list');
    const childItem = item.children;
    for(var i = 0,length = childItem.length;i<length;i++) {
        childItem[i].addEventListener('click',function () { // 给每个子元素绑定点击事件
            const index = parseInt(this.dataset.index);
            const dValue = 5 - index; // 用于判断其他的元素是位于中间位置下方还是中间位置上方，5为总共的元素数量9个的中心点

            this.className = 'list5'; // 把点击的元素移到中间位置
            this.dataset.index = 5; // 把点击的元素移到中间位置

            for (let i2 = 0,length2 = childItem.length;i2<length2;i2++) {
                if(childItem[i2] !== this) {
                    if(parseInt(childItem[i2].dataset.index) + dValue < 1) { // 最上方隐藏的两个元素转移到最下方
                        childItem[i2].className = 'list' + (parseInt(childItem[i2].dataset.index) + dValue + 9)
                        childItem[i2].dataset.index = parseInt(childItem[i2].dataset.index) + dValue + 9
                    } else if(parseInt(childItem[i2].dataset.index) + dValue > 9) { // 最下方隐藏的两个元素转移到最上方
                        childItem[i2].className = 'list' + (parseInt(childItem[i2].dataset.index) + dValue - 9)
                        childItem[i2].dataset.index = parseInt(childItem[i2].dataset.index) + dValue - 9
                    } else { // 普通元素向上或向下移动
                        childItem[i2].className = 'list' + (parseInt(childItem[i2].dataset.index) + dValue)
                        childItem[i2].dataset.index = parseInt(childItem[i2].dataset.index) + dValue
                    }
                }
            }
        })
    }
}