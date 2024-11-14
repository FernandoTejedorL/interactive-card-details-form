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
const formElement = document.getElementById('form');
const cbbnameElement = document.getElementById('nameCBB');
const cbbnumberElement = document.getElementById('numberCBB');
const cbbdateElement = document.getElementById('dateCBB');
const cbbcvvElement = document.getElementById('cvcCBB');

const writeNameData = (event) => {
  if (nameinputElement.value === '') {
    nameofcardElement.textContent = 'JANE APPLESEED';
  } else {
    nameofcardElement.textContent = nameinputElement.value.toUpperCase();
  }
};
nameinputElement.addEventListener('keyup', writeNameData);
//se puede sustituir 'keyup' por 'input'
//también podemos jugar con los booleanos true or false sustituyendo toda la función
const writeNumbersData = (event) => {
  if (cardnumberinputElement.value === '') {
    numbersofcardElement.textContent = '0000 0000 0000 0000';
  } else {
    numbersofcardElement.textContent =
      cardnumberinputElement.value.toUpperCase();
  }
};
cardnumberinputElement.addEventListener('keyup', writeNumbersData);
//se puede sustituir 'keyup' por 'input'
const writeMonthData = (event) => {
  if (monthinputElement.value === '') {
    monthofcardElement.textContent = '00';
  } else {
    monthofcardElement.textContent = monthinputElement.value;
  }
};
monthinputElement.addEventListener('keyup', writeMonthData);
//se puede sustituir 'keyup' por 'input'
const writeYearData = (event) => {
  if (yearinputElement.value === '') {
    yearofcardElement.textContent = '00';
  } else {
    yearofcardElement.textContent = yearinputElement.value;
  }
};
yearinputElement.addEventListener('keyup', writeYearData);
//se puede sustituir 'keyup' por 'input'
const writeCVCData = (event) => {
  if (cvcinputElement.value === '') {
    cvcofcardElment.textContent = '000';
  } else {
    cvcofcardElment.textContent = cvcinputElement.value;
  }
};
cvcinputElement.addEventListener('keyup', writeCVCData);
//se puede sustituir 'keyup' por 'input'

const validateField = (event) => {
  event.preventDefault();
  if (nameinputElement.value === '') {
    cbbnameElement.classList.replace('cant-be-blank', 'it-is-blank');
  } else {
    cbbnameElement.classList.replace('it-is-blank', 'cant-be-blank');
  }
  if (cardnumberinputElement.value === '') {
    cbbnumberElement.classList.replace('cant-be-blank', 'it-is-blank');
  } else {
    cbbnumberElement.classList.replace('it-is-blank', 'cant-be-blank');
  }
  if (monthinputElement.value === '' || yearinputElement.value === '') {
    cbbdateElement.classList.replace('cant-be-blank', 'it-is-blank');
  } else {
    cbbdateElement.classList.replace('it-is-blank', 'cant-be-blank');
  }
  if (cvcinputElement.value === '') {
    cbbcvvElement.classList.replace('cant-be-blank', 'it-is-blank');
  } else {
    cbbcvvElement.classList.replace('it-is-blank', 'cant-be-blank');
  }
};
form.addEventListener('submit', validateField);
