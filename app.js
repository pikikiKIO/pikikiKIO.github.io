x = Math.floor(Math.random() * 9) + 1;

y = Math.floor(Math.random() * 9) + 1;

result = x + y;

document.getElementById('x').innerText = x;
document.getElementById('y').innerText = y;

console.log(`${x} + ${y} = ` + result);

function calc() {
    otvet = document.getElementById('result').value;
    if (result == otvet) {
        console.log('right');
        document.getElementById('yes').style.visibility = 'visible';
        document.getElementById('otvet').style.visibility = 'visible';
        document.getElementById('otvet').innerText = 'Харош';
    } else {
        console.log('bruh');
        document.getElementById('no').style.visibility = 'visible';
        document.getElementById('otvet').style.visibility = 'visible';
        document.getElementById('otvet').innerText = 'Серьёзно, ' + result;
        document.getElementById('otvet').style.color = 'red';
    }
}