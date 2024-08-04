x = Math.floor(Math.random() * 9) + 1;
y = Math.floor(Math.random() * 9) + 1;
primer = Math.floor(Math.random() * 4) + 1;

switch(primer) {
    case 1:
        result = x + y;
        document.getElementById('operation').innerText = '+';
        break;
    case 2:
        result = x - y;
        document.getElementById('operation').innerText = '-';
        break;
    case 3:
        result = x * y;
        document.getElementById('operation').innerText = '*';
        break;
    case 4:
        result = x / y
        document.getElementById('operation').innerText = '/';
}



document.getElementById('x').innerText = x;
document.getElementById('y').innerText = y;

function calc() {
    otvet = document.getElementById('result').value;

    if (otvet == '') return;

    if (result == otvet) {
        document.getElementById('yes').style.visibility = 'visible';
        document.getElementById('no').style.visibility = 'hidden';
        document.getElementById('otvet').style.visibility = 'visible';
        document.getElementById('otvet').innerText = 'Харош';
        document.getElementById('otvet').style.color = 'green';
    } else {
        document.getElementById('no').style.visibility = 'visible';
        document.getElementById('yes').style.visibility = 'hidden';
        document.getElementById('otvet').style.visibility = 'visible';
        document.getElementById('otvet').innerText = 'Серьёзно, ' + result;
        document.getElementById('otvet').style.color = 'red';
    }

    document.getElementById('restart').style.display = 'block';
    
}