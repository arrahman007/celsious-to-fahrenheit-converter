// fahrenheit-to-celsious-converter ////

function getCelcius(fahrenheit) {
    fahrenheit = (fahrenheit - 32) * 5 / 9;
    return fahrenheit;
}

let inputFromUser = 1;
let celsiousResult = getCelcius(inputFromUser);
console.log('Fahrenheit', celsiousResult);
