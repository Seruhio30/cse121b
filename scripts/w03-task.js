/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = parseFloat(document.getElementById('add1').value);
    let addNumber2 = parseFloat(document.getElementById('add2').value);

    document.getElementById('sum').value = add(addNumber1, addNumber2);
}
    
document.getElementById('addNumbers').addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
function Subtract(number1, number2)
{
    return number1 - number2;
}

function subtractNumbers(){
    let Subtract1 = parseFloat(document.getElementById('subtract1').value);
    let Subtract2 = parseFloat(document.getElementById('subtract2').value);

    document.getElementById('difference').value = Subtract(Subtract1, Subtract2);
}
document.getElementById('subtractNumbers').addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */

let multiply = (number1, number2)=>{return number1 * number2};

let multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById('factor1').value);
    let factor2 = parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
}
document.getElementById('multiplyNumbers').addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
let divide = (number1, number2)=>{return number1 / number2};

let divideNumbers = () => {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(dividend, divisor);
}
document.getElementById('divideNumbers').addEventListener("click", divideNumbers);



// Event listener for Get Total Due button
document.getElementById('getTotal').addEventListener('click', function() {
    // Declare and instantiate a variable to store subtotal
    let subtotal = parseFloat(document.getElementById('subtotal').value);

    // Check if membership checkbox is checked
    if (document.getElementById('member').checked) {
        // Apply 20% discount if membership is checked
        subtotal *= 0.8;
    }

    // Output the total to the total span with two decimals
    document.getElementById('total').textContent = `\$${subtotal.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').textContent = numberArray.join(', ');

 /* Output Odds Only Array */
let oddNumbers = numberArray.filter(function(number) {
    return number % 2 !== 0});

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numberArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
let sumOfArray = numberArray.reduce((sum, number)=> sum + number,0);

/* Output Multiplied by 2 Array */
document.getElementById('sumOfArray').textContent = sumOfArray;


/* Output Sum of Multiplied by 2 Array */
let multipliedArray = numberArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

/* Use map() and reduce() to sum the elements of the array after multiplying each element by two */
let sumOfMultiplied = numberArray.map(number => number * 2).reduce((sum, number) => sum + number, 0); 

// Assign the result to the HTML element with the ID sumOfMultiplied
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
