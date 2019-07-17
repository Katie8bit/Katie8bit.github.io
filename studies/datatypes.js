/*
The Number Data Type:
    - JavaScript has only one type of number. Numbers can be written with or without decimals.
        For Example:
            var x = 3.14;    // A number with decimals
            var y = 3;       // A number without decimals
    
    Adding Numbers and Strings:
    - JavaScript uses the + operator for both addition and concatenation. Numbers are added. Strings are concatenated.
        For Example:
            var x = 10;
            var y = 20;
            var z = x + y;  // z will be 30 (number)
        If you add two strings, the result will be a string concatenation:
            var x = "10";
            var y = "20";
            var z = x + y;  // z will be 1020 (string)
        If you add a number and a string, the result will be a string concatenation:
            var x = "10";
            var y = 20;
            var z = x + y;  // z will be 1020 (string)

The Strings Data Type:
    - In JavaScript, the textual data is stored as strings.
        A string can be any text inside double or single quotes:
            var carName1 = "Toyota Supra";
            var carName2 = 'Nissan Altima';
    - String indexes are zero-based: The first character is in position 0, the second in 1, and so on.
    - To access the individual characters of strings you use what's called Array-syntax, or bracket notation:
        For Example:
            var carName = "Toyota Supra";
            console.log(name[0]); // prints T
    - To find the last index position of any String or Array you do as follows:
        console.log(carName[carName.length - 1]); // prints a
        
The Boolean Data Type:
    - A binary variable, having two possible values called “true” and “false”.
    - The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.

The Array Data Type:
    - An array literal is a complex data type that is used to store multiple data types.
    - Every value in the list has an index - the number position of the value in the list. (Just like strings.)
    - Arrays can contain references to any other data type: this includes Strings, Numbers, Booleans, other Arrays, Objects, and even Functions.
        Example:
            [] = Array Literal
            var myArray = []; <-- Array literal assigned to a variable named myArray.
            myArray = ['a','b','c']; <-- Array literal with string data types.
    Index: A number that specifies a position inside of an array.
    Bracket Notation: Returns the value in the array at the index provided.
    List/Collection: A more specific term to describe an array.
    Method: Functions on an object.
    Literal: A term used to describe a literal creation of something.
    - Arrays inside of arrays counts as 1 value.
        Example:
            var example = ['a','b'];
            var myArray = [2, 'orange', true, example, 1];
            console.log(myArray[3]) // returns ['a','b']
    - Arrays have a length property which returns the number of values in the array.
        Example:
            myArray.length // returns 5
    - Arrays also have a push method (function) that adds a value(s) to the end of the array.
        Example:
            myArray.push("dog"); // returns [2, 'orange', true, example, 1, "dog"]
    - Arrays have a unshift method (function) that adds values to the begining of the array.
        Example:
            myArray.unshift("dog"); // returns ["dog, 2, 'orange', true, example, 1]
    - Arrays have a pop method (function) that removes a value from the back of the array.
    - Only removes 1 element at a time.
        Example:
            myArray.pop(); // returns ['orange', true, example, 1]
    - Arrays have a shift method (function) that removes a value from the front of an array.
    - Same as pop, it removes 1 element at a time.
        Example:
            myArray.shift(); // returns [2, 'orange', true, example]

The Object Data Type:
    - An object is a complex data type that is used to store data.
    - Usually a collection of data relating to a single object/identity stored in curly braces. {}
    - Similar to arrays, but instead of using indices, values are stored as keys in objects.
    - Objects an contain references to any other data type like: strings, numbers, booleans, other arrays, objects, and even functions.
        Example:
            {} = Object Literal
            var myObject = {}; <-- object literal assigned to a variable.
            myObject = {key1:'a', key2:'b'}; (can't have the same key name)
    Key/Value Pairs: A pair of key/values in an object.
    Properties: Refers to key/value pairs.
    Bracket Notation: Returns the value in the object at the provided key.
    Dot Notation: Returns the value in the object at a literal key.
    - Objects do not have a length property.
    - Every value has a corresponding key. You can think of it like a dictionary where every word has a definition.
    - Similar to an array, in which objects/arrays can grow indefinitely.
    
The Function Data Type:
    - Functions are reusable blocks of code that accept inputs, process those inputs, and returns a new data value.
    - A function is executed when "something" invokes it (calls it).
        Example: 
            function myFunction(p1, p2) {
                return p1 * p2;   // The function returns the product of p1 and p2
            }
    - A function is defined with the function keyword, followed by a name, followed by parentheses (). (as seen above)
    - Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
    - The parentheses may include parameter names separated by commas: (parameter1, parameter2)
    - The code to be executed, by the function, is placed inside curly brackets: {}
        Example:
            function name(parameter1, parameter2, parameter3) {
                // code to be executed
            }
    - Function parameters are listed inside the parentheses () in the function definition.
    - Function arguments are the values received by the function when it is invoked.
    - Inside the function, the arguments (the parameters) behave as local variables.
    - Parameters are just placeholders for arguments that are later "passed" or given to the function at call time.
    - When JavaScript reaches a return statement, the function will stop executing.
        Example: 
            var x = myFunction(4, 3);   // Function is called, return value will end up in x
            function myFunction(a, b) {
                return a * b;   // Function returns the product of a and b
            };
            The result of x will be: 12
    - console.log and return are not the same thing.
    - Return statements inside a function body returns a value or data.
    - console.log does not return, giving you undefined.

The Undefined Data Type:
    - A variable without a value, has the value undefined. The type is also undefined.
        Example: var car;    // Value is undefined, type is undefined
    - Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
        Example: car = undefined;    // Value is undefined, type is undefined

The Null Data Type:
    - Null is "nothing". It is supposed to be something that doesn't exist.
    - The data type of null is actually consided an object in JavaScript.

The NaN Data Type:
    - NaN is a JavaScript reserved word indicating that a number is not a legal number.
    - Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number).
        Example:
            var x = 100 / "Apple";  // x will be NaN (Not a Number)
    - However, if the string contains a numeric value , the result will be a number.
        Example: 
            var x = 100 / "10";     // x will be 10
    - You can use the global JavaScript function isNaN() to find out if a value is a number.
        Example:
            var x = 100 / "Apple";
            isNaN(x);   // returns true because x is Not a Number
    - NaN is considered a Number in JavaScript.

Infinity:
    - Infinity is a numeric value that represents positive infinity.
    - -Infinity is a numeric value that represents negative infinity.
    - Infinity is displayed when a number exceeds the upper limit of the floating point numbers.
    - -Infinity is displayed when a number exceeds the lower limit of the floating point numbers.
    - Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
        Example: 
            var myNumber = 2;
            while (myNumber != Infinity) {   // Execute until Infinity
                myNumber = myNumber * myNumber;
        }
    
Primitive Data:
    - A primitive data value is a single simple data value with no additional properties and methods.
    - The typeof operator can return one of these primitive types:
        - string
        - number
        - boolean
        - undefined
        Example:
            typeof "John"              // Returns "string" 
            typeof 3.14                // Returns "number"
            typeof true                // Returns "boolean"
            typeof false               // Returns "boolean"
            typeof x                   // Returns "undefined" (if x has no value)
Complex Data:
    - The typeof operator can return one of two complex types:
        - function
        - object
    - The typeof operator returns "object" for objects, arrays, and null.
    - The typeof operator does not return "object" for functions.
        Example:
            typeof {name:'John', age:34} // Returns "object"
            typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
            typeof null                  // Returns "object"
            typeof function myFunc(){}   // Returns "function"
        -The typeof operator returns "object" for arrays because in JavaScript arrays are objects. (Have to use isArray)

Difference of Primitive values are passed to a function BY COPY and complex values are BY REFERENCE:
    - When you assign a variable that stores a primitive value to another, the value stored in the variable is created and copied into the new variable.
        Example: 
         First, declare a variable a and initialize its value to 10.
            var a = 10;
         Second, declare another variable b and assign it a value of the variable a. Internally, JavaScript engine copies the value stored in  a into the location of b.
            var b = a;
         Third, assign the variable b new value 20.
            b = 20;
         Because a and b have no relationship, therefore when you change the value stored in the b variable, the value of the a variable remains intact.
            console.log(a); // 10
            console.log(b); // 20
            
    - When you assign a reference value from one variable to another, the value stored in the variable is also copied into the location of the new variable. 
      The difference is that the values stored in both variables now are the address of the actual object stored in the heap. As a result, both variables are pointing to the same object.
        Example: 
            First, declare a variable x that holds an object whose name property is 'John'.
                var x = {name: 'John'};
            Second, declare another variable y and assign the x variable to y. Both x and y are now pointing to the same object on the heap.
                var y = x;
            Third, modify the value stored in the name property of the object using the y variable.
                y.name = 'David';
            Because both x and y are pointing to the same object, therefore, the change is also reflected if you access the object using the x variable.
                console.log(x.name); // 'David'
*/