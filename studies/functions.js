/*
- A function is a block of code designed to perform a particular task.
- A function is executed when "something" invokes it (calls it). (Invocation)

Two Phases of Using Functions:
    Declaration/Definition: Creating the Function.
    Invocation/Calling/Executing/Applying: Using the Function.

- Before you can use your function, you have to define your function. To do so all you have
    to do is design some code you want to execute when your function is called.
- The keyword to use when you want to declare a function is, function.

Syntax:
    function(parameterOne, parameterTwo) {
        // function body: code goes here (indetation)
    }

Example:
    function myFunction(para1, para2) {
     return para1 * para2;   // The function returns the product of p1 and p2
    }
    
- A function is defined with the function keyword, followed by a name, followed by parentheses ().
- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
- The parentheses may include parameter (input) names separated by commas:
    (parameter1, parameter2, ...)
- The code to be executed, by the function, is placed inside curly brackets: {}
- When designing Functions, we can list any number of required inputs. We call those inputs parameters.
- Functions return a single output. By default, Functions will return undefined.
    Example:
        console.log((function() {}())); // prints undefined
- Another keyword to use would be return, we can explicitly return a value by using 
    this keyword followed by a value.
    Example:
        function(para1, para2) {
            return para1 / para2;
        }
- Function arguments are the values received by the function when it is invoked.
        
Function Return:
    - When JavaScript reaches a return statement, the function will stop executing.
    - If the function was invoked from a statement, JavaScript will "return" to execute the code after
        the invoking statement.
    - Functions often compute a return value. The return value is "returned" back to the "caller".
        Example:
            var x = myFunction(4, 3);   // Function is called, return value will end up in x
            
            function myFunction(a, b) {
                return a * b;             // Function returns the product of a and b
            }
            Result of x: 12

Why Functions?
    - You can reuse code: Define the code once, and use it many times.
    - You can use the same code many times with different arguments, to produce different results.
        Example:
            function toCelsius(fahrenheit) {
                return (5/9) * (fahrenheit-32);
            }
            var x = toCelsius(77);
            console.log(x) // prints 25
    - Functions can be used the same way as you use variables, in all types of formulas,
        assignments, and calculations.
        Example:
            var x = toCelsius(77);
            var txt = "The temperature is " + x + " Celsius";
        - You can use the function directly, as a variable value:
            var txt = "The temperature is " + toCelsius(77) + " Celsius";
            
    What’s the difference between a function’s parameters and arguments PASSED to a function?
        - A parameter is a variable in a method definition. 
        - When a method is called, the arguments are the data you pass into the method's parameters. 
        - Parameter is variable in the declaration of function. 
        - Argument is the actual value of this variable that gets passed to function.

Function Scope:
    There are two types of scopes:
        - Local Scope
        - Global Scope
    - JavaScript has function scope: Each function creates a new scope.
    - Scope determines the accessibility of these variables.
    - Variables defined inside a function are not accessible from outside the function.
    
    Local:
        - Variables declared within a function, become local to the function.
        - Local variables have Function scope: They can only be accessed from within the function.
            Example:
                // code here can NOT use firstName

                function myFunction() {
                     var firstName = "Katie";

                     // code here CAN use firstName

                }
        - Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
        - Local variables are created when a function starts, and deleted when the function is completed.

    Global: 
        - A variable declared outside a function, becomes global.
        - A global variable has global scope: All scripts and functions on a web page can access it.
            Example:
                var firstName: "Katie";
                //code here can use firstName
                function myFunction() {
                    //code here can also use firstName
                }
    Nested Scopes:
        - All functions have access to the global scope. 
        - JavaScript supports nested functions. Nested functions have access to the scope "above" them.
            Example:
                function add() {
                    var counter = 0;
                    function plus() {counter += 1;}
                    plus();
                    return counter;
                }
        - We need to find a way to execute counter = 0 only one time.
        - This is where we use closure.
    Closure:
        var add = (function () {
            var counter = 0;
            return function () {counter += 1; return counter}
        })();

        add();
        add();
        add();

        // the counter is now 3
        
        - The variable add is assigned the return value of a self-invoking function.
        - The self-invoking function only runs once. It sets the counter to zero, and returns a function expression.
        - This way add becomes a function. It can access the counter in the parent scope.
        - It makes it possible for a function to have "private" variables.
        - The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
*/