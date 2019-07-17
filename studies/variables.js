/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
LET:
    - let allows us to declare a block scope local variable, optionally initilizing it to a value.
    - Use inside a block, let limits the variable's scope to the block.
    - The difference between var and let is that the latter is initialized to value only when parser evaluates it.
    - let does not create properties of the window object when declared globally.
        Example: 

CONST:
    - Variables defined with const behave like let variables, except they cannot be reassigned:
        Example:
            const pi = 3.141592653589793;
            pi = 3.14;      // This will give an error
            pi = pi + 10;   // This will give an error
    - Declaring a variable with const is similar to let when it comes to Block Scope.
        Example:
            var y = 7;
                // x is 7
            {
                const y = 5;
                // x is 5
            }
                // x is 7
    - const doesn't define a constant value. It defines a constant reference to a value.
    - Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.
    
    HOISTING:
        - Before the statements of a program are executed - all var and function delarations are dragged up to the top of the program. (ie hoisted to the top)
        - Because of this, var values will not throw ReferenceErrors if you try referencing them before they are declared.
        - Instead, they will return the value undefined. 
        - But, only the declaration, not the initialization, is brought to the top.
            Example: 
                console.log(y) //will print undefined
                var y = 20;
                console.log(y) // will print 20
        - let and const are not hoisted and so if you try referencing them before they are declared, you will get a Reference Error.
            Example:
                console.log(a); //gives Reference Error
                console.log(car); //gives Reference Error
                let y = 10;
                const car = "Toyota Supra";

*/

