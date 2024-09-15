
right = 0;

function game() {
    switch(level) {
        case 1:
            minValue = 1;
            maxValue = 9;
        break;
        case 2:
            minValue = 1;
            maxValue = 9;
        break;
        case 3:
            console.log(123);
            minValue = 5;
            maxValue = 20;
    }
  

    document.getElementById('yes').style.visibility = 'hidden';
    document.getElementById('no').style.visibility = 'hidden';
    document.getElementById('check').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('otvet').innerText = '';
    document.getElementById('result').value = '';

    document.getElementById('menu').style.display = 'none';
    x = Math.floor(Math.random() * maxValue) + minValue;
    y = Math.floor(Math.random() * maxValue) + minValue;
    z = Math.floor(Math.random() * maxValue) + minValue;

    //Генерируем случайный пример от 1 до 4
    primer = Math.floor(Math.random() * 4) + 1;
    switch(true) {
        case primer == 1 && level== 1 :
            result = x + y;
            document.getElementById('operation').innerText = '+';
            document.getElementById('x').innerText = x;
            document.getElementById('y').innerText = y;
            break;

        case primer == 1 && (level== 2 || level == 3):
            result = x + y + z;
            document.getElementById('operation').innerText = '+';
            document.getElementById('operation2').innerText = '+';
            document.getElementById('z').innerText = z;
            document.getElementById('x').innerText = x;
            document.getElementById('y').innerText = y;
            break;

        case primer == 2 && level == 1:
            result = x - y;
            document.getElementById('operation').innerText = '-';
            document.getElementById('x').innerText = x;
            document.getElementById('y').innerText = y;
            break;

        case primer == 2 && (level== 2 || level == 3):
            result = x - y - z;
            document.getElementById('operation').innerText = '-';
            document.getElementById('operation2').innerText = '-';
            document.getElementById('z').innerText = z;
            document.getElementById('x').innerText = x;
            document.getElementById('y').innerText = y;
            break;

        case primer == 3 && level == 1:
            result = x * y;
            document.getElementById('operation').innerText = '*';
            document.getElementById('x').innerText = x;
            document.getElementById('y').innerText = y;
            document.getElementById('x').innerText = x;
            document.getElementById('y').innerText = y;
            break;

        case primer == 3 && (level== 2 || level == 3):
            result = x * y + z;
            document.getElementById('operation').innerText = '*';
            document.getElementById('operation2').innerText = '+';
            document.getElementById('z').innerText = z;
            document.getElementById('x').innerText = x;
            document.getElementById('y').innerText = y;
            break;

        case primer == 4 && level == 1:
            result = Math.floor(Math.random() * Math.floor(maxValue/2+1)) + minValue;
            x = result * y;
            document.getElementById('operation').innerText = '/';
            document.getElementById('x').innerText = x;
            document.getElementById('y').innerText = y;
            break;

        case primer == 4 && (level== 2 || level == 3):
            result = Math.floor(Math.random() * Math.floor(maxValue/2+1)) + minValue;
            y = x * (result + z)
            document.getElementById('operation').innerText = '/';
            document.getElementById('operation2').innerText = '-';
            document.getElementById('z').innerText = z;
            document.getElementById('y').innerText = x;
            document.getElementById('x').innerText = y;
            break;


    }
}


function calc() {
    otvet = document.getElementById('result').value;

    //if (otvet == '') return;

    if (result == otvet) {
        document.getElementById('yes').style.visibility = 'visible';
        document.getElementById('no').style.visibility = 'hidden';
        document.getElementById('otvet').style.visibility = 'visible';
        document.getElementById('otvet').innerText = 'Харош';
        document.getElementById('otvet').style.color = 'green';
        right++;
        document.getElementById('right').innerText = right;
    } else {
        document.getElementById('no').style.visibility = 'visible';
        document.getElementById('yes').style.visibility = 'hidden';
        document.getElementById('otvet').style.visibility = 'visible';
        document.getElementById('otvet').innerText = 'Серьёзно, ' + result;
        document.getElementById('otvet').style.color = 'red';
    }

    document.getElementById('restart').style.display = 'block';
    document.getElementById('check').style.display = 'none';
    
}
