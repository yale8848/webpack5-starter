import '@/style.css';
import { cube } from '@/math.js';
//import _ from 'lodash'
import Vue from 'vue';

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
    element.className += 'hello'

    return element;
}
test();
document.body.appendChild(component());