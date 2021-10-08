import '@/style.css';
import { cube } from '@/math.js';


let test = () => {
    let nicknames = ['di', 'boo', 'punkeye'];
    for (let nickname of nicknames) {
        console.log(nickname);
    }
}

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'hello world aab bb cc 5 ^3  ' + cube(5)
    element.className += 'hello'

    return element;
}
test();
document.body.appendChild(component());