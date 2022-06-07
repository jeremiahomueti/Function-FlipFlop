/*

const calcArea = function(radius)
{
    return 3.14 * radius ** 2;
}

const area = calcArea(5);
console.log('area is', area);

*/


/*
Arrow functions usually do not have the name function beside it.
it's often the variable declaration type, followed by function name, equal to paranthesis.

The parenthesis takes in any parameter that we have.

Inside the code block, we have the body as usual.

*/

const calcArea = (radius) => 
{
    return 3.14 * radius**2;
    
};

console.log(calcArea(5));

/*
Some things to take note of:
1. We can remove the parenthesis if the paramater has only one element.
2. Same with the return statement, within the curly braces. We can also remove the curly braces and the 'return' keyword, if there's only one return statement within the function block.
*/

//See index3.js for what the arrow function looks like without the parenthesis and curly braces.