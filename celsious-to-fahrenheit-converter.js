// celsious-to-fahrenheit-converter ////

function getCelcius(fahrenheit) {
    fahrenheit = (fahrenheit - 32) * 5 / 9;
    return fahrenheit;
}

let inputFromUser = 3;
let fahrenheitResult = getCelcius(inputFromUser);
console.log('Fahrenheit', fahrenheitResult);
