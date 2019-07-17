/*
Conditional statments:
    - Used when you want to perform different actions for different decisions.

if, else if, else Statements:

- Use if to specify a block of code to be executed, if a specified condition is
    true.
- Use else to specify a block of code to be executed, if the same condition is 
    false.
- Use else if to specify a new condition to test, if the first condition is 
    false.
- The condition is any boolean value (true/false) or any boolean expression.
    For example: 1 === 1 or 1 !== 1.
- The condition being checked must be inside parenthesis ().
- Code Block: {}; A space where a specific set of code can/will execute.
- Evaluate: What a line of code will resolve to.
- Conditional: (); The part of the if statement that determines if the code will run
    based on boolean values.
- Keywords: if, else if, else; A specific word in JavaScript that has a specific
    purpose and can not be used otherwise.
- Comparison Operator: 1 === 1, 1 !== 1; Returns a logical value base on whether
    if the comparison is true or false. 

Syntax of if, else if, and else statements:

    if (condition1) {
        // block of code to be executed if condition1 is true.
    } else if (condition2) {
        // block of code to be executed if condition1 is false and condtion2 is true.
    } else {
        // block of code to be executed if condition1 and condition2 is false.
    }
    
Example:    
    
    If the hour is less than 18:00, create a "Good day" greeting, otherwise
    "Good evening".
        if (hour < 18) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }
        
switch Statements:

- Use switch to specify many alternative blocks of code to be executed.
- Use switch to select one of many code blocks to be executed.

Syntax:

    switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
    }

Explanation:
    - The switch expression is evaluated once.
    - The value of the expression is compared with the values of each case.
    - If there is a match, the associated block of code is executed.
    
The break Keyword:
    - When JavaScript reaches a break keyword, it breaks out of the switch block.
    - This will stop the execution of inside the block.
    - Most of the time it isn'y necessary to break the last case in a switch
        block. The block breaks (ends) there anyway.
    - If you omit the break statement, the case will be executed even if the 
        evaluation does not match the case.
    
    default Keyword:
    - Specifies the code to run if there is no case match.
    - The default does not have to be at the end; If default is not the last
        case in the switch block, you have to end the default case with a break.

Example:
The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:

    switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

The result of day will be: Sunday

Adding default the example:

The getDay() method returns the weekday as a number between 0 and 6.

If today is neither Saturday (6) nor Sunday (0), write a default message:

    switch (new Date().getDay()) {
        case 6:
            text = "Today is Saturday";
            break; 
        case 0:
             text = "Today is Sunday";
            break; 
        default: 
        text = "Looking forward to the Weekend";
    }

The result of text will be: Today is Sunday
*/