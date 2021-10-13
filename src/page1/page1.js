//import '@/style.css';
import '@/style.scss'
//import '@/style.less'
import { cube } from '@/math.js';
//import _ from 'lodash'
import Vue from 'vue';

import Icon from '@/assets/webpack.png';

let test = () => {
    let nicknames = ['di', 'boo', 'punkeye'];
    for (let nickname of nicknames) {
        console.log(nickname);
    }
}
let aa = new Vue();


function component() {
    var element = document.createElement('div');
    element.innerHTML = 'hello ssworld aab bb aacc 5 ^3  ' + cube(5) + _.join(['aa', 'bb'], ' ')
    element.className += 'hello1 iconfont'

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    return element;
}
test();
document.body.appendChild(component());