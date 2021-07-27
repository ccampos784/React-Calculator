/*
 * Pass in the current calculator state and button text. Based on contents of state, will return updated state after operations have been performed.  
 * @param {Object} calcStateObj Current state of the calculator.
 * @param {String} buttonText   Button label/text of the button that was just pressed by the user.
 * @return {Object} newState    Updated state of the calculator.
*/

function calculate(calcStateObj, buttonText) {
    let newState = Object.assign({}, calcStateObj);
    const validOps = '+−X÷%';

    if (buttonText === 'AC') {              /* AC button - reset calc memory */

        newState = {
            total: null,
            next: null,
            operation: null
        }

    } else if (isNumber(buttonText)) {      /* Number button pressed on calculator */

        if (newState.total === null) {              /* First number pressed in an expression */
            newState.total = Number(buttonText);
        } else if (newState.operation === null) {   /* An additional number is pressed without an operator -- append number to existing number */
            newState.total = Number(`${newState.total}${Number(buttonText)}`);
        } else if (newState.next === null){         /* After pressing operator button, a number is selected */
            newState.next = Number(buttonText);      
        } else {                                    /* An additional number is pressed without an operator -- append number to existing number */ 
            newState.next = Number(`${newState.next}${Number(buttonText)}`);
        }

    } else if (buttonText === '±') {        /* Flip sign of number, total or next */

        newState.next !== null ? newState.next = -newState.next : newState.total = -newState.total;

    } else if (buttonText === '.') {        /* Add decimal point to number - temporarily convert to string */
        newState.next !== null ? newState.next = `${newState.next}.` : newState.total = `${newState.total}.`;

    } else if (validOps.indexOf(buttonText) >= 0 || buttonText === '=') { 
                                            /* An operator button is selected */

        if (newState.operation !== null) {           /* Operator was selected previously (3 + 3 + 3) - perform the previous operation first */

            newState.total = performOps(newState.total, newState.next, newState.operation);
        
            newState.next = null;

        }

        buttonText === '=' ? newState.operation = null : newState.operation = buttonText; 
                                                    /* Store the operator, if not an equals sign */
    }      
    
    console.log(newState);
    return newState;
}

/*
 * Checks if string is a number
 * @param {String} num  String to be checked to see if it is a number
 * @return {Boolean} isNum  If string is a number or not.
*/
function isNumber(num) {
    return Number.isInteger(parseInt(num));
}

/*
 * Performs an arithmitic operation
 * @param {Number} num1  First number of the expression
 * @param {Number} num2  Second number of the expression
 * @param {String} operation  Operation to be performed
 * @return {Number} num3  Number that is the result of the operation.
*/ 

function performOps(num1, num2, operation) {
    var num3 = 0; 

    switch(operation) {
        case '+':
            num3 = num1 + num2;
            break;
        case '−':
            num3 = num1 - num2;
            break;
        case 'X':
            num3 = num1 * num2;
            break;
        case '÷':
            num3 = num1 / num2;
            break;
        case '%':
            num3 = num1 % num2;
    }

    return num3;
}


export default calculate;