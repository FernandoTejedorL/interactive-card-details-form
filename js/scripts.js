const rootStyles = document.documentElement.style;
const numbersofcardElement = document.getElementById('numbers-of-card');
const nameofcardElement = document.getElementById('name-of-card');
const monthofcardElement = document.getElementById('month-of-card');
const yearofcardElement = document.getElementById('year-of-card');
const cvcofcardElment = document.getElementById('CVC-of-card');
const nameinputElement = document.getElementById('name-input');
const cardnumberinputElement = document.getElementById('card-number-input');
const monthinputElement = document.getElementById('month-input');
const yearinputElement = document.getElementById('year-input');
const cvcinputElement = document.getElementById('cvc-input');

//reflejar en la tarjeta lo que se va introduciendo en formulario

// Nombre
const writeNameData = event => {
    if (nameinputElement.value === '') {
        nameofcardElement.textContent = 'JANE APPLESEED';
    } else {
        nameofcardElement.textContent = nameinputElement.value.toUpperCase();
    }
}
nameinputElement.addEventListener('keyup', writeNameData);

// Número de tarjeta
const writeNumbersData = event => {
    if (cardnumberinputElement.value === '') {
        numbersofcardElement.textContent = '0000 0000 0000 0000';
    } else {
        numbersofcardElement.textContent = cardnumberinputElement.value.toUpperCase();
    }
}
cardnumberinputElement.addEventListener('keyup', writeNumbersData);

//Mes
const writeMonthData = event => {
    if (monthinputElement.value === '') {
        monthofcardElement.textContent = '00';
    } else {
        monthofcardElement.textContent = monthinputElement.value;
    }
}
monthinputElement.addEventListener('keyup', writeMonthData);

//Año
const writeYearData = event => {
    if (yearinputElement.value === '') {
        yearofcardElement.textContent = '00';
    } else {
        yearofcardElement.textContent = yearinputElement.value;
    }
}
yearinputElement.addEventListener('keyup', writeYearData);

//CVC
const writeCVCData = event => {
    if (cvcinputElement.value === '') {
        cvcofcardElment.textContent = '000';
    } else {
        cvcofcardElment.textContent = cvcinputElement.value;
    }
}
cvcinputElement.addEventListener('keyup', writeCVCData);