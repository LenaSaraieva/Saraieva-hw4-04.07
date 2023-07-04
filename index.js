let number1 = prompt ("Введіть перше число")
if (number1 === null || number1 === "")
{alert ('Ви не ввели перше число'); }
else {
    let number2 = prompt ("Введіть друге число")
    if (number2 === null || number2 === "")
    {alert ('Ви не ввели друге число'); }
}

    number1 = Number(2); 
    number2 = Number(2);

const sum= number1 + number2;
alert (`2 + 2 = ${sum}`)

const difference= number1 - number2;
alert (`2 - 2 = ${difference}`)

const product= number1 * number2;
alert (`2 * 2 = ${product}`)

const division= number1 / number2;
alert (`2 / 2 = ${division}`)
