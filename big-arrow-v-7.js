const add = (num1,num2) => num1 + num2;
const sum = add(15,35);

console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(5, 4, 10);
console.log(result);

// in this parameter parameter bracket is optional because there is only one parametar over here
const tenTimes = (num) => num * 10;
const output = tenTimes(17);
console.log(output);

// if parameter is only one then you dont have use brackets for that perameter 
const fiveTimes = num => num * 10;
const result2 = fiveTimes(50);
console.log(result2);



const getName = () => 'Asraful Islam'
const name = getName();
console.log(name);


// if we can do a functions calculation and other things in one line then we don't have to use {} second bracket 
//if we have to do things in multyline then we have to use {}second bracket

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;

}
const total = doMath(10,5);
console.log(total);

/* document.getElementById('my-btn').addEventListener(event =>{


}) */