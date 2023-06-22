let name = prompt("Как вас величать?");
alert (`Рада знакомству, ${name}`);


let age = prompt("Сколько лет и сколько зим?");
switch(age) {
    case '18':
        alert(`18 вам уже :) Совершенолетие`);
        break;
    case '10':
        alert(`Учите уроки`);
        break;
    case '30':
        alert(`Ложитесь спать, завтра утро`);
        break;
    default:
        alert(`Мне жаль, но я не знаю, что вам делать`);
        break;
}

// alert (`Рада знакомству, ${name}`);

// let element = document.getElementById('el1');
// console.log(element);

// // Добавляем класс элементу
// element.classList.add('active');
// element.classList.remove('active');

let count = 1;

function clickButton() {
    // alert("Кнопка нажата")
    let element = document.getElementById('el1');
    // if (count %2==0) element.classList.add('active');
    // else element.classList.remove('active');
    // count++;
    element.classList.toggle('active');
}

let btn = document.getElementById('btn');
btn.addEventListener('click', clickButton)